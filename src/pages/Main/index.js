import React from 'react'

import RightSidebar from './RightSidebar'
import MainContent from './MainContent'
import "./main.css"

const index = () => {
  return (
    <main>
      <div className="d-flex">
        <MainContent />
        <RightSidebar />
      </div>
    </main>
  )
}

export default index
