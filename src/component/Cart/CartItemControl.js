import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from 'react-icons/ai'
import useGlobalContext from '../../context';

const CartItemControl = ({ item, qtys }) => {

  const { updateItemQuantity, removeCartItem } = useGlobalContext()
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
            {/* delete button  */}
            <div className='delete-btn'
              onClick={() => removeCartItem(item.id)}>
              <AiOutlineDelete className='delete-icon' />
            </div>

            {/* decrease item count  */}
            <AiOutlineMinus className='minus-icon'
              onClick={(e) => {
                if (qty > 1) {
                  updateItemQuantity({ id: item.id, qty: +qty - 1 })
                }
              }} />

            {/* toggle control box  */}
            <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />

            {/* increase item count  */}
            <AiOutlinePlus className='plus-icon' onClick={(e) => updateItemQuantity({ id: item.id, qty: +qty + 1 })} />
          </div>
        )
        // toggle control box 
        : <ControlButton {...{ qty, handleQtyControl, showQtyControl }} />}
    </div>
  )
}

const ControlButton = ({ qty, handleQtyControl, showQtyControl }) => {
  return (
    <button className='btn'
      onClick={(e) => handleQtyControl(showQtyControl)}>{qty} pcs
    </button>
  )
}

export default CartItemControl

