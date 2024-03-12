import { PATH_ROUTES } from '@/app/util/pages'
import Link from 'next/link'
import React from 'react'

const ProductSection = () => {
  return (
    <div>
      <section className="product-section product-style2 padding-tb">
			{/* <div className="shape-image">
				<img src="assets/images/product/shape/01.png" alt="abs-thumb" className="shape-1"/>
				<img src="assets/images/product/shape/02.png" alt="abs-thumb" className="shape-2"/>
			</div> */}
			<div className="container">
				<div className="section-header wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
					<h3>Productos Agropecuarios Felix Menendez</h3>
					<p>Explora nuestras categorias de productos agropecuarios en concordia</p>
				</div>
				<div className="section-wrapper">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.4s" style={{visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp'}}>
							<div className="product-item-2">
								<div className="product-inner">
									<div className="product-thumb">
										<img alt="Fertilizantes" src="assets/images/product-category/fertilizantes.png" />
									</div>
									<div className="product-content">
										<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Fertilizantes`}><h5>Fertilizantes</h5></Link>

										<div className="cart-option">
											<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Fertilizantes`} className="lab-btn"><span>Explorar</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp',}}>
							<div className="product-item-2">
								<div className="product-inner">
									<div className="product-thumb">
										<img src="assets/images/product-category/semillas.png" alt="Semillas"/>
									</div>
									<div className="product-content">
										<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Semillas`}><h5>Semillas</h5></Link>

										<div className="cart-option">
                    <Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Semillas`} className="lab-btn"><span>Explorar</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.6s" style={{visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp',}}>
							<div className="product-item-2">
								<div className="product-inner">
									<div className="product-thumb">
										<img src="assets/images/product-category/proteccionDeCultivo.png" alt="Proteccion de cultivos"/>
									</div>
									<div className="product-content">
										<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Protección+de+cultivo`}><h5>Proteccion de cultivos</h5></Link>

										<div className="cart-option">
                    <Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Protección+de+cultivo`} className="lab-btn"><span>Explorar</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp',}}>
							<div className="product-item-2">
								<div className="product-inner">
									<div className="product-thumb">
										<img src="assets/images/product-category/masInSumosAgricolas.png" alt="Mas insumos agrícolas"/>
									</div>
									<div className="product-content">
										<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Mas+insumos+agrícolas`}><h5>Mas insumos agrícolas</h5></Link>
										<div className="cart-option">
											<Link href={`/${PATH_ROUTES.CATALOG_PATH}?type=Mas+insumos+agrícolas`} className="lab-btn"><span>Explorar</span></Link>
										</div>
									</div>
								</div>
							</div>
						</div>




					</div>
					<div className="text-center wow fadeInUp" data-wow-delay="0.5s"  style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp',}}>
						<Link href={`/${PATH_ROUTES.CATALOG_PATH}`} className="lab-btn"><span>Ir a productos</span></Link>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default ProductSection
