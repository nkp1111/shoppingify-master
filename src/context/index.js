import React, { createContext, useContext, useReducer, useEffect } from 'react'

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

  const addItemToCart = (item) => {
    // add item to cart and update local storage
    dispatch({ type: "ADD_CART_ITEM", payload: item })
  }

  const updateItemQuantity = ({ id, qty }) => {
    // takes id of item to update with new quantity
    dispatch({ type: "UPDATE_CART_QTY", payload: { id, qty } })
  }

  const removeCartItem = (id) => {
    // removes an item from cart
    dispatch({ type: "REMOVE_CART_ITEM", payload: id })
  }

  useEffect(() => {
    // add shoppingList to local storage and update
    if (!localStorage.getItem("shoppingList")) {
      // if there is no shopping list on local storage
      updateLocalStorage(state)
    } else {
      // if there is shopping list
      const oldState = JSON.parse(localStorage.getItem("shoppingList"))

      let oldDate = new Date(oldState?.cart?.date)
      if (oldDate && expiredDate({ oldDate, todayDate })) {
        // if cart's date not match to current date
        // empty cart to shopping history and update local storage
        dispatch({ type: "EMPTY_CART", payload: oldState })
        updateLocalStorage(state)
      } else {
        // if cart is less than 24 hrs old
        dispatch({ type: "UPDATE_CURRENT_STATE", payload: oldState })
      }
    }
  }, []);

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
        state,
        addItemToCart,
        updateItemQuantity,
        removeCartItem,
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