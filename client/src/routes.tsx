import React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import Home from './pages/home'
import SearchResult from './pages/search-result'
import ProductDetail from './pages/product-detail'


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<SearchResult />} />
      <Route path="/items/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default Root