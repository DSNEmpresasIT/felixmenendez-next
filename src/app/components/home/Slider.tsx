import Image from 'next/image'
import React from 'react'

const Slider = () => {

  const dataSlider = [
    {
      title: 'Rendimiento óptimo',
      description: 'Insumos de calidad.',
    },
    {
      title: 'Protección de cultivos',
      description: 'Soluciones efectivas',
    },
    {
      title: 'Cultivos saludables',
      description: 'Productos avanzados.',
    },
    {
      title: 'Félix Menéndez',
      description: 'Nos vemos en tu campo.',
    },
  ]

  return (
<section className="banner banner-2">
	<div className="banner-slider">
		<div className="swiper-wrapper" >
			{
				dataSlider.map((slide, i) => {
						return (
							<div className="swiper-slide" key={i}>
								<div className="container">
									<div className="banner-item">
										<div  className="banner-inner">
											<div  className="banner-thumb">
												<img style={{objectFit:'cover'}} src={`/assets/images/blog/${i+1}.png`} alt="banner-slider"/>
											</div>
											<div className="banner-content">
												<h3></h3>
												<div className="banner-title">{slide.title}</div>
												<div className="banner-desc">{slide.description}</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					}
				)
			}
		</div>
		<div className="banner-pagination"></div>
		<button className="carousel-control-next banner-button-next" type="button">
			<span className="carousel-control-next-icon"></span>
			<span className="visually-hidden">Next</span>
		</button>
		<button className="carousel-control-prev banner-button-prev" type="button">
			<span className="carousel-control-prev-icon"></span>
			<span className="visually-hidden">Previous</span>
		</button>
	</div>
</section>
  )
}

export default Slider
