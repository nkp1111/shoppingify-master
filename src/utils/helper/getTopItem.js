const getTopItemAndCategory = (foodItems) => {
  // get shopping history and return items, categories, top 3 items and categories and total items so far
  let items = {}
  let categories = {}
  let totalItem = 0

  for (let food of foodItems) {
    if (food.status === "completed") {
      for (let item of food.items) {
        item.pieces = +item.pieces
        const { name, category, pieces } = item
        //  items 
        if (items.hasOwnProperty(name)) {
          items[name] += pieces
        } else {
          items[name] = pieces || 1
        }
        // categories
        if (categories.hasOwnProperty(category)) {
          categories[category] += pieces
        } else {
          categories[category] = pieces || 1
        }
        totalItem += pieces
      }
    }
  }

  const itemFilter = Object.values(items).sort((a, b) => b - a).slice(0, 3)
  const categoryFilter = Object.values(categories).sort((a, b) => b - a).slice(0, 3)

  let topItems = [0, 0, 0]
  let topCategories = [0, 0, 0]
  for (let item of Object.keys(items)) {
    const ind = itemFilter.indexOf(items[item])
    if (ind !== -1) {
      topItems[ind] = item
    }
  }
  for (let item of Object.keys(categories)) {
    const ind = categoryFilter.indexOf(categories[item])
    if (ind !== -1) {
      topCategories[ind] = item
    }
  }

  return { items, categories, topItems, topCategories, totalItem }
}

export default getTopItemAndCategory