'use client'
import Script from 'next/script'
import React, { useState } from 'react'
import Preloader from './components/common/Preloader'


const BodyLayout = ({children}:{children:React.ReactNode}) => {
  const [isJQueryLoad, setJQueryLoad] = useState(false);

  return (
      <body>
        {
          !isJQueryLoad &&<Preloader/>
        }
        {children}
      <Script src="/assets/js/jquery.js" onLoad={()=>setJQueryLoad(true)} />
      <Script src="/assets/js/fontawesome.min.js" />
      <Script src="/assets/js/waypoints.min.js" />
      <Script src="/assets/js/bootstrap.min.js" />
      <Script src="/assets/js/wow.min.js" />
      <Script src="/assets/js/swiper.min.js" />
      <Script src="/assets/js/jquery.countdown.min.js" />
      <Script src="/assets/js/jquery.counterup.min.js"  />
      <Script src="/assets/js/isotope.pkgd.min.js" />
      <Script src="/assets/js/lightcase.js" />
      <Script src="/assets/js/functions.js" />
    </body>
  )
}

export default BodyLayout
