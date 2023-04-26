import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Sidebar, Main } from './pages'
import { Modal } from './component'
import useGlobalContext from './context'

const App = () => {

  const { showModal } = useGlobalContext()
  return (
    <div className='app d-flex'>
      <Router>
        <Sidebar />
        <Main />
        {showModal && <Modal />}
      </Router>
    </div>
  )
}

export default App

