import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './styles.scss'

// images
import LogoMeli from '../../assets/images/logo_meli.png'
import SearchBar from '../search-bar'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-md-1">
            <Link to="/" className="to-home">
              <img src={LogoMeli} alt="logo-meli" width="auto" height="auto" />
            </Link>
          </div>

          <div className="col-xs-10 col-md-11">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
