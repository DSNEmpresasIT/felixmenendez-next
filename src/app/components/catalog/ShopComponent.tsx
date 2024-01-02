'use client'
import React, { FC, useEffect, useState } from 'react';
import { CardCartComponent } from './CardCartComponent';
import type { Product, ProductTypes } from '@/app/util/types';
import { SearcherComponent } from './SearcherComponent';
import { ShopNavComponentNew } from './ShopNavComponentNew';
import ReactPaginate from "react-paginate";
import "@/app/components/assets/paginationBlogPosts.css";
import { getAllProducts, getProductsByCategory } from '@/app/services/Supabase/product-services';
import CustomPagination from '../paginator/Paginator';
import { useSearchParams } from 'next/navigation';
import Cart from '../cart/cart-component';
interface ShopComponentProps {
  filter: ProductTypes | undefined;
}

export const ShopComponent:FC<ShopComponentProps> = ({ filter }) => {
  const type: string | null = useSearchParams().get("type");
  const [ filters, setFilters ] = useState<string | undefined>(undefined); 
  const [ProductData, setProductData] = useState<Product[] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginate, setDataPaginate ] = useState<Product[]>();
  const postsPerPage = 6; // Número de publicaciones por página

  const handleFilterNav = async (categorie: string )  => {
    setCurrentPage(0);
    try {
        const productsByName = await getProductsByCategory(categorie);
      setProductData(productsByName);
      console.log(productsByName , ' data nueva')
      console.log(ProductData, 'product data')
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleUpdateFilterData = async() => {
    const allData:Product[] | null = await getAllProducts();
    setProductData(allData);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const handleSetFilter = (filter: string) => {
    setFilters(filter);
  }

  useEffect(() => {
    if (filter) {
      setFilters(filter);
    } 
  }, [filter])

  useEffect(() => {
    if (filters) {
      console.log(filters)
      handleFilterNav(filters)
    } else {
       handleUpdateFilterData();
    }
  }, [filters]);

  useEffect(() => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDataPaginate(ProductData?.slice(startIndex, endIndex));
  }, [currentPage, ProductData]);

  return (
    <>
   
    <div className="shop-page padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-7 col-12">
              <aside>
                <SearcherComponent setProductData={setProductData} updateFilteredData={handleUpdateFilterData}  /> 
                <ShopNavComponentNew handleSetFilter={handleSetFilter} updateFilteredData={handleUpdateFilterData} filters={filters} productsLength={ProductData ? ProductData.length : 0}
/>
              </aside>
            </div>
            <div className="col-lg-9 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>
                        {dataPaginate && dataPaginate.length}{' '}
                        {ProductData && ProductData.length > 1
                         ? `Resultados de ${ProductData.length}`
                         : 'resultado'}
                   </p>
                  <div className="product-view-mode">
                    <a className="active" data-target="grids"><i className="icofont-ghost"></i></a>
                    <a data-target="lists"><i className="icofont-listing-box"></i></a>
                  </div>
                </div>
                <div className="shop-product-wrap grids row justify-content-center">
                  {
                    dataPaginate?.map((data, i) => {
                      return (
                        < CardCartComponent
                          data={data}        
                        />
                      )
                    })
                  }
                </div>
                <div  style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* { ProductData && ProductData.length > 5 && (
                  <ReactPaginate
                    pageCount={Math.round(Math.ceil((ProductData?.length || 0) / postsPerPage))}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={(selected) => handlePageChange(selected.selected)}
                    containerClassName="pagination"
                    activeClassName="active"
                    nextLabel=">"
                    previousLabel="<"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    breakLabel="..."
                    hrefBuilder={() => {
                      window.scrollTo(0, 0);
                      }
                    }
                    renderOnZeroPageCount={null}
                  />)} */}
                {ProductData && ProductData.length > 5 && (
                      <CustomPagination
                            pageCount={Math.round(Math.ceil((ProductData?.length || 0) / postsPerPage))}
                            onPageChange={handlePageChange}
                      />
                )}

                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
