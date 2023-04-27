import React from 'react'

import BackButton from '../BackButton'
import useGlobalContext from '../../context'

const CartItemDetail = ({ item, setShowItemDetail }) => {

  const { addItemToCart } = useGlobalContext()
  const { name, category, image, description } = item
  const handleItemDetail = () => {
    setShowItemDetail({ show: false, item: null })
  }

  return (
    <div className='main__sidebar-details'>
      <BackButton function1={handleItemDetail} />
      <article className="details-item d-flex flex-column">
        <div className="order-2">
          <div className='details__item-title'>name</div>
          <h3>{name}</h3>
          <div className='details__item-title'>category</div>
          <p className='category'>{category}</p>
          <div className='details__item-title'>note</div>
          <p>{description}</p>
        </div>
        <div className="order-1">
          <img src={image} alt={`${name}`} />
        </div>
      </article>
      <button className='btn mt-3 add-btn'
        onClick={(e) => {
          addItemToCart(item)
          handleItemDetail()
        }}>Add to list</button>
    </div>
  )
}

export default CartItemDetail
