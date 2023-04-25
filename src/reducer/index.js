const reducer = (state, action) => {
  const { type } = action
  if (type === "UPDATE_LOCAL_STORAGE") {
    localStorage.setItem("shoppingList", JSON.stringify(state))
  }
  return state
}

export default reducer