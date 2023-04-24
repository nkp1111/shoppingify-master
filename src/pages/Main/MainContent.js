import React from 'react'
import { Routes, Route } from "react-router-dom"

import { ShoppingItem, ShoppingHistory, ShoppingStats } from '../../component'

const MainContent = () => {
  return (
    <div className='app__main-content'>
      <Routes>
        <Route path="/" element={<ShoppingItem />} />
        <Route path="/history" element={<ShoppingHistory />} />
        <Route path="/stat" element={<ShoppingStats />} />
      </Routes>
    </div>
  )
}

export default MainContent
