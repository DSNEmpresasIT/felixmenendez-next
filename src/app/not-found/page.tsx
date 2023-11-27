
import React from 'react'
import { PATH_ROUTES } from '../util/pages'
import Script from 'next/script'

const NotFound = () => {
  return (
    <>
   {/*fore zero fore page start here */}
    <section className="fore-zero padding-tb">
      <div className="container">
          <div className="section-wrapper">
              <div className="zero-item text-center mt-5">
                  <h2>Página no encontrada</h2>
                  <div className="zero-thumb" style={{height: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <h1 style={{fontSize: '200px', color: '#ffb11f'}}>404</h1>
                  </div>
                  <div className="zero-content">
                      <a href={PATH_ROUTES.HOME_PATH} className="lab-btn"><span>Back to Home</span></a>
                  </div>
              </div>
          </div>
      </div>
    </section>
      {/*fore zero fore page ending here*/}
    <script src="/assets/js/jquery.js"/>
    <script src="/assets/js/fontawesome.min.js"/>
    <script src="/assets/js/waypoints.min.js"/>
    <script src="/assets/js/bootstrap.min.js"/>
    <script src="/assets/js/wow.min.js"/>
    <script src="/assets/js/swiper.min.js"/>
    <script src="/assets/js/jquery.countdown.min.js"/>
    <script src="/assets/js/jquery.counterup.min.js"/>
    <script src="/assets/js/isotope.pkgd.min.js"/>
    <script src="/assets/js/lightcase.js"/>
    <script src="/assets/js/functions.js"/>
    </>
  )
}

export default NotFound
