import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { foodHistory, getTopItem, formatMonthlyData } from '../../utils'

const { items, categories, topItems, topCategories, totalItem } = getTopItem(foodHistory)

const getPercent = (count, total) => Math.floor(count / total * 100)
// top items and categories
const itemAndCats = [
  { title: "Top items", items: items, top: topItems, customClass: "top-items" },
  { title: "Top Categories", items: categories, top: topCategories, customClass: "top-cat" }
]

const formattedGrocery = formatMonthlyData(foodHistory)

const index = () => {
  return (
    <div className='main__content-stats'>
      <div className='container'>
        <div className="row">
          {itemAndCats.map(data => {
            const { title, items, customClass, top } = data

            return (
              <article className={`col-sm-6 ${customClass}`} key={title}>
                <h2>{title}</h2>
                <ul>
                  {top.map(item => {
                    let percent = getPercent(items[item], totalItem)
                    return (
                      <li key={item} className='d-flex justify-content-between flex-wrap'>
                        <span>{item}</span>
                        <span>{percent}%</span>
                        <span className={`w-100 d-block progress-bar progress-${percent}`}></span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>

      <section>
        <h2>Monthly Summary</h2>
        <div>
          <LineChart width={600} height={300} data={formattedGrocery} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <Line type="monotone" dataKey="items" stroke="#F9A109" />
            <CartesianGrid stroke="#E0E0E0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
      </section>
    </div>
  )
}

export default index
