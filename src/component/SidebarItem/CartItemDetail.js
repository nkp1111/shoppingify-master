import React from 'react'

import BackButton from '../BackButton'

const CartItemDetail = ({ item, setShowItemDetail }) => {

  const { name, category, image, description } = item
  const handleItemDetail = () => {
    setShowItemDetail({ show: false, item: null })
  }

  return (
    <div className='main__sidebar-details'>
      <BackButton function1={handleItemDetail} />
      <article className="details-item d-flex flex-column">
        <div className="order-2">
          <h3>{name}</h3>
          <p className='category'>{category}</p>
          <p>{description}</p>
        </div>
        <div className="order-1">
          <img src={image} alt={`${name}`} />
        </div>
      </article>
    </div>
  )
}

export default CartItemDetail
