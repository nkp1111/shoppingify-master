import React from 'react'

import useGlobalContext from '../../context'
import ListHistory from './ListHistory'
import DetailHistory from './DetailHistory'

const Index = () => {
  const { showGroceryDetail } = useGlobalContext()

  return (
    <div className='main__content-items'>
      <div className="items-header">
        <h1>Shopping history</h1>
      </div>
      <div className='items-body'>
        {!showGroceryDetail?.show
          ? <ListHistory />
          : <DetailHistory />}
      </div>

    </div>
  )
}

export default Index
