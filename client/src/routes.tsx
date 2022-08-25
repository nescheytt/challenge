import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchResult from './pages/search-result'


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchResult />} />
    </Routes>
  )
}

export default Root