import React from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { CgArrowLongLeft } from 'react-icons/cg'
import { format } from 'date-fns'

import { foodByCategory } from '../../utils'

const DetailHistory = ({ showGroceryDetail, handleGroceryDetail }) => {
  const { item } = showGroceryDetail
  const itemToShow = foodByCategory({ foodItems: item?.items })

  return (
    <>
      <div className='main__items-grocery'>
        <button onClick={handleGroceryDetail}
          className='d-flex align-items-center'>
          <CgArrowLongLeft className='back-icon me-1' /> back
        </button>
        <div className='grocery'>
          <h2>{item.name}</h2>
          <div className="d-flex align-items-center">
            <BsCalendarRange className='calendar-icon' />
            <span className="grocery-date">
              {format(new Date(item.date), "EEE d.M.yyy")}
            </span>
          </div>
          {Object.keys(itemToShow).map(item => (
            <article key={item} >
              <h3 className='grocery-category'>{item}</h3>
              <div className="d-flex gap-3">
                {itemToShow[item].map(gItem => (
                  <div className="card flex-row" key={gItem.name}>
                    <p className='grocery-name me-2'>{gItem.name}</p>
                    <p className='grocery-qty'>{gItem.pieces} pcs</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export default DetailHistory
