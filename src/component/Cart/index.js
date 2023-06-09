import React, { useState, useEffect } from 'react'

import { images } from '../../utils'
import SearchForm from './SearchForm'
import CartItems from './CartItems'
import useGlobalContext from '../../context'
import "./cart.css"

const Cart = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const { state, shoppingEnded, setShowAddItemForm, setShowModal } = useGlobalContext()
  const emptyCart = state?.cart?.items?.length === 0

  useEffect(() => {
    if (emptyCart) {
      setShowEdit(false)
    }
  }, [emptyCart]);

  return (
    <div className='main__sidebar-cart d-flex flex-column align-items-center h-100'>
      <div className='cart-padding w-100 d-flex flex-column align-items-center'>
        <div className='cart-header d-flex'>
          <div className="cart-content order-2">
            <h2>Didn’t find what you need?</h2>
            <button className='btn bg-white'
              onClick={() => setShowAddItemForm(true)}>Add item</button>
          </div>
          <div className="cart-image">
            <img src={images.bottle} alt="bottle" />
          </div>
        </div>

        {emptyCart
          ? (
            <div className='empty-cart-display position-relative'>
              <span>No items</span>
              <img
                src={images.cart}
                alt="lady with cart"
                className='position-absolute' />
            </div>
          )
          : <CartItems state={state} showEdit={showEdit} setShowEdit={setShowEdit} searchTerm={searchTerm} />}
      </div>

      <div className="cart-footer mt-auto w-100">
        {showEdit
          ? (
            <div className='btn-holder d-flex'>
              <button className="btn cancel-btn"
                onClick={() => setShowModal(true)}>cancel</button>
              <button className="btn"
                onClick={() => shoppingEnded("completed")}>Complete</button>
            </div>
          )
          : <SearchForm empty={emptyCart} {...{ searchTerm, setSearchTerm }} />}
      </div>
    </div>
  )
}

export default Cart
