import React, { useEffect, useState } from 'react'

import useGlobalContext from '../../context'
import ViewCart from './ViewCart'
import SidebarItem from '../SidebarItem'
import "./cart.css"


const Index = () => {
  const { showItemDetail, setShowItemDetail, showAddItemForm } = useGlobalContext()

  return (
    <section className='h-100'>
      {showAddItemForm || showItemDetail.show
        ? <SidebarItem />
        : <ViewCart />}
    </section>
  )
}

export default Index
