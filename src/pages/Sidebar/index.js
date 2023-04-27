import React, { useEffect } from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { images } from '../../utils'
import SidebarNav from './SidebarNav'
import useGlobalContext from '../../context'
import "./sidebar.css"

const Index = () => {
  const { state } = useGlobalContext()

  const handleMainSidebar = () => {
    // on small screen change main sidebar display setting
    const width = window.innerWidth
    if (width <= 960) {
      const mainRightSidebar = document.querySelector(".app__main-sidebar")
      const displayStyle = window.getComputedStyle(mainRightSidebar, null).display
      if (displayStyle === "none") {
        mainRightSidebar.style.display = "block"
      } else {
        mainRightSidebar.style.display = "none"
      }
    }
  }

  const resetRightSidebar = () => {
    // show main right side bar on big screen
    if (window.innerWidth > 960) {
      const mainRightSidebar = document.querySelector(".app__main-sidebar")
      mainRightSidebar.style.display = "block"
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resetRightSidebar)
    return () => window.removeEventListener("resize", resetRightSidebar)
  })

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
          <div className='app__sidebar-cart' onClick={handleMainSidebar}>
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
