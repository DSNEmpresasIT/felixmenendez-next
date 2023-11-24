// Header.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PAGES, PATH_ROUTES } from '../../util/pages';

const Header = () => {
  const router = useRouter();

  const isBlack = (actualRoute: string) => {
    const blackRoutes: string[] = [
      PAGES.HOME_PAGE,
      PAGES.CONTACT_PAGE,
      PAGES.CATALOG_PAGE,
      PAGES.BLOG_PAGE,
      PAGES.NOT_FOUND_PAGE,
    ];

    return blackRoutes.includes(actualRoute);
  };

  return (
    <header className={`header-section transparent-header ${isBlack(router.pathname) ? 'black-header' : 'white-header'}`}>
      <div className="header-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            {/* Resto del código del encabezado */}
            <div className="primary-menu">
              <div className="logo">
                <Link href={PATH_ROUTES.HOME_PATH}><a><img src="/assets/images/logo/01.png" alt="logo" /></a></Link>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icofont-navigation-menu"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="main-area">
                  <div className="main-menu">
                    <ul className="agri-ul">
                      {/* Resto del código del menú */}
                      <li className={router.pathname === PATH_ROUTES.HOME_PATH ? 'active' : ''}><Link href={PATH_ROUTES.HOME_PATH}><a>Home</a></Link></li>
                      <li className={router.pathname === PATH_ROUTES.BLOG_PATH ? 'active' : ''}><Link href={`/${PATH_ROUTES.BLOG_PATH}`}>Noticias</Link></li>
                      <li className={router.pathname === PATH_ROUTES.CATALOG_PATH ? 'active' : ''}>
                        <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}`}>Productos</Link>
                        <ul className="agri-ul">
                          {/* Resto del código de los elementos del submenú */}
                        </ul>
                      </li>
                      <li className={router.pathname === PATH_ROUTES.CONTACT_PATH ? 'active' : ''}><Link href={`/${PATH_ROUTES.CONTACT_PATH}`}>Contacto</Link></li>
                      {/* Resto del código del menú */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

