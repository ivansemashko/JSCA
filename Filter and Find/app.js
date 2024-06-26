const people = [
  { name: 'bob', age: '20', position: 'developer' },
  { name: 'peter', age: '25', position: 'designer' },
  { name: 'susy', age: '30', position: 'the boss' },
  { name: 'anna', age: '35', position: 'intern' },
]

//filter
const youngPeople = people.filter((person) => {
  //   return person.age > 30 ? person : false
  return person.age > 30
})
console.log(youngPeople)

const developers = people.filter((person) => person.position == 'developer')
console.log(developers)

//no match
const seniorDevelopers = people.filter(
  (person) => person.position == 'Senior Developer'
)
console.log(seniorDevelopers)

//find
const peter = people.find((person) => person.name == 'peter')
console.log(peter)

//no match
const oldPerson = people.find((person) => person.age > 35)
console.log(oldPerson)

//multiple matches - first match
const randomPerson = people.find((person) => person.age < 35)
console.log(randomPerson)
