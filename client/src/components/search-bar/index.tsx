import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// themes
import '../../assets/scss/input.scss'

// styles
import './styles.scss'

// icons
import iconSearch from '../../assets/images/ic_search.png'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/items?search=${searchValue}`)
  }

  return (
    <form className="form-searchbar" onSubmit={(e) => handleSearch(e)}>
      <input 
        type="text"
        name="input-searchbar"
        id="input-searchbar"
        className="input-searchbar"
        onChange={e => handleOnChange(e)}
        placeholder="Nunca dejes de buscar"
      />

      <button type="submit" className="button-search">
        <img src={iconSearch} alt="icon-search" width="auto" height="auto" />
      </button>
    </form>
  )
}

export default SearchBar
