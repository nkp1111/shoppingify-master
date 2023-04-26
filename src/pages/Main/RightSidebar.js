import React from 'react'

import { Cart, SidebarItem } from '../../component'
import useGlobalContext from '../../context'

const RightSidebar = () => {
  const { showItemDetail, showAddItemForm } = useGlobalContext()
  return (
    <div className='app__main-sidebar'>
      <section className='h-100'>
        {showAddItemForm || showItemDetail.show
          ? <SidebarItem />
          : <Cart />}
      </section>
    </div>
  )
}

export default RightSidebar
