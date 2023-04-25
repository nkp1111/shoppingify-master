import { format, compareDesc } from 'date-fns'

const groceryByMonth = (foodHistory) => {
  // takes grocery list by date and format it by month
  foodHistory = foodHistory.map(item => {
    item.date = new Date(item.date)
    return item
  })

  let timeline = foodHistory.map(item => item.date).sort(compareDesc)
  timeline = foodHistory.map(item => format(item.date, "LLLL yyyy"))
  timeline = timeline.filter((item, ind) => timeline.indexOf(item) === ind)

  const formattedGrocery = {}

  for (let item of foodHistory) {
    const timeFormat = format(item.date, "LLLL yyyy")
    if (formattedGrocery.hasOwnProperty(timeFormat)) {
      formattedGrocery[timeFormat].push(item)
    } else {
      formattedGrocery[timeFormat] = [item]
    }
  }

  return { formattedGrocery, timeline }
}

export default groceryByMonth