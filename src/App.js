import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Items from './pages/Items'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      
      <Route path='/Items' element={<Items />} />
      
      
    </Routes>
  )
}
