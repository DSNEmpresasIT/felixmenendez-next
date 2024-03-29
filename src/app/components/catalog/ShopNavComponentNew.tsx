"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PATH_ROUTES } from "@/app/util/pages";
import { Category, Product, ProductData, ProductTypes } from "@/app/util/types";
import {
  getCategoriesChildren,
  getCategoriesFathers,
} from "@/app/services/Supabase/category-services";
import {  useSearchParams } from "next/navigation";
import Link from "next/link";
import { getProductByFhaterCategory } from "@/app/services/Supabase/product-services";




export const ShopNavComponentNew = ({
  setProductData,
  handleSetFilter,
  updateFilteredData,
  filters,
  productsLength,
}: {
  setProductData: Dispatch<SetStateAction<Product[] | null>>;
  handleSetFilter: (category: string) => void;
  updateFilteredData: () => void;
  filters: string | undefined;
  productsLength: number;
}) => {
 
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [categoriesFhater, setCategoriesFhater] = useState<Category[] | null>([]);

  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null);
  const [isActiveSubstance, setActiveSubstance] = useState<boolean | null>(false);

  const [selectedSubtype, setSelectedSubtype] = useState<ProductTypes | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [type, setType] = useState<string | null>(useSearchParams().get("type"));

  const showSubtypes =
    filters === ProductTypes.FERTILIZANTES ||
    (selectedSubtype !== null && selectedSubtype === filters);

    const removeQueryParam = (param: string) => {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete(param);
        window.history.replaceState({}, '', url.toString());
      }
    };
    
    const getTypeParam=()=>{
      setType(useSearchParams().get("type"))
    }


  const handleClickCategory = (category: string | null, isName: boolean) => {
    if (category) {
      if (!showSubtypes || category !== selectedSubtype) {
        handleSetFilter(category);
        setSelectedTags((prevTags) => {
          
          if (prevTags.length === 2) {
            return [prevTags[0], category];
          }
          
          return [...prevTags, category];
        });
      }
      // filterCategoryByFormulacion(category);
    }
  };

  const getChilCategory = async (filter: string) => {
    setCategoriesFhater(null);
    setSelectedTags([filter])
    const categories = await getCategoriesChildren(filter);
    setCategories(categories);

    // brings all the products of the child categories by the father category
    const productsByFhaterCategory = await getProductByFhaterCategory(filter);
    setProductData(productsByFhaterCategory);
  };

  const getFathersCategories = async () => {
    const categories = await getCategoriesFathers();
    setCategoriesFhater(categories);
  };

  // const handleClickFormulation = (formulation: any) => {
  //   setSelectedFormulation(formulation);
  //   const filteredByFormulation = filteredProducts.filter(
  //     (product) => product.formulacion === formulation
  //   );
  //   updateFilteredData(filteredByFormulation);
  //   setSelectedTags([filters, formulation]);
  // };

  const resetFilters = () => {
    // @ts-ignore
    handleSetFilter("");
    setSelectedSubtype(null);
    setSelectedTags([]);

  };

  const handleRemoveTag = (index: number) => {
    setSelectedFormulation(null);
    const isMainCategory = index === 0;
    const isSubCategory = index === 1;
   if ( isMainCategory) {
      resetFilters();
      removeQueryParam("type");
      removeQueryParam("categoria");
      getTypeParam()
    } else if (isSubCategory) {
  
      removeQueryParam("categoria");
    
      const updatedTags = selectedTags.filter((_, i) => i !== index);
      setSelectedTags(updatedTags);
      updateFilteredData();
    }
  
    getFathersCategories();
    setCategories(null);
  };
  

  // const filterCategoryByFormulacion = (category: string) => {
  //   const newFilteredProducts = db.filter((product) =>
  //     product.filters.includes(category)
  //   );
  //   setFilteredProducts(newFilteredProducts);
  //   setActiveSubstance(
  //     newFilteredProducts.length > 0
  //       ? newFilteredProducts[0].isActiveSubstance || false
  //       : false
  //   );
  // };

  const setTags=(tag: string)=>{
    setSelectedTags((prevTags) => {
      if (prevTags.length === 0) {
        return [tag];
      }
      if (!prevTags.includes(tag)) {
        return [...prevTags, tag];
      }
      return prevTags;
    });
  }

  useEffect(() => {
    if (filters) {
      // filterCategoryByFormulacion(filters);
      setTags(filters)
    } else if (type) {
      console.log(type)
      getChilCategory(type);
      if (!selectedTags.includes(type)) {
        setSelectedTags([type])
      }
    } else {
      getFathersCategories();
    }
  }, [filters, type]);

  

  return (
    <>
      <div className="widget widget-category">
        <div className="widget-header">
          {!filters ? (
            <h5>Tipos de productos</h5>
          ) : (
            <>
              <h5>
                {selectedTags[0]} {selectedTags[1] && selectedTags[1]}
              </h5>
              <span>
                {productsLength}{" "}
                {productsLength === 1 ? "resultado" : "resultados"}
              </span>
            </>
          )}
        </div>
        {selectedTags && selectedTags.length > 0 && (
          <div className="widget widget-tags mt-2">
            <ul className="agri-ul widget-wrapper">
              {selectedTags.map((tag, index) => (
                <li key={index}>
                  <Link
                    href={{}}
                    type="button"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => handleRemoveTag(index)}
                  >
                    {tag}
                    <span style={{ marginLeft: "10px", padding: "2px" }}>
                      x
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={{}}
              onClick={ () => handleRemoveTag(0)}
              style={{
                marginTop: "5px",
                color: "rgb(0, 103, 160)",
                fontSize: "13px",
              }}
              type="button"
            >
              Limpiar filtros
            </Link>
          </div>
        )}

        <ul className="agri-ul widget-wrapper">
          {(categories && categories.length > 0) ||
          (categoriesFhater && categoriesFhater.length > 0) ? (
            <>
              <li>
                <a
                  href={`/${PATH_ROUTES.CATALOG_PATH}`}
                  className="d-flex flex-wrap justify-content-between"
                >
                  <span>
                    <i className="icofont-double-right"></i>Ver Todos
                  </span>
                  {/* <span>({categories?.length ? categories?.length : 0 })</span> */}
                </a>
              </li>
              {categories && categories.length > 0
                ? // Mapeo de categories
                  categories.map((data, i) => (
                    <li key={i}>
                      <Link
                        className={`d-flex flex-wrap justify-content-between ${
                          filters === data?.category ? "active" : ""
                        }`}
                        type="button"
                        href={{
                          pathname: `/${PATH_ROUTES.CATALOG_PATH}`,
                          query: {
                            type:selectedTags[0],
                            categoria: data?.category || '', 
                            
                          },
                        }}
                        onClick={() =>
                          handleClickCategory(data.category ?? null, false)
                        }
                      >
                        <span>
                          <i className="icofont-double-right"></i>
                          {data?.category}
                        </span>
                          {/* <span>({categories.length})</span>  */}
                      </Link>
                    </li>
                  ))
                : categoriesFhater &&
                  categoriesFhater.length > 0 &&
                  categoriesFhater.map((data, i) => (
                    <li key={i}>
                      <Link
                        className={`d-flex flex-wrap justify-content-between ${
                          filters === data?.category ? "active" : ""
                        }`}
                        type="button"
                        href={{
                          pathname: `/${PATH_ROUTES.CATALOG_PATH}`,
                          query: {
                            type: data?.category || '',
                          },
                        }}
                        onClick={() => getChilCategory(data.category as string)}
                      >
                        <span>
                          <i className="icofont-double-right"></i>
                          {data?.category}
                        </span>
                        {/* <span>({categoriesFhater?.length})</span>  */}
                      </Link>
                    </li>
                  ))}
            </>
          ) : (
            <p>Cargando categorías...</p>
          )}
          {/* {showSubtypes && (
            <li>
              {Object.values(ProductTypes)
                .filter((type) => type.startsWith("Fertilizantes"))
                .map((subtype) => (
                  <a
                    key={subtype}
                    className={`d-flex flex-wrap justify-content-between ${
                      selectedSubtype === subtype ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => {
                      handleClickCategory(subtype, false);
                      setSelectedSubtype(subtype);
                    }}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {subtype.replace("FERTILIZANTES_", "")}
                    </span>
                    <span>({subtype.length})</span>
                  </a>
                ))}
            </li>
          )} */}
        </ul>
      </div>
      {/* <div className="widget widget-category">
        {filters && (
          <div className="widget-header">
            <h5>
              {filters !== ProductTypes.SEMILLA &&
                filters !== ProductTypes.HERMICIDAS &&
                (isActiveSubstance ? "Principio Activo" : "Formulación")}
            </h5>
          </div>
        )}
        <ul className="agri-ul widget-wrapper">
          {[
            ...new Set(filteredProducts.map((product) => product.formulacion)),
          ].map((formulation, index) => {
            if (formulation && filters) {
              const formulationLength = filteredProducts.filter(
                (product) => product.formulacion === formulation
              ).length;
              return (
                <li key={index}>
                  <a
                    type="button"
                    className={`d-flex flex-wrap justify-content-between ${
                      selectedFormulation === formulation ? "active" : ""
                    }`}
                    // onClick={() => handleClickFormulation(formulation)}
                  >
                    <span>
                      <i className="icofont-double-right"></i>
                      {formulation}
                    </span>
                    {formulationLength > 1 && (
                      <span>({formulationLength})</span>
                    )}
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div> */}
    </>
  );
};
