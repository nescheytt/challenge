import React from 'react'

// components
import Layout from '../../components/layouts'
import Breadcrumb from '../../components/breadcrumb'

// styles
import '../../assets/scss/buttons.scss'
import './styles.scss'

const ProductDetail = () => {
  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />

            <div className="page-product-detail">
              <div className="row">
                <div className="col-8">
                  <img src="https://http2.mlstatic.com/D_NQ_NP_912926-MLA50742293198_072022-O.webp" alt="product" width="100%" />
                </div>

                <div className="col-4">
                  <div className="detail">
                    <span className="quantity-sold">
                      Nuevo - 234 vendidos
                    </span>

                    <h1 className="title">
                      Deco Reverse Sombrero Oxford
                    </h1>
                    
                    <span className="price">$1.980</span>
                    <button type="button" className="button secondary btn-to-buy">Comprar</button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-8">
                  <div className="description">
                    <h2 className="title">Descripción del producto</h2>
                    <p className="content">Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
