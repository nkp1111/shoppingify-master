import React from 'react'
import useGlobalContext from '../../context'

const SearchForm = ({ empty, searchTerm, setSearchTerm }) => {

  const { addItemToCart, state: { foodItems } } = useGlobalContext()
  const handleSubmitFind = (e) => {
    e.preventDefault()
    for (let food of foodItems) {
      if (food.name.toLowerCase() === searchTerm.toLowerCase()) {
        addItemToCart(food)
        break
      }
    }
  }

  return (
    <form className={`cart-${empty && "empty"} d-flex`} onSubmit={handleSubmitFind}>
      <div>
        <label htmlFor="name"
          className="form-label visually-hidden">Password</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder='Enter a name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <button type="submit" className="btn">Save</button>
    </form>
  )
}

export default SearchForm
