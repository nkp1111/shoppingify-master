import React from 'react'

import useGlobalContext from '../../context'
import ListHistory from './ListHistory'
import DetailHistory from './DetailHistory'

const Index = () => {
  const { showGroceryDetail, handleGroceryDetail } = useGlobalContext()

  return (
    <div className='main__content-items'>
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>
      <div className='items-body'>
        {!showGroceryDetail?.show
          ? <ListHistory handleGroceryDetail={handleGroceryDetail} />
          : <DetailHistory
            handleGroceryDetail={handleGroceryDetail}
            showGroceryDetail={showGroceryDetail} />}
      </div>

    </div>
  )
}

export default Index
