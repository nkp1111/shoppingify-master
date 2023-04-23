import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Sidebar, Main } from './pages'

const App = () => {

  return (
    <div className='app d-flex'>
      <Router>
        <Sidebar />
        <Main />
      </Router>
    </div>
  )
}

export default App

