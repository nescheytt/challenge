import React from 'react'

// styles
import './styles.scss'

// images
import LogoMeli from '../../assets/images/logo_meli.png'

const Header = () => {
  return (
    <div className="header">
      <div className="container fluid">
        <div className="row">
          <div className="col-12">
            <div className="flex">
              <img src={LogoMeli} alt="logo-meli" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
