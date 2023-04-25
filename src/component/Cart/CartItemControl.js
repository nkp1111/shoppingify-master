import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai'

const CartItemControl = ({ item, qtys }) => {
  const [showQtyControl, setShowQtyControl] = useState(false);

  const handleQtyControl = (show) => {
    setShowQtyControl(!show)
  }

  const qty = qtys[item.id]
  return (
    <div className='cart__item-control ms-auto'>
      {showQtyControl
        ? (
          <div className='bg-white d-flex align-items-center justify-content-between gap-1'>
            <div>
              <AiOutlineDelete className='delete-icon' />
            </div>
            <AiOutlineMinus />
            <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />
            <AiOutlinePlus />
          </div>
        )
        : <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />}
    </div>
  )
}

const ControlButton = ({ qty, handleQtyControl, showQtyControl }) => {
  return (
    <button
      onClick={(e) => handleQtyControl(showQtyControl)}>{qty} pcs
    </button>
  )
}

export default CartItemControl

