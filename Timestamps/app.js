console.log(new Date())

console.log(Date.now())
console.log(new Date().getTime())
console.log(new Date().valueOf())

setTimeout(() => {
  console.log(Date.now())
}, 1000)

let people = []
people = [...people, { id: Date.now(), name: 'peter' }]

setTimeout(() => {
  people = [...people, { id: Date.now(), name: 'john' }]
  console.log(people)
}, 1000)

console.log(new Date(17452108118))
const now = Date.now()
const futureDate = new Date(now + 1000 * 60 * 60)
console.log(futureDate)
console.log(new Date())

const firstDate = new Date()
const secondDate = new Date(2024, 5, 4)

console.log(firstDate)
console.log(secondDate)

const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()

console.log(firstValue)
console.log(secondValue)

const timeDef = secondValue - firstValue

console.log(timeDef)
const minutes = timeDef / 60000
console.log(minutes)

const hours = timeDef / (60000 * 60)
console.log(hours)
