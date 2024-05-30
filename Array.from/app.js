const umedy = 'umedy'
console.log(Array.from(umedy))

const text = document.querySelectorAll('.text')
console.log(text)

const newText = Array.from(text).find((item) => item.textContent === 'person')
console.log(newText)

const items = Array.from({ length: 120 }, (_, index) => {
  return index
})
console.log(items)

const itemsPerPage = 10
const pages = Math.ceil(items.length / itemsPerPage)

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems
})
console.log(newItems)
