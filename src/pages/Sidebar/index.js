import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'

import { images } from '../../utils'
import "./sidebar.css"
import SidebarNav from './SidebarNav'

const index = () => {
  return (
    <div className='app__sidebar'>
      <nav className="navbar">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center">
          {/* logo */}
          <div className='app__sidebar-logo'>
            <a className="navbar-brand" href="#">
              <img src={images.logo} alt="logo" />
            </a>
          </div>

          {/* shoppify items nav */}
          <SidebarNav />

          {/* cart items  */}
          <div className='app__sidebar-cart'>
            <p className="item-num">4</p>
            <RiShoppingCart2Line className='cart-icon' />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default index
