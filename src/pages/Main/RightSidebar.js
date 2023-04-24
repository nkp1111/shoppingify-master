import React from 'react'

import { Cart } from '../../component'

let cartItem = []
const RightSidebar = () => {
  return (
    <div className='app__main-sidebar'>
      <Cart cartItem={cartItem} />
    </div>
  )
}

export default RightSidebar
