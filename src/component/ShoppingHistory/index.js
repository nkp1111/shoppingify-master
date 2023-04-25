import React, { useState } from 'react'

import ListHistory from './ListHistory'
import DetailHistory from './DetailHistory'

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
    <div className='main__content-items'>
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>
      <div className='items-body'>
        {!showGroceryDetail?.show
          ? <ListHistory handleGroceryDetail={handleGroceryDetail} />
          : <DetailHistory {...{ showGroceryDetail, handleGroceryDetail }} />}
      </div>

    </div>
  )
}

export default Index
