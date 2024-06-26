const cart = [
  { title: 'Samsung Galaxy S21', price: 599.99, amount: 1 },
  { title: 'Google Pixel x3 PRO', price: 499.99, amount: 2 },
  { title: 'Xiaomi Redmi Note 2', price: 399.99, amount: 4 },
  { title: 'Xiaomi Redmi Note 5', price: 599.99, amount: 5 },
]

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem
    // count items
    total.totalItems += amount
    //count sum
    total.cartTotal += amount * price
    return total
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
)
cartTotal = cartTotal.toFixed(2) * 1
console.log(totalItems, cartTotal)

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}

fetchRepos()
