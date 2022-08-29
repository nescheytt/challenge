import React from 'react'

// components
import Layout from '../../components/layouts'

// styles
import './styles.scss'

// images
import emptyState from '../../assets/images/empty-state-home.svg'

const Home = () => {
  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-empty-container">
              <span className="empty-title">
                Realizá una búsqueda para ver los resultados acá
              </span>
              <img src={emptyState} alt="empty-state" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
