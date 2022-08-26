import React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import SearchResult from './pages/search-result'
import ProductDetail from './pages/product-detail'


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchResult />} />
      <Route path="/items" element={<ProductDetail />} />
    </Routes>
  )
}

export default Root