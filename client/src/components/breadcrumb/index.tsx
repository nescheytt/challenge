import React from 'react'

// styles
import './styles.scss'

interface BreadcrumbProps {
  categories: [
    category: string
  ]
}

const Breadcrumb = ({ categories }: BreadcrumbProps) => {

  if (categories?.length.toString() === '0') {
    return <div className="breadcrumb-container" />
  }

  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb-ul">
        {categories?.map((category, index) => {
          return (
            <li className="breadcrumb-li" key={index}>{category}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
