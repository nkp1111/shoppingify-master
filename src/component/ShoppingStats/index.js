import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import { foodHistory, getTopItem } from '../../utils'

const { items, categories, topItems, topCategories, totalItem } = getTopItem(foodHistory)

const getPercent = (count, total) => Math.floor(count / total * 100)
// top items and categories
const itemAndCats = [
  { title: "Top items", items: items, top: topItems, customClass: "top-items" },
  { title: "Top Categories", items: categories, top: topCategories, customClass: "top-cat" }
]

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
                  {top.map(item => (
                    <li key={item} className='d-flex justify-content-between'>
                      <span>{item}</span>
                      <span>{getPercent(items[item], totalItem)}%</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>

      <section>
        <h2>Monthly Summary</h2>
        <div>
          <LineChart width={600} height={300} >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </section>

    </div>
  )
}

export default index
