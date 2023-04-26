import React, { createContext, useContext, useReducer, useEffect } from 'react'

import reducer from '../reducer'
import { foodItems, foodHistory } from '../utils'

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

  const itemStatusUpdate = (id, newStatus) => {
    // change item status complete to not with id
    dispatch({ type: "CART_ITEM_STATUS", payload: { id, newStatus } })
  }

  const changeCartName = (name) => {
    // change cart name
    dispatch({ type: "CART_NAME_UPDATE", payload: name })
    updateLocalStorage(state)
  }

  const shoppingEnded = (result) => {
    // after shopping ended update status and empty cart
    dispatch({ type: "EMPTY_CART", payload: result })
    updateLocalStorage(state)
  }

  useEffect(() => {
    // add shoppingList to local storage and update
    if (!localStorage.getItem("shoppingList")) {
      // if there is no shopping list on local storage
      updateLocalStorage(state)
    } else {
      // if there is shopping list
      const oldState = JSON.parse(localStorage.getItem("shoppingList"))
      dispatch({ type: "UPDATE_CURRENT_STATE", payload: oldState })
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
        itemStatusUpdate,
        shoppingEnded,
        changeCartName,
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