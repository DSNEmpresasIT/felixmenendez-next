'use client'
import React from 'react'
import FormContact from '../components/contact/FormContact'
import Layout from '../layout';



const ContactoFelixMenendez = () => {
  const {
    RECAPTCHA_KEY = '',
    EMAILJS_PUBLIC_KEY = '',
    EMAILJS_SERVICE = '',
    CONTACT_EMAILJS_TEMPLATE = '',
    GOOGLE_MAP_KEY = ''
  } = process.env;

  return (
    <div>
        <section className="page-header bg_img padding-tb fix-mobile">
    <div className="overlay"></div>
    <div className="container">
        <div className="page-header-content-area">
            <h4 className="ph-title">Contactate con nosotros</h4>
            <ul className="agri-ul">
                <li><a href="/">Home</a></li>
                <li><a className="active">Contacto</a></li>
            </ul>
        </div>
    </div>
  </section>
  <div className="contact-section padding-tb">
    <div className="container">
        <div className="contac-top">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-12">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="icofont-google-map"></i>
                        </div>
                        <div className="contact-details">
                            <p>Gobernador Cresto 1475, Concordia E.R., Argentina.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="icofont-phone"></i>
                        </div>
                        <div className="contact-details">
                            <p>+54 0345 421 1515 <br/> +54 9 3454 03-7365</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="icofont-envelope"></i>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }} className="contact-details">
                            <p>info@solucionesagropecuarias.com.ar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contac-bottom">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-12">
                    <div className="location-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9450.775398475274!2d-58.017337562175975!3d-31.382230819378755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade819af3cc247%3A0xfa3445b9df5c0fa!2sFelix%20Menendez%20S.R.L%20-%20Soluciones%20Agropecuarias!5e0!3m2!1ses!2sar!4v1690245314128!5m2!1ses!2sar" 
                            style={{border: 0, width: '100%', height: '60vh'}} 
                            // allowFullScreen={}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <FormContact keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }}/>
            </div>
        </div>
    </div>
  </div>

  {/* <FormContactEmail keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }} />  */}
  <script src="/assets/js/jquery.js"></script>
  <script src="/assets/js/fontawesome.min.js"></script>
  <script src="/assets/js/waypoints.min.js"></script>
  <script src="/assets/js/bootstrap.min.js"></script>
  <script src="/assets/js/wow.min.js"></script>
  <script src="/assets/js/swiper.min.js"></script>
  <script src="/assets/js/jquery.countdown.min.js"></script>
  <script src="/assets/js/jquery.counterup.min.js"></script>
  <script src="/assets/js/isotope.pkgd.min.js"></script>
  <script src="/assets/js/lightcase.js"></script>
  <script src="/assets/js/functions.js"></script>
  <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`}
  type="text/javascript"></script>
    </div>
  )
}

export default ContactoFelixMenendez
