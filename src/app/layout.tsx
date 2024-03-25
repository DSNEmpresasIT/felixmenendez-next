import 'animate.css';
import '@/app/components/assets/paginationBlogPosts.css';
import '@/app/components/cart/cart-styles.css';
import '@/app/components/common/styles/quoter-style.css'
import '@/app/components/alertPopUp/alertPopUp.css';
import React from 'react';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import WhatsAppButtonComponent from '@/app/components/common/WhatsAppButtonComponent';
import BackToTop from '@/app/components/common/BackToTop';
import BodyLayout from './BodyLayout';
import AlertPopUp from './components/alertPopUp/alertPopUp';
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <head>
        <title>Felixmenendez</title>
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
          <BodyLayout>
            <Header />
            {children}
            <AlertPopUp/>

            <Footer />
            <WhatsAppButtonComponent />
            <BackToTop />
          </BodyLayout>
    </html>
  );
};

