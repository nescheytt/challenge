import React from 'react'

// styles
import './styles.scss'

// images
import LogoMeli from '../../assets/images/logo_meli.png'
import SearchBar from '../search-bar'

const Header = () => {
  return (
    <div className="header">
      <div className="container fluid">
        <div className="row">
          <div className="col-1">
            <img src={LogoMeli} alt="logo-meli" width="auto" height="auto" />
          </div>

          <div className="col-11">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
