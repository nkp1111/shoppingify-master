import { format, compareDesc } from 'date-fns'

const groceryByMonth = (foodHistory) => {
  // takes grocery list by date and format it by month

  let timeline = foodHistory.map(item => item.date).sort(compareDesc)
  timeline = foodHistory.map(item => format(item.date, "LLLL yyyy"))
  timeline = timeline.filter((item, ind) => timeline.indexOf(item) === ind)
  const formattedGrocery = {}

  foodHistory.forEach(item => {
    const timeline = format(item.date, "LLLL yyyy")
    if (formattedGrocery.hasOwnProperty(timeline)) {
      formattedGrocery[timeline].push(item)
    } else {
      formattedGrocery[timeline] = [item]
    }
  })

  return { formattedGrocery, timeline }
}

export default groceryByMonth