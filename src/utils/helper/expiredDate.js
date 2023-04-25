const expiredDate = ({ oldDate, todayDate }) => {
  // check if todayDate is date of new day than oldDate
  return (todayDate.getFullYear() !==
    oldDate.getFullYear() || todayDate.getMonth() !== oldDate.getMonth()
    || todayDate.getDate() !== oldDate.getDate())
}

export default expiredDate