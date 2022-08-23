import React from 'react'

// themes
import '../../assets/scss/input.scss'

// styles
import './styles.scss'

// icons
import iconSearch from '../../assets/images/ic_search.png'

const SearchBar = () => {
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('send data')
  }

  return (
    <form className="form-searchbar">
      <input type="text" className="input-searchbar" placeholder="Nunca dejes de buscar" />

      <button type="submit" className="button-search" onClick={e => handleSearch(e)}>
        <img src={iconSearch} alt="icon-search" width="auto" height="auto" />
      </button>
    </form>
  )
}

export default SearchBar
