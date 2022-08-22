import React from 'react'
import { Routes, Route } from 'react-router-dom'
import List from './pages/list'


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  )
}

export default Root