const itemCategory = ({ foodItems }) => {
  // take all food items and reorganize items by category

  let foodByCategory = {}
  foodItems.forEach(item => {
    if (foodByCategory.hasOwnProperty(item.category)) {
      foodByCategory[item.category].push(item)
    } else {
      foodByCategory[item.category] = [item]
    }
  })

  return foodByCategory
}

export default itemCategory