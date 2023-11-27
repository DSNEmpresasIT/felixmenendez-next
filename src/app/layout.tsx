// components/Layout.tsx
import Head from 'next/head';
import 'animate.css';
import '../app/components/assets/paginationBlogPosts.css';
import React, { Children } from 'react';
import Preloader from './components/common/Preloader';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppButtonComponent from './components/common/WhatsAppButtonComponent';
import BackToTop from './components/common/BackToTop';
import Script from 'next/script';
import { Router } from 'next/router';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content="Félix Menendez - Soluciones Agropecuarias - Concordia E.R." />
        <meta property="og:image" content="https://felixmenendez.com.ar/assets/images/product/home3/06.jpg" />
        <meta property="og:image:width" content="300" />
        <meta name="description" content="Insumos agropecuarios, Concordia, Entre Ríos" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/assets/images/x-icon/favicon_fms.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/assets/css/all.min.css"/>
        <link rel="stylesheet" href="/assets/css/icofont.min.css"/>
        <link rel="stylesheet" href="/assets/css/lightcase.css"/>
        <link rel="stylesheet" href="/assets/css/swiper.min.css"/>
        <link rel="stylesheet" href="/assets/css/style.css"/>
      </head>
      <body>
          <Preloader />
          <Header />
          {children}
          <Footer />
          <WhatsAppButtonComponent />
          <BackToTop />
      </body>
      <script src="/assets/js/jquery.js" />
      <script src="/assets/js/fontawesome.min.js" />
      <script src="/assets/js/waypoints.min.js" />
      <script src="/assets/js/bootstrap.min.js" />
      <script src="/assets/js/wow.min.js" />
      <script src="/assets/js/swiper.min.js" />
      <script src="/assets/js/jquery.countdown.min.js" />
      <script src="/assets/js/jquery.counterup.min.js"  />
      <script src="/assets/js/isotope.pkgd.min.js" />
      <script src="/assets/js/lightcase.js" />
      <script src="/assets/js/functions.js" />
    </>
  );
};

export default Layout;