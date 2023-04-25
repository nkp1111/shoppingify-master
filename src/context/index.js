import React, { createContext, useContext, useState, useReducer, useEffect } from 'react'

import reducer from '../reducer'
import { foodItems, foodHistory, expiredDate } from '../utils'

const todayDate = new Date()
// initial default state
const initialState = {
  foodItems,
  foodHistory,
  cart: {
    id: todayDate.getTime(),
    name: "Shopping List",
    date: todayDate,
    status: "unknown",
    items: [],
  }
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateLocalStorage = (state) => {
    // update local storage with new state values
    dispatch({ type: "UPDATE_LOCAL_STORAGE", payload: state })
  }

  useEffect(() => {
    // add shoppingList to local storage and update
    if (!localStorage.getItem("shoppingList")) {
      // if there is no shopping list on local storage
      updateLocalStorage(state)
    } else {
      // else there is shopping list
      const oldState = JSON.parse(localStorage.getItem("shoppingList"))

      let oldDate = new Date(oldState?.cart?.date)
      if (oldDate && expiredDate({ oldDate, todayDate })) {
        // if cart is 24 hrs old date not match
        // empty cart to shopping history and update local storage
        dispatch({ type: "EMPTY_CART", payload: oldState })
        updateLocalStorage(state)
      } else {
        // if cart is less than 24 hrs old
        dispatch({ type: "UPDATE_CURRENT_STATE", payload: oldState })
      }
    }
  }, []);


  const addItemToCart = (item) => {
    // add item id to cart and update local storage
    dispatch({ type: "ADD_CART_ITEM", payload: item })
  }

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

  useEffect(() => {
    // update local storage every time cart item changes
    updateLocalStorage(state)
  }, [state.cart.items]);

  useEffect(() => {
    // to check state changes on development
    console.log(state)
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        showGroceryDetail,
        handleGroceryDetail,
        state,
        addItemToCart,
      }}>
      {children}
    </AppContext.Provider>
  )
}

// function to call useContext hook on AppContext
const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export {
  AppProvider
}