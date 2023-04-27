import React, { useState } from 'react'

import ListHistory from './ListHistory'
import DetailHistory from './DetailHistory'
import "./shoppingHistory.css"

const Index = () => {
  const [showGroceryDetail, setShowGroceryDetail] = useState({ show: false, item: null });
  const handleGroceryDetail = ({ grocery }) => {
    // show details if grocery item is given
    // params: obj {grocery: <value>}
    if (!grocery) {
      setShowGroceryDetail({ show: false, item: null })
    } else {
      setShowGroceryDetail({ show: true, item: grocery })
    }
  }

  return (
    <div className='main__content-history'>
      {!showGroceryDetail?.show && (
        <div>
          <h1>Shopping history</h1>
        </div>
      )}
      <div className='main__history-view'>
        {!showGroceryDetail?.show
          ? <ListHistory handleGroceryDetail={handleGroceryDetail} />
          : <DetailHistory {...{ showGroceryDetail, handleGroceryDetail }} />}
      </div>
    </div>
  )
}

export default Index
