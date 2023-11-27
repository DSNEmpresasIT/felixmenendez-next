import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
  <section className="about-us bg_img_1 bg_img padding-tb">
    <div className="shape-about d-none d-xl-block">
      <img src="/assets/images/about/02.png" alt="abs-thumb"/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="about-thumb ml-about-thumb wow fadeInUp" data-wow-delay="0.4s">
            <img src="/assets/images/about/01.png" alt="about-thumb"/>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="section-header text-start wow fadeInUp" data-wow-delay="0.3s">
            <h3>Trayectoria y experiencia</h3>
            <p>Productos y servicios agropecuarios</p>
          </div>
          <div className="section-wrapper">
            <div className="about-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="about-inner">
                <div className="about-content">
                  <p style={{fontSize: '20px'}}>Contamos con amplia experiencia dedicada a brindar soluciones innovadoras y a la vanguardia para mejorar su producción agrícola 🌱💪. Ofrecemos soluciones integrales para el campo, para maximizar su producción y rentabilidad. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
