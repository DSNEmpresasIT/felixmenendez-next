import React from 'react'

const Sponsors = () => {

  const data = ['01.png','02.png', '03.png', '04.png', '05.png', ];
  const styles = {
    fontSize: '25px',
    backgroundColor: 'transparent',
    border: 'none'
  }

  return (
    <div className="sponsor-section padding-tb">
      <div className="container">
        <div className="section-wrapper wow fadeInUp" data-wow-delay="0.4s">
          <div className="sponsor-slider">
            <div className="swiper-wrapper">
              {
                data.map(pic => {
                  return (
                  <div className="swiper-slide">
                    <div className="sponsor-item">
                      <div className="sponsor-thumb">
                        <a><img src={`/assets/images/sponsor/${pic}`} alt="sponsor"/></a>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <button className="sponsor-button-next" style={styles}>
              <i className="icofont-rounded-left"></i>
            </button>
            <button className="sponsor-button-prev" style={styles}>
              <i className="icofont-rounded-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
