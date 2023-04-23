import React from 'react'

const index = () => {
  return (
    <div className='app__sidebar'>
      <nav className="navbar vh-100 align-items-normal">
        <div className="container-fluid d-flex flex-column justify-content-between">
          {/* logo */}
          <div className='app__sidebar-logo'>
            <a className="navbar-brand" href="#">Navbar</a>
          </div>
          {/* shoppify items nav */}
          <div className='app__sidebar-nav'>
            nav items
          </div>
          {/* cart items  */}
          <div className='app__sidebar-cart'>
            cart
          </div>
        </div>
      </nav>
    </div>
  )
}

export default index
