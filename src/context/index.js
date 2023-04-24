import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showGroceryDetail, setShowGroceryDetail] = useState({ show: false, item: null });

  const handleGroceryDetail = ({ grocery }) => {
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
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export {
  AppProvider
}