import React, { createContext, useContext, useState, useReducer, useEffect } from 'react'

import reducer from '../reducer'
import { foodItems, foodHistory } from '../utils'

// initial default state
const initialState = {
  foodItems,
  foodHistory,
  cart: []
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateLocalStorage = (state) => {
    // update local storage with new state values
    dispatch({ type: "UPDATE_LOCAL_STORAGE", payload: state })
  }

  useEffect(() => {
    // add shopping to local storage at start
    if (!localStorage.getItem("shoppingList")) {
      updateLocalStorage(state)
    }
  }, []);

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
    <AppContext.Provider
      value={{
        showGroceryDetail,
        handleGroceryDetail,
        state,
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