import { groceryByMonth } from '../'
import { format } from 'date-fns'

const formatMonthlyData = (foodHistory) => {
  // get foodHistory or shopping history and format data by month
  const { formattedGrocery: grocery } = groceryByMonth(foodHistory)
  const formattedMonth = {}

  for (let i = 0; i < 12; i++) {
    formattedMonth[format(new Date(2023, i, 1), "LLLL")] = 0
  }

  for (let time of Object.keys(grocery)) {
    let month = time.split(" ")[0]
    let monthItems = 0
    for (let g of grocery[time]) {
      for (let item of g.items) {
        monthItems += item.pieces
      }
    }
    if (formattedMonth.hasOwnProperty(month)) {
      formattedMonth[month] += monthItems
    } else {
      formattedMonth[month] = monthItems
    }
  }

  return Object.keys(formattedMonth).map(item => ({ name: item, items: formattedMonth[item] }))
}

export default formatMonthlyData