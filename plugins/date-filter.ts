import vue from 'vue'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const dateFilter = (inputDate: Date | string) => {
  return formatDate(inputDate)
}

function formatDate(inputDate: Date | string) {
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formattedDate = `${day}. ${months[month]} ${year}`
  return formattedDate
}

vue.filter('date', dateFilter)
