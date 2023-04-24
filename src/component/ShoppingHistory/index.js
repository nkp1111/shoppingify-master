import React from 'react'
import { BsCalendarRange } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import { format } from 'date-fns'

import { foodHistory, groceryByMonth } from '../../utils'

const { formattedGrocery, timeline } = groceryByMonth(foodHistory)
console.log(formattedGrocery, timeline)
const index = () => {
  return (
    <div className='main__content-items'>
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>
      <div className='items-body'>
        {timeline.map(item => (
          <div className='items-month' key={item}>
            <p>{item}</p>
            {formattedGrocery[item].map(gItem => (
              <article className="card flex-row justify-content-between" key={gItem.id}>
                <h2>{gItem.name}</h2>
                <div className='d-flex align-items-center'>
                  <BsCalendarRange className='calendar-icon' />
                  <span className="item-date">
                    {format(gItem.date, "EEE d.M.yyy")}
                  </span>
                  <button className={`${gItem.status} btn`}>{gItem.status}</button>
                  <FaChevronRight className='forward-icon' />
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}

export default index
