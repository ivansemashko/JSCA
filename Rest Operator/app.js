// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, second, ...restOfTheFruits] = fruits
console.log(first, second, restOfTheFruits)
const specificFruit = restOfTheFruits.find((fruits) => fruits == 'lemon')
console.log(specificFruit)
// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' }
const { job, ...rest } = person
console.log(job, rest)

//function
const getAvg = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  const average =
    scores.reduce((total, item) => {
      return (total += item)
    }, 0) / scores.length

  console.log(average)
}

const testScore = [23, 45, 54, 65]
getAvg(person.name, ...testScore)
