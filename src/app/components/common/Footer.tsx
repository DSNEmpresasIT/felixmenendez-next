import React from 'react'
import { BestProducts } from './footer/BestProducts'
import { InstagramGallery } from './footer/InstagramGallery'
import { LastInstagramReel } from './footer/LastInstagramReel'


const Footer =  () => {
  const  INSTAGRAM_TOKEN  = process.env.INSTAGRAM_TOKEN; 
  return (
          <footer className="footer-section padding-tb pb-0">
            <div className="container">
              <div className="footer-top">
                <div className="row">
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="footer-item">
                      <div className="footer-inner">
                        <div className="footer-desc">
                        {INSTAGRAM_TOKEN &&(
                          <LastInstagramReel INSTAGRAM_TOKEN={INSTAGRAM_TOKEN} />
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="footer-item footer-addtess">
                      <div className="footer-inner">
                        <div className="footer-title">
                          <h5 style={{color: '#ffb11f'}}>Félix Menéndez Soluciones Agropecuarias</h5>
                        </div>
                        <div className="footer-body">
                          <ul className="agri-ul">
                            <li>
                              <div className="icon">
                                <i className="icofont-google-map"></i>
                              </div>
                              <div className="detalis">
                                <p>Gobernador Cresto 1475, Concordia E.R., Argentina.</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icofont-phone"></i>
                              </div>
                              <div className="detalis">
                                <p>+54 0345 421 1515, +54 9 3454 03-7365</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i className="icofont-envelope"></i>
                              </div>
                              <div className="detalis" style={{position: 'relative'}}>
                                <p style={{fontSize: '14px'}}>info@solucionesagropecuarias.com.ar</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BestProducts/>
                  {INSTAGRAM_TOKEN &&(
                  <InstagramGallery INSTAGRAM_TOKEN={INSTAGRAM_TOKEN}/>)}
                </div>
              </div>
                <div className="footer-bottom">
                  <p>
                    &copy; 2023
                    <a href="https://www.dsnempresas.com.ar/" target="_blank" rel="noopener noreferrer">
                      <span>
                        Felix Menéndez, Soluciones Agropecuarias 2023 by
                        <img src="/assets/images/logo/dsn.png" style={{ maxWidth: '33px' }} alt="dsn" />
                      </span>
                    </a>
                    {/* <a href="https://donweb.com/es-ar/certificados-ssl" target="_blank" rel="noopener noreferrer">
                      <span>Certificados SSL Argentina</span>
                    </a> */}
                  </p>
                </div>
            </div>
          </footer>
  )
}

export default Footer
