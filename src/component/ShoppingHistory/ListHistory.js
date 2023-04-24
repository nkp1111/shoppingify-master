import React from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { format } from 'date-fns'

import { foodHistory, groceryByMonth } from '../../utils'

const { formattedGrocery, timeline } = groceryByMonth(foodHistory)

const ListHistory = ({ handleGroceryDetail }) => {

  const setGrocery = (grocery) => {
    handleGroceryDetail({ grocery })
  }

  return (
    <>
      {timeline.map(item => (
        <div className='items-month' key={item}>
          <p>{item}</p>
          {formattedGrocery[item].map(gItem => (
            <article className="card flex-row justify-content-between" key={gItem.id}>
              <h2 onClick={(e) => setGrocery(gItem)}>{gItem.name}</h2>
              <div className='d-flex align-items-center'>
                <BsCalendarRange className='calendar-icon' />
                <span className="item-date">
                  {format(gItem.date, "EEE d.M.yyy")}
                </span>
                <button className={`${gItem.status} btn`}>{gItem.status}</button>
                <FaChevronRight className='forward-icon' onClick={(e) => setGrocery(gItem)} />
              </div>
            </article>
          ))}
        </div>
      ))}
    </>
  )
}

export default ListHistory
