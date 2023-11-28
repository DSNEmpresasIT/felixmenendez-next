'use client'
import { ShopComponent } from '@/app/components/catalog/ShopComponent'
import { PAGES } from '@/app/util/pages'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'

import React from 'react'
import { ProductTypes } from '../util/types'

const page = () => {
  const categoria = useSearchParams().get("categoria")
  const filter = categoria as ProductTypes | undefined
  
  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay"></div>
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">{PAGES.CATALOG_PAGE}</h4>
            <ul className="agri-ul">
              <li><a href="/">Home</a></li>
              <li><a className="active">{PAGES.CATALOG_PAGE}</a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}
      <ShopComponent filter={filter} />
      <Script src="/assets/js/jquery.js"/>
      <Script src="/assets/js/fontawesome.min.js"/>
      <Script src="/assets/js/waypoints.min.js"/>
      <Script src="/assets/js/bootstrap.min.js"/>
      <Script src="/assets/js/wow.min.js"/>
      <Script src="/assets/js/swiper.min.js"/>
      <Script src="/assets/js/jquery.countdown.min.js"/>
      <Script src="/assets/js/jquery.counterup.min.js"/>
      <Script src="/assets/js/isotope.pkgd.min.js"/>
      <Script src="/assets/js/lightcase.js"/>
      <Script src="/assets/js/functions.js"/>
    </>
  )
}

export default page
