import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// components
import Layout from '../../components/layouts'
import Breadcrumb from '../../components/breadcrumb'

// styles
import '../../assets/scss/buttons.scss'
import './styles.scss'

const ProductDetail = () => {
  const { id } = useParams()
  const [item, setItem] = useState<{
    condition: string
    description: string
    picture: string
    price: {
      amount: number
    }
    soldQuantity: number
    title: string
  }>()
  const [categories, setCategories] = useState<any>()

  const formato = new Intl.NumberFormat('de-DE')
  const amount = formato.format(item?.price.amount || 0)

  const fetchPost = async () => {
    const response = await fetch(`/api/items/${id}`)
    const data = await response.json()
    setItem(data.item)
    setCategories(data.categories)
  }

  useEffect(() => {
    fetchPost()
 }, [])

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb categories={categories} />

            <div className="page-product-detail">
              <div className="row">
                <div className="col-8">
                  <img src={item?.picture} alt="product" width="100%" />
                </div>

                <div className="col-4">
                  <div className="detail">
                    <span className="quantity-sold">
                      {item?.condition && 'Nuevo'}  - {item?.soldQuantity} vendidos
                    </span>

                    <h1 className="title">{item?.title}</h1>
                    
                    <span className="price">$ {amount}</span>
                    <button type="button" className="button secondary btn-to-buy">Comprar</button>
                  </div>
                </div>
              </div>
              
              {item?.description && (
                <div className="row">
                  <div className="col-8">
                    <div className="description">
                      <h2 className="title">Descripción del producto</h2>
                      <p className="content">{item?.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
