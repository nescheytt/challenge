import React from 'react'

// components
import Layout from '../../components/layouts'
import Breadcrumb from '../../components/breadcrumb'
import Card from '../../components/card'

// styles
import './styles.scss'
import '../../assets/scss/grid/container.scss'
import '../../assets/scss/grid/row.scss'
import '../../assets/scss/grid/col.scss'

const mockCard = [
  {
    url: '/items',
    image: 'https://http2.mlstatic.com/D_NQ_NP_912926-MLA50742293198_072022-O.webp',
    price: '$1.980',
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
    location: 'Capital Federal',
  },
  {
    url: '/items',
    image: 'https://http2.mlstatic.com/D_NQ_NP_912926-MLA50742293198_072022-O.webp',
    price: '$1.980',
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
    location: 'Capital Federal',
  },
  {
    url: '/items',
    image: 'https://http2.mlstatic.com/D_NQ_NP_912926-MLA50742293198_072022-O.webp',
    price: '$1.980',
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
    location: 'Capital Federal',
  },
  {
    url: '/items',
    image: 'https://http2.mlstatic.com/D_NQ_NP_912926-MLA50742293198_072022-O.webp',
    price: '$1.980',
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!',
    location: 'Capital Federal',
  },
]

const List = () => {
  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />

            <div className="page-search-result">
              {mockCard.map(card => {
                return(
                  <Card card={card} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default List
