import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ShoppingItem } from '../../component'

const MainContent = () => {
  return (
    <div className='app__main-content'>
      <Router>
        <Routes>
          <Route path="/" element={<ShoppingItem />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MainContent
