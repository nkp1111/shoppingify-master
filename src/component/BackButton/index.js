import React from 'react'
import { CgArrowLongLeft } from 'react-icons/cg'

import "./backButton.css"

const Index = ({ function1 }) => {
  return (
    <button onClick={function1}
      className='d-flex align-items-center btn back-btn'>
      <CgArrowLongLeft className='back-icon me-2' /> back
    </button>
  )
}

export default Index
