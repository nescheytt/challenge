import React from 'react'

// components
import Layout from '../../components/layouts'
import Breadcrumb from '../../components/breadcrumb'

// styles
import './styles.scss'
import '../../assets/scss/grid/container.scss'
import '../../assets/scss/grid/row.scss'
import '../../assets/scss/grid/col.scss'

const List = () => {
  return (
    <Layout>
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default List
