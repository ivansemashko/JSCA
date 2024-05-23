const menu = [
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'dinner',
  },
  {
    name: 'pasta',
    category: 'breakfast',
  },
  {
    name: 'tomato',
    category: 'dinner',
  },
  {
    name: 'pizza',
    category: 'lunch',
  },
  {
    name: 'milk',
    category: 'dinner',
  },
]

const categories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(categories)

const result = document.querySelector('.result')
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`
  })
  .join('')
