import React from 'react'

const SearchForm = ({ empty }) => {
  return (
    <form className={`cart-${empty} d-flex`}>
      <div>
        <label htmlFor="name"
          className="form-label visually-hidden">Password</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder='Enter a name' />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SearchForm
