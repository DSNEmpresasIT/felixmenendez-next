'use client'
import { RelatedProductsSection } from '@/app/components/product-single/RelatedProductsSection';
import NavDetails from '@/app/components/product-single/product-details/navDetails';
import { getProductById } from '@/app/services/Supabase/product-services';
import { getProductSingleById } from '@/app/services/Supabase/productSingle-service';
import { PATH_ROUTES } from '@/app/util/pages';
import { Product, ProductData, ProductSingle } from '@/app/util/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'

interface pageProps {
  params: {product: string}
}

export interface ProductFeature {
  pdffiles: string,
  safetyDataSheet: string,
  description: string,
  technicalDetails: TechnicalDetails,
  principalInfo: PrincipalInfo
}

export interface TechnicalDetails {
  modeOfAction: string,
  actionSite: string,
  formulation: string,
  toxicologicalClassification: string,
  presentation: string
}

export interface PrincipalInfo {
  activeIngredient: string,
  weedType: string,
  applicationTimingCrops: string,
  applicationTimingWeeds: string,
  actionForm: string,
  applicationLocation: string
}

const page =() => {
  const path  = useSearchParams().get("id");
  const type = useSearchParams().get("type");
  const categorie = useSearchParams().get("categoria")
  const [productSingle, setProductSingle] = useState<ProductFeature | null>(null);
  const [productSelected, setProduct] = useState<Product | null>(null)


  const getProduct = async () => {
    try {
      
        const productById = await getProductById(path as string);
        setProduct(productById);
        console.log(productSelected)
      
    } catch (error) {
      console.error('Error fetching product by id:', error);
    }
  };

  const getProductSingle = async () => {
    try {
      const productSingle = await getProductSingleById(path as string);
      setProductSingle(productSingle);
      console.log(productSingle)
    } catch (error) {
      console.error('Error fetching product single:', error);
    }
  };

  useEffect(() => {
    if (path) {
      getProduct()
      getProductSingle();
    }
  }, [path]);
  

  return (
    <>
      {/* <!-- Shop Page Section start here --> */}
      <section className="shop-single padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 sticky-widget">
              <div className="product-details">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"> <a href="/" style={{color: 'inherit'}}>Home</a> </li>
                    <li className="breadcrumb-item" aria-current="page"> <a href={`/${PATH_ROUTES.CATALOG_PATH}`} style={{color: 'inherit'}}>Productos</a></li>
                    <li className="breadcrumb-item" style={{color: "#ffb11f"}} aria-current="page">{productSelected?.name}</li>
                    <Link type="a" href={`/${PATH_ROUTES.CATALOG_PATH}`} className="lab-btn" style={{display: 'flex',justifyContent: 'center', marginLeft: '90%', backgroundColor: '#ffb11f', border: 'none', padding: '0.6rem 2rem',color: '#f7f7f7'}}>
                      <span style={{display: 'flex', alignItems: 'center',gap: '0.5rem'}}><i className="icofont-swoosh-left"></i>  Atras</span> 
                    </Link>
                  </ol>
                </nav>
                <div  className="row ">
                  <div className="col-md-6 col-12">
                    <div className="product-thumb">
                      <div className="swiper-container gallery-top">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="shop-item">
                              <div className="shop-thumb">
                                <img
                                  width="100%"
                                  src={productSelected?.img ? `/assets/images/product/${productSelected?.img}/${productSelected?.img}.png` : '/assets/images/product/solubles/solubles.png'}
                                  alt="shop-single"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-md-6 d-flex flex-column mt-4 col-12">
                      <div className='d-flex   align-items-start'>
                      <h4>{productSelected?.name}</h4>
                      </div>
                      <div>
                        <p>  
                          {type && type !== 'undefined' && type !== 'null' ? type : ''} { }
                          {categorie && categorie !== 'undefined' && type !== 'null' ? categorie : ''}
                        </p>
                      </div>
                      <h5>Descripción del producto</h5>
                      <p>{productSingle?.description}</p>
                    <div className="post-content d-flex mt-auto mb-2 flex-column ">
                     
                      <form className='d-flex '>
                        <p className='border-bottom d-inline-flex w-100 border-secondary text-secondary' >Conseguí el mejor precio</p>
                        <a 
                          style={{width: '100%'}} 
                          href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${productSelected?.name}`}
                          target="_blank" 
                          >
                          <button type="button" className="lab-btn"><span>Consultar</span></button>
                        </a>
                        {
                          productSingle?.pdffiles
                          && (
                            <div className="select-product">
                              {/* <ButtonPDFComponent 
                                title={"Descargar Marbete"} 
                                link={`/assets/images/product/${productSelected.img}`} 
                                fileName={"marbete"}
                                client:load
                              /> */}
                            </div>
                          )
                        }
                        {
                          productSingle?.pdffiles
                          && (
                            <div className="select-product">
                              {/* <ButtonPDFComponent 
                                title={"Descargar Flyer comercial"} 
                                link={`/assets/images/product/${productSelected.img}`} 
                                fileName={"flyer"}
                                client:load
                              /> */}
                            </div>
                          )
                        }
                        {
                          productSingle?.pdffiles
                          && (
                            <div className="select-product" style={{width: '100%'}}>
                              {/* <ButtonPDFComponent 
                                title={"Descargar hoja de datos de seguridad"} 
                                link={`/assets/images/product/${productSelected.img}`}
                                fileName={"securitydatapaper"} 
                                client:load
                              /> */}
                            </div>  
                          )
                        }
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              

              <NavDetails data={productSingle} categorie={categorie} type={type} ></NavDetails>
               <RelatedProductsSection productSelected={productSelected} categorie={categorie} type={type}/> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
