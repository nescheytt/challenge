import React from 'react'
import { Link } from "react-router-dom"

// styles
import './styles.scss'

// images
import ic_shipping from '../../assets/images/ic_shipping.png'

interface CardProps {
  item: {
    id: string
    thumbnail: string
    price: number
    title: string
    address: {
      state_name: string
    }
    shipping: {
      free_shipping: boolean
    }
  }
}
 
const Card = ({ item }: CardProps) => {
  const freeShipping = item.shipping.free_shipping
  const formato = new Intl.NumberFormat('de-DE')

  return (
    <Link to={"/items/" + item.id} className="card">
      <img src={item.thumbnail} className="image-product" alt="preview-product" width="180px" height="180px" />
      <div className="data-container">
        <div className="row">
          <div className="col-12">
            <div className="first-data-container">
              <div className="price">
                $ {formato.format(item.price)}
                {freeShipping && <img className="shipping-img" src={ic_shipping} />}
              </div>
              <div className="location">{item.address.state_name}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="title">
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
