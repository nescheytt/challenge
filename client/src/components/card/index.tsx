import React from 'react'

// styles
import './styles.scss'

interface CardProps {
  card: {
    url: string
    image: string
    price: string
    title: string
    location: string
  }
}
 
const Card = ({ card }: CardProps) => {
  return (
    <a href={card.url} className="card">
      <img src={card.image} className="image-product" alt="preview-product" width="180px" height="180px" />
      <div className="data-container">
        <div className="row">
          <div className="col-12">
            <div className="first-data-container">
              <div className="price">{card.price}</div>
              <div className="location">{card.location}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="title">
              {card.title}
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
