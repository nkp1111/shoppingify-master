import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { images } from '../../utils'
import SidebarNav from './SidebarNav'
import useGlobalContext from '../../context'
import "./sidebar.css"

const Index = () => {
  const { state } = useGlobalContext()
  return (
    <div className='app__sidebar'>
      <nav className="navbar">
        <div className="container-fluid d-flex flex-column justify-content-between align-items-center">
          {/* logo */}
          <div className='app__sidebar-logo'>
            <Link className="navbar-brand" to="/">
              <img src={images.logo} alt="logo" />
            </Link>
          </div>

          {/* shoppingify items nav */}
          <SidebarNav />

          {/* cart items  */}
          <div className='app__sidebar-cart'>
            <p className="item-num">{state.cart.items.length}</p>
            <div>
              <RiShoppingCart2Line className='cart-icon' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Index
