import React from 'react'
import { CgArrowLongLeft } from 'react-icons/cg'

const Index = ({ function1 }) => {
  return (
    <button onClick={function1}
      className='d-flex align-items-center'>
      <CgArrowLongLeft className='back-icon me-1' /> back
    </button>
  )
}

export default Index
