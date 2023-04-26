import React from 'react'

import BackButton from '../BackButton'
import useGlobalContext from '../../context'

const AddItemForm = () => {
  const { setShowAddItemForm } = useGlobalContext()
  const handleForm = () => {
    setShowAddItemForm(false)
  }
  return (
    <div>
      <BackButton function1={handleForm} />
    </div>
  )
}

export default AddItemForm
