const products = [
  { title: 'Modern Poster' },
  { title: 'Bar Stool' },
  { title: 'Armchair' },
  { title: 'Leather Chair' },
]

const text = 'a'

const filteredProducts = products.filter((product) =>
  product.title.toLocaleLowerCase().includes(text)
)

console.log(filteredProducts)
// const firstName = 'john'

// // const result = firstName.includes('j', 1)

// const product = {
//   title: 'Leather Chair',
// }

// const result = product.title.includes('Le')

// console.log(result)
