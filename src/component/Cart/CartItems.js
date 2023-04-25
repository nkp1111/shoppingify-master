import React from 'react'
import { HiPencil } from 'react-icons/hi'

import { foodByCategory } from '../../utils'
import CartItemControl from './CartItemControl'

const CartItems = ({ state: { cart, foodItems } }) => {

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

  const cartItemQtys = mapItemToQty()
  let cartItemsToShow = getCartItem()
  let cartItemsByCategory = foodByCategory({ foodItems: cartItemsToShow })
  let allCategories = Object.keys(cartItemsByCategory)

  return (
    <section className='main__cart-items w-100'>
      <div className='cart-title d-flex align-items-center justify-content-between'>
        <h2 className='me-1'>Shopping list</h2>
        <span><HiPencil className='pencil-icon' /></span>
      </div>

      <div className="cart-items">
        {allCategories.map(category => (
          <div key={category}>
            <p className='cart__items-category'>{category}</p>
            <div className="d-flex flex-column align-items-stretch">
              {cartItemsByCategory[category].map(item => (
                <article className='d-flex align-items-center' key={item.id}>
                  <h3>{item.name}</h3>
                  <CartItemControl item={item} qtys={cartItemQtys} />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CartItems
