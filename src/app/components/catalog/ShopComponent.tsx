import React, { FC, useEffect, useState } from 'react';
import { CardCartComponent } from './CardCartComponent';
import type { ProductData, ProductTypes } from 'src/util/types';
import { db } from 'src/util/catalogData';
import { SearcherComponent } from './SearcherComponent';
import { ShopNavComponentNew } from './ShopNavComponentNew';
import ReactPaginate from "react-paginate";
interface ShopComponentProps {
  filter: ProductTypes | undefined;
}

export const ShopComponent:FC<ShopComponentProps> = ({ filter }) => {
  const [ filters, setFilters ] = useState<ProductTypes | null>(null); 
  const [ProductData, setProductData] = useState<ProductData[]>(db);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginate, setDataPaginate ] = useState<ProductData[]>();
  const postsPerPage = 6; // Número de publicaciones por página

  const handleFilterNav = (productType: ProductTypes, isName: boolean) => {
    setCurrentPage(0);
    let newData: ProductData[];
    if (isName) {
      newData = db.filter(product => product.name === productType)
    } else {
      newData = db.filter(product => product.filters.includes(productType))
    }
    setProductData(newData);
  }

  const handleUpdateFilterData = (filteredData: ProductData[]) => {
    setProductData(filteredData);
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const handleSetFilter = (filter: ProductTypes) => {
    setFilters(filter);
  }

  useEffect(() => {
    if (filter) {
      setFilters(filter);
    } 
  }, [filter])

  useEffect(() => {
    if (filters) {
      handleFilterNav(filters, false)
    } else {
      handleUpdateFilterData(db);
    }
  }, [filters]);

  useEffect(() => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDataPaginate(ProductData?.slice(startIndex, endIndex));
  }, [currentPage, ProductData]);

  return (
    <div className="shop-page padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-7 col-12">
              <aside>
                <SearcherComponent setProductData={setProductData} allData={db} />
                <ShopNavComponentNew handleSetFilter={handleSetFilter} updateFilteredData={handleUpdateFilterData} filters={filters} productsLength={ProductData.length} />
              </aside>
            </div>
            <div className="col-lg-9 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{dataPaginate?.length} {ProductData.length > 1 ? `Resultados de ${ProductData.length}` : 'resultado'}</p>
                  <div className="product-view-mode">
                    <a className="active" data-target="grids"><i className="icofont-ghost"></i></a>
                    <a data-target="lists"><i className="icofont-listing-box"></i></a>
                  </div>
                </div>
                <div className="shop-product-wrap grids row justify-content-center">
                  {
                    dataPaginate?.map((data, i) => {
                      return (
                        <CardCartComponent
                          key={i}
                          title={data.name}
                          description={data.specs?.description ?? ''}
                          img={data.img}
                          filter={data.filters}
                          formulacion={data.formulacion}
                          isActiveSubstance={data.isActiveSubstance}
                        />
                      )
                    })
                  }
                </div>
                <div  style={{ height: '150px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  { ProductData && ProductData.length > 5 && (
                  <ReactPaginate
                    pageCount={Math.ceil(ProductData?.length / postsPerPage)}
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
                  />)}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
