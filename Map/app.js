const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'anna', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'john', age: 24, position: 'intern' },
]

const getAges = (person) => person.age

const ages = people.map((person) => {
  return person.age
})

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  }
})

console.log(newPeople)

const names = people.map((people) => `<h1>${people.name}<h1>`)
const result = document.querySelector('#result')

result.innerHTML = names.join('')
