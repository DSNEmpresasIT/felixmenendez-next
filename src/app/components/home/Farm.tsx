import React from 'react'

const Farm = () => {
  return (
    <section className="agricul-fruits-section bg_img_1 bg_img">
    <div className="container">
      <div className="section-wrapper">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
            <div className="fruits-left">
              <div className="agricul-fruits-thumb">
                <img src="/assets/images/farm/02.png" alt="agricul-farm" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay="0.4s">
            <div className="fruits-right">
              <div className="section-header text-center text-lg-start">
                <h2>Productos</h2>
                <p style={{fontSize: '20px'}}>
                  Ofrecemos una amplia gama de productos, desde fertilizantes, semillas, herbicidas, insecticidas, fungicidas,, hasta coadyuvantes e inoculantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Farm
