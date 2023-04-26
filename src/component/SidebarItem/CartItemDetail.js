import React from 'react'


import BackButton from '../BackButton'

const CartItemDetail = ({ item, setShowItemDetail }) => {

  const { name, id, category, image, description } = item
  const handleItemDetail = () => {
    setShowItemDetail({ show: false, item: null })
  }

  return (
    <div className='main__sidebar-details'>
      <BackButton function1={handleItemDetail} />
      {name}
    </div>
  )
}

export default CartItemDetail
