import React from 'react'

import { images } from '../../utils'
import SearchForm from './SearchForm'
import CartItems from './CartItems'
import "./cart.css"

const index = ({ cartItem }) => {
  const emptyCart = cartItem.length === 0
  return (
    <section className='main__sidebar-cart h-100'>
      <div className={`cart d-flex flex-column align-items-center h-100`}>
        <div className='cart-header d-flex'>
          <div className="cart-content order-2">
            <h2>Didn’t find what you need?</h2>
            <button className='btn'>Add item</button>
          </div>
          <div className="cart-image">
            <img src={images.bottle} alt="bottle" />
          </div>
        </div>

        {emptyCart
          ? <div className='empty-cart-display position-relative'>
            <span>No items</span>
            <img
              src={images.cart}
              alt="lady with cart"
              className='position-absolute' />
          </div>
          : <CartItems />}

        <div className="cart-footer">
          <SearchForm empty={emptyCart} />
        </div>
      </div>
    </section>
  )
}

export default index