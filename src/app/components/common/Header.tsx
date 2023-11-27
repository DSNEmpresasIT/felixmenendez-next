// Header.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { PAGES, PATH_ROUTES } from '@/app/util/pages';
import { ProductTypes } from '@/app/util/types';
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();
  
  const isBlack = (actualRoute: PAGES) => {
    const conditionals = {
      [PAGES.HOME_PAGE]: false,
      [PAGES.CONTACT_PAGE]: false,
      [PAGES.CATALOG_PAGE]: false,
      [PAGES.BLOG_PAGE]: false,
      [PAGES.NOT_FOUND_PAGE]: true,
    };

    return conditionals[actualRoute] ?? false;
  };

  return (
    <header className={`header-section transparent-header ${isBlack(pathname as PAGES) ? 'black-header' : 'white-header'}`}>
      <div className="header-area">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="primary-menu">
              <div className="logo">
                <Link href={PATH_ROUTES.HOME_PATH}><img src="/assets/images/logo/01.png" alt="logo" /></Link>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="icofont-navigation-menu"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="main-area">
                  <div className="main-menu">
                    <ul className="agri-ul">
                      <li className={pathname === PATH_ROUTES.HOME_PATH ? 'active' : ''}><Link href={PATH_ROUTES.HOME_PATH}>Home</Link></li>
                      <li className={pathname === PATH_ROUTES.BLOG_PATH ? 'active' : ''}><Link href={`/${PATH_ROUTES.BLOG_PATH}`}>Noticias</Link></li>
                      <li className={pathname === PATH_ROUTES.CATALOG_PATH ? 'active' : ''}>
                        <a href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}`}>Productos</a>
                          <ul className="agri-ul">
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.HERBICIDAS}`} passHref>
                                Herbicidas
                              </Link>
                            </li>
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.FERTILIZANTES}`}>
                                Fertilizantes
                              </Link>
                            </li>
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.INSECTICIDAS_GENERAL}`}>
                                Insecticidas
                              </Link>
                            </li>
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.FUNGICIDAS}`}>
                                Fungicidas
                              </Link>
                            </li>
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.SEMILLA}`}>
                                Semillas
                              </Link>
                            </li>
                            <li>
                              <Link href={`/${PATH_ROUTES.PRODUCTS_PATH}/${PATH_ROUTES.CATALOG_PATH}/${ProductTypes.HERMICIDAS}`}>
                                Hermicidas
                              </Link>
                            </li>
                          </ul>
                      </li>
                      <li className={pathname === PATH_ROUTES.CONTACT_PATH ? 'active' : ''}><Link href={`/${PATH_ROUTES.CONTACT_PATH}`}>Contacto</Link></li>
                      <li>
                        <a type="button">Seguinos</a>
                        <ul className="agri-ul">
                          <li><a target="_blank" href="https://www.facebook.com/solucionesagropecuariasintegrales"><i style={{ marginRight: '10px' }} className="fa-brands fa-facebook"></i>Facebook</a></li>
                          <li><a target="_blank" href="https://www.instagram.com/felixmenendezsrl/"><i style={{ marginRight: '10px' }} className="fa-brands fa-instagram"></i> Instagram</a></li>
                          <li><a target="_blank" href="https://www.youtube.com/@lafarmaciadelcampo"><i style={{ marginRight: '10px' }} className="fa-brands fa-youtube"></i> Youtube</a></li>
                          <li><a target="_blank" href="https://linktr.ee/felixmemendezsrl"><i style={{ marginRight: '10px' }} className="fa-solid fa-link"></i> Linktree</a></li>
                        </ul>
                      </li>
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

