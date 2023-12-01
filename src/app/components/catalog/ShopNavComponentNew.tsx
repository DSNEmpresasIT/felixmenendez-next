import React, { useEffect, useState } from "react";
import { db } from "@/app/util/catalogData";
import { PATH_ROUTES } from "@/app/util/pages";
import { Category, Product, ProductData, ProductTypes } from "@/app/util/types";
import {
  getCategoriesChildren,
  getCategoriesFathers,
} from "@/app/services/Supabase/category-services";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// const mainNavData = [
//   {
//     name: "Herbicidas",
//     filter: ProductTypes.HERBICIDAS,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.HERBICIDAS)
//     ).length,
//   },
//   {
//     name: "Fertilizantes",
//     filter: ProductTypes.FERTILIZANTES,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.FERTILIZANTES)
//     ).length,
//   },
//   {
//     name: "Insecticidas",
//     filter: ProductTypes.INSECTICIDAS_GENERAL,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.INSECTICIDAS_GENERAL)
//     ).length,
//   },
//   {
//     name: "Fungicidas",
//     filter: ProductTypes.FUNGICIDAS,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.FUNGICIDAS)
//     ).length,
//   },
//   {
//     name: "Hermicidas",
//     filter: ProductTypes.HERMICIDAS,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.HERMICIDAS)
//     ).length,
//   },
//   {
//     name: "Semilla",
//     filter: ProductTypes.SEMILLA,
//     length: db.filter((product) =>
//       product.filters.includes(ProductTypes.SEMILLA)
//     ).length,
//   },
// ];

export const ShopNavComponentNew = ({
  handleSetFilter,
  updateFilteredData,
  filters,
  productsLength,
}: {
  handleSetFilter: (category: string) => void;
  updateFilteredData: () => void;
  filters: string | undefined;
  productsLength: number;
}) => {
  let type: string | null = useSearchParams().get("type");
  const [categories, setCategories] = useState<Category[] | null>([]);
  const [categoriesFhater, setCategoriesFhater] = useState<Category[] | null>([]);

  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null);
  const [isActiveSubstance, setActiveSubstance] = useState<boolean | null>(false);
  const [selectedSubtype, setSelectedSubtype] = useState<ProductTypes | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const showSubtypes =
    filters === ProductTypes.FERTILIZANTES ||
    (selectedSubtype !== null && selectedSubtype === filters);


  const handleClickCategory = (category: string | null, isName: boolean) => {
    // if(type){
    //   getCategoriesChildren(category as string)
    // }
    if (category) {
      if (!showSubtypes || category !== selectedSubtype) {
        handleSetFilter(category);
        setSelectedTags((prevTags) => {
          if (!prevTags.includes(category)) {
            return [...prevTags, category];
          }
          return prevTags;
        });
      }
      filterCategoryByFormulacion(category);
    }
  };

  const getChilCategory = async (filter: string) => {
    // setSelectedTags(filter as any)
    setCategoriesFhater(null);
    const categories = await getCategoriesChildren(filter);
    setCategories(categories);
    console.log(filters);
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
    handleSetFilter(null);
    setSelectedSubtype(null);
    setSelectedTags([]);
  };

  const handleRemoveTag = (index: number) => {
    const updatedTags = selectedTags.filter((_, i) => i !== index);
    setSelectedFormulation(null);
    setSelectedTags(updatedTags);

    if (index === 0) {
      type = null;
      // handleClearTypeQuery()
      getFathersCategories();
      setCategories(null);
      updateFilteredData();
      resetFilters();
    } else if (index === 1 && filters) {
      // updateFilteredData(db.filter(item => item.filters.includes(filters)))
    }
  };

  const filterCategoryByFormulacion = (category: string) => {
    const newFilteredProducts = db.filter((product) =>
      product.filters.includes(category)
    );
    setFilteredProducts(newFilteredProducts);
    setActiveSubstance(
      newFilteredProducts.length > 0
        ? newFilteredProducts[0].isActiveSubstance || false
        : false
    );
  };

  const setTags=(tag: string)=>{
    setSelectedTags((prevTags) => {
      if (!prevTags.includes(tag)) {
        return [...prevTags, tag];
      }
      return prevTags;
    });
  }

  useEffect(() => {
    if (filters) {
      filterCategoryByFormulacion(filters);
      setTags(filters)
    } else if (type) {
      console.log(type, " type en effect");
      getChilCategory(type);
      if (!selectedTags.includes(type)) {
        setTags(type);
      }
    } else {
      getFathersCategories();
    }
  }, [filters, type]);

  useEffect(() => {
    console.log(selectedTags, "tags");
  }, [selectedTags]);

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
                  <a
                    type="button"
                    style={{ textTransform: "capitalize" }}
                    onClick={() => handleRemoveTag(index)}
                  >
                    {tag}
                    <span style={{ marginLeft: "10px", padding: "2px" }}>
                      x
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              onClick={resetFilters}
              style={{
                marginTop: "5px",
                color: "rgb(0, 103, 160)",
                fontSize: "13px",
              }}
              type="button"
            >
              Limpiar filtros
            </a>
          </div>
        )}

        <ul className="agri-ul widget-wrapper">
          {(categories && categories.length > 0) ||
          (categoriesFhater && categoriesFhater.length > 0) ? (
            <>
              <li>
                <a
                  href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}`}
                  className="d-flex flex-wrap justify-content-between"
                >
                  <span>
                    <i className="icofont-double-right"></i>Ver Todos
                  </span>
                  <span>({db.length})</span>
                </a>
              </li>
              {categories && categories.length > 0
                ? // Mapeo de categories
                  categories.map((data) => (
                    <li key={data?.id}>
                      <Link
                        className={`d-flex flex-wrap justify-content-between ${
                          filters === data?.category ? "active" : ""
                        }`}
                        type="button"
                        href={`/${PATH_ROUTES.CATALOG_PATH}/?categoria=${data.category}`}
                        onClick={() =>
                          handleClickCategory(data.category ?? null, false)
                        }
                      >
                        <span>
                          <i className="icofont-double-right"></i>
                          {data?.category}
                        </span>
                        <span>({length})</span>
                      </Link>
                    </li>
                  ))
                : categoriesFhater &&
                  categoriesFhater.length > 0 &&
                  categoriesFhater.map((data) => (
                    <li key={data?.id}>
                      <Link
                        className={`d-flex flex-wrap justify-content-between ${
                          filters === data?.category ? "active" : ""
                        }`}
                        type="button"
                        href={`/${PATH_ROUTES.CATALOG_PATH}/?type=${data.category}`}
                        onClick={() => getChilCategory(data.category as string)}
                      >
                        <span>
                          <i className="icofont-double-right"></i>
                          {data?.category}
                        </span>
                        {/* <span>({length})</span> */}
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