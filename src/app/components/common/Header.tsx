"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {  PATH_ROUTES } from "@/app/util/pages";
import { Category,  } from "@/app/util/types";
import { usePathname } from "next/navigation";
import { getCategoriesFathers } from "@/app/services/Supabase/category-services";
import Cart from "../cart/cart-component";
import { getCart } from "../cart/cart-service";
import { CartItem } from "../cart/cart-model";
const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isBlackHeader, setIsBlackHeader] = useState(false);
  const pathname = usePathname();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cart, setCart] = useState(getCart());

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const QuotationToggle = () => {
    return (
      <>
        <div className="d-flex align-items-center ">
          <a
            className="d-flex align-items-center custom-link"
            style={{ paddingRight: "3px" }}
         
            onClick={toggleCartVisibility}
          >
            Cotización
            {/* <span className="align-items-top ms-1">
                <QuotationIcon width="31" height="31" />
                </span> */}
          </a>
          {cart.length > 0 && (
            <div
              className="hover-effect d-flex justify-content-center  rounded-circle "
              style={{
                background: "#ffb11f",
                width: "20px",
                height: "20px",
                alignItems: "center",
              }}
            >
              <span
                className="hover-effect text-white"
                style={{ color: "white" }}
              >
                {cart.length}
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const fetchCategories = async () => {
    const categoriesData = await getCategoriesFathers();
    if (categoriesData) {
      setCategories(categoriesData);
    }
  };

  const handleCartUpdate = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    console.log(cart);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const isBlack = (actualRoute: PATH_ROUTES) => {
      const conditionals = {
        [PATH_ROUTES.HOME_PATH]: false,
        [PATH_ROUTES.CONTACT_PATH]: false,
        [PATH_ROUTES.CATALOG_PATH]: false,
        [PATH_ROUTES.BLOG_PATH]: true,
        [PATH_ROUTES.PRODUCTS_PATH]: true,
        [PATH_ROUTES.NOT_FOUD_PATH]: true,
      };

      return conditionals[actualRoute] ?? true;
    };

    setIsBlackHeader(isBlack(pathname.replace(/^\/+/, "") as any));
  }, [pathname]);

  return (
    <header
      className={`header-section transparent-header`}
      style={
        isBlackHeader
          ? { backgroundColor: "black", top: "0px" }
          : { top: "20px" }
      }
    >
      <div className="header-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="primary-menu">
              <div className="logo">
                <a href={"/"}>
                  <img className="logo-size-bp" src="/assets/images/logo/01.png" alt="logo" />
                </a>
              </div>
              <div className="d-flex " style={{gap: '12px'}}>
                <div className="quoter-mobile">
                  <QuotationToggle/>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="icofont-navigation-menu"></i>
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="main-area">
                  <div className="main-menu">
                    <ul className="agri-ul">
                      <li
                        className={
                          pathname === PATH_ROUTES.HOME_PATH ? "active" : ""
                        }
                      >
                        <a href={"/"}>Home</a>
                      </li>
                      <li
                        className={
                          pathname === PATH_ROUTES.BLOG_PATH ? "active" : ""
                        }
                      >
                        <a href={`/${PATH_ROUTES.BLOG_PATH}`}>Noticias</a>
                      </li>
                      <li
                        className={
                          pathname === PATH_ROUTES.CATALOG_PATH ? "active" : ""
                        }
                      >
                        <a href={`/${PATH_ROUTES.CATALOG_PATH}`} type="button">
                          Productos
                        </a>
                        <ul className="agri-ul">
                          {categories.map((category) => (
                            <li key={category.id}>
                              {pathname === "/" ? (
                                <Link
                                  href={`/${PATH_ROUTES.CATALOG_PATH}?type=${category.category}`}
                                >
                                  {category.category}
                                </Link>
                              ) : (
                                <a
                                  href={`/${PATH_ROUTES.CATALOG_PATH}?type=${category.category}`}
                                >
                                  {category.category}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li
                        className={
                          pathname === PATH_ROUTES.CONTACT_PATH ? "active" : ""
                        }
                      >
                        <Link href={`/${PATH_ROUTES.CONTACT_PATH}`}>
                          Contacto
                        </Link>
                      </li>
                      <li>
                        <a type="button">Seguinos</a>
                        <ul className="agri-ul">
                          <li>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/solucionesagropecuariasintegrales"
                            >
                              <i
                                style={{ marginRight: "10px" }}
                                className="fa-brands fa-facebook"
                              ></i>
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.instagram.com/felixmenendezsrl/"
                            >
                              <i
                                style={{ marginRight: "10px" }}
                                className="fa-brands fa-instagram"
                              ></i>{" "}
                              Instagram
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.youtube.com/@lafarmaciadelcampo"
                            >
                              <i
                                style={{ marginRight: "10px" }}
                                className="fa-brands fa-youtube"
                              ></i>{" "}
                              Youtube
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://linktr.ee/felixmenendez"
                            >
                              <i
                                style={{ marginRight: "10px" }}
                                className="fa-solid fa-link"
                              ></i>{" "}
                              Linktree
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`${
                          pathname === PATH_ROUTES.CONTACT_PATH ? "active" : ""
                        } quoter-desktop`}
                      >
                        <QuotationToggle/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Cart
        isCartVisible={isCartVisible}
        onCartUpdate={handleCartUpdate}
        toggleCartVisibility={toggleCartVisibility}
      />
    </header>
  );
};

export default Header;
