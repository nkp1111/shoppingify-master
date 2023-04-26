import React, { useEffect, useState } from 'react'

import useGlobalContext from '../../context'
import ViewCart from './ViewCart'
import "./cart.css"
import CartItemDetail from './CartItemDetail'

const Index = () => {

  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const { showItemDetail, setShowItemDetail } = useGlobalContext()

  return (
    <section className='main__sidebar-cart h-100'>
      {showAddItemForm
        ? <form>form</form>
        : showItemDetail.show
          ? <CartItemDetail item={showItemDetail.item} setShowItemDetail={setShowItemDetail} />
          : <ViewCart />}
    </section>
  )
}

export default Index
