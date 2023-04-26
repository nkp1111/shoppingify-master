const reducer = (state, action) => {
  const { type, payload } = action

  if (type === "UPDATE_LOCAL_STORAGE") {
    localStorage.setItem("shoppingList", JSON.stringify(payload))
  }

  if (type === "UPDATE_CURRENT_STATE") {
    return payload
  }

  if (type === "EMPTY_CART") {
    const todayDate = new Date()
    let oldCart = state.cart
    oldCart.status = payload
    const newState = {
      ...state,
      foodHistory: [...state.foodHistory, oldCart],
      cart: {
        id: todayDate.getTime(),
        name: "Shopping List",
        date: todayDate,
        status: "unknown",
        items: [],
      }
    }
    return newState
  }

  if (type === "ADD_CART_ITEM") {
    const cartItems = state.cart.items
    const allCartItemsId = cartItems.map(item => item.id)

    if (!allCartItemsId.includes(payload.id)) {
      const newItem = {
        name: payload.name,
        category: payload.category,
        pieces: "1",
        id: payload.id,
        done: false
      }
      const newCart = { ...state.cart, items: [...cartItems, newItem] }
      return {
        ...state,
        cart: newCart
      }
    }
  }

  if (type === "UPDATE_CART_QTY") {
    const { id, qty } = payload
    let oldCart = state.cart
    const itemToUpdate = oldCart.items.filter(item => item.id === id)[0]
    const restItems = oldCart.items.filter(item => item.id !== id)
    itemToUpdate.pieces = qty
    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems, itemToUpdate]
      }
    }
  }

  if (type === "REMOVE_CART_ITEM") {
    let oldCart = state.cart
    const restItems = oldCart.items.filter(item => item.id !== payload)
    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems]
      }
    }
  }

  if (type === "CART_ITEM_STATUS") {
    const { id, newStatus } = payload
    let oldCart = state.cart
    const itemToUpdate = oldCart.items.filter(item => item.id === id)[0]
    const restItems = oldCart.items.filter(item => item.id !== id)
    itemToUpdate.done = newStatus
    return {
      ...state,
      cart: {
        ...oldCart,
        items: [...restItems, itemToUpdate]
      }
    }
  }

  if (type === "CART_NAME_UPDATE") {
    const oldCart = state.cart
    oldCart.name = payload
    return {
      ...state,
      cart: oldCart
    }
  }

  if (type === "ADD_NEW_ITEM") {
    return {
      ...state,
      foodItems: [...state.foodItems, payload]
    }
  }

  return state
}

export default reducer