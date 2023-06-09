import React, { useState } from 'react'
import { RxMagnifyingGlass, RxPlus } from 'react-icons/rx'

import { foodByCategory } from '../../utils'
import useGlobalContext from '../../context'
import "./shoppingItem.css"

const Index = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const { state: { foodItems }, addItemToCart, setShowItemDetail } = useGlobalContext()
  let itemsToShow = foodByCategory({ foodItems })

  return (
    <div className='main__content-items'>
      <div className="items-header d-flex">
        <h1><span>Shoppingify </span>
          allows you take your shopping list wherever you go
        </h1>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="search-icon">
              <RxMagnifyingGlass className='mag-icon' />
            </span>
            <input type="text"
              className="form-control"
              placeholder="search item"
              aria-label="search item"
              aria-describedby="search-icon"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </form>
      </div>

      <div className='items-show'>
        {Object.keys(itemsToShow).map(category => (
          <div key={category}>
            {/* food category  */}
            <h2>{category}</h2>
            <div className="container">
              <div className="row">
                {itemsToShow[category].map(item => {
                  if (!searchTerm || item.name.toLowerCase().match(searchTerm.toLowerCase())) {
                    return (
                      <div key={item.id}
                        className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        {/* food product  */}
                        <div className="card flex-row align-items-center justify-content-between">
                          <p onClick={() => {
                            setShowItemDetail({ show: true, item: item })
                          }}>{item.name}</p>
                          <div>
                            <RxPlus className='plus-icon'
                              onClick={(e) => addItemToCart(item)} />
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
