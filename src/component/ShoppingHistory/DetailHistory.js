import React from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { format } from 'date-fns'

import { foodByCategory } from '../../utils'
import BackButton from '../BackButton'

const DetailHistory = ({ showGroceryDetail, handleGroceryDetail }) => {
  const { item } = showGroceryDetail
  const itemToShow = foodByCategory({ foodItems: item?.items })

  return (
    <>
      <div className='main__items-grocery'>
        <BackButton function1={handleGroceryDetail} />
        <div>
          <h2>{item.name}</h2>
          <div className="d-flex align-items-center grocery-date">
            <BsCalendarRange className='calendar-icon me-2' />
            <span>
              {format(new Date(item.date), "EEE d.M.yyy")}
            </span>
          </div>
          {Object.keys(itemToShow).map(item => (
            <article key={item} >
              <h3 className='grocery-category'>{item}</h3>
              <div className="d-flex gap-3">
                {itemToShow[item].map(gItem => (
                  <div className="card flex-row align-items-center" key={gItem.name}>
                    <p className='grocery-name me-2'>{gItem.name}</p>
                    <p className='grocery-qty'>{gItem.pieces}pcs</p>
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
