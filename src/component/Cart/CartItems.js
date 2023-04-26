import React, { useRef, useEffect } from 'react'
import { HiPencil, HiCheck } from 'react-icons/hi'

import { foodByCategory } from '../../utils'
import CartItemControl from './CartItemControl'
import useGlobalContext from '../../context'

const CartItems = ({ state: { cart, foodItems }, showEdit, setShowEdit }) => {

  const headingRef = useRef();
  const { itemStatusUpdate, changeCartName } = useGlobalContext()

  const getCartItem = () => {
    // filter all items to get cart items
    const allItemsId = cart?.items.map(item => item.id)
    let cartItemsToShow = foodItems.filter(item => allItemsId.includes(item.id))
    return cartItemsToShow
  }

  const mapItemToQty = () => {
    // return object of items with id as key and quantity as value
    const cartItemQtys = {}
    for (let item of cart.items) {
      cartItemQtys[item.id] = item.pieces
    }
    return cartItemQtys
  }

  const mapItemToStatus = () => {
    // return object of items with id as key and status as value
    const cartItemStatus = {}
    for (let item of cart.items) {
      cartItemStatus[item.id] = item.done
    }
    return cartItemStatus
  }

  const cartItemStatus = mapItemToStatus()
  const cartItemQtys = mapItemToQty()
  let cartItemsToShow = getCartItem()
  let cartItemsByCategory = foodByCategory({ foodItems: cartItemsToShow })
  let allCategories = Object.keys(cartItemsByCategory)

  useEffect(() => {
    headingRef.current.contentEditable = showEdit
    headingRef.current.focus()
  }, [showEdit]);

  useEffect(() => {
    const newCartName = headingRef.current.innerText
    if (newCartName !== cart.name) {
      changeCartName(newCartName)
    }
  });

  return (
    <section className='main__cart-items w-100'>
      <div className='cart-title d-flex align-items-center justify-content-between'>
        <h2 className='me-1'
          ref={headingRef}>{cart.name}</h2>
        <span><HiPencil className='pencil-icon'
          onClick={() => setShowEdit(!showEdit)} /></span>
      </div>

      <div className="cart-items">
        {allCategories.map(category => (
          <div key={category}>
            <p className='cart__items-category'>{category}</p>
            <div className="d-flex flex-column">
              {cartItemsByCategory[category].map(item => (
                <div className='d-flex align-items-center' key={item.id}>
                  {showEdit && (
                    <div className='position-relative input-holder'>
                      {/* change single shopping item status  */}
                      <input type="checkbox" id={`done-${item.id}`} className='visually-hidden'
                        onChange={(e) => itemStatusUpdate(item.id, !cartItemStatus[item.id])} />
                      {/* custom checkbox  */}
                      <span className='fake-input'>
                        <HiCheck
                          className={`check-icon ${cartItemStatus[item.id] ? "d-block" : "d-none"}`} />
                      </span>
                    </div>
                  )}
                  <label htmlFor={`done-${item.id}`}
                    className={`${cartItemStatus[item.id] && "text-decoration-line-through"}`}>{item.name}</label>
                  <CartItemControl item={item} qtys={cartItemQtys} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CartItems
