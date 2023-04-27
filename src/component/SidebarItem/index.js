import React from 'react'

import CartItemDetail from './CartItemDetail'
import AddItemForm from './AddItemForm'
import useGlobalContext from '../../context'
import "./sidebarItem.css"

const Index = () => {

  const { setShowItemDetail, showItemDetail } = useGlobalContext()
  return (
    <>
      {showItemDetail.show
        ? <CartItemDetail item={showItemDetail?.item} setShowItemDetail={setShowItemDetail} />
        : <AddItemForm />}
    </>
  )
}

export default Index
