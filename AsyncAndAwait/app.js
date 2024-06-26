// const example = async () => {
//   return 'hello there'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result)
//   console.log('hello world')
// }
// someFunc()

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)
    if (user) return resolve(user)
    else reject(`User: ${name} is not found`)
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => userId === user.userId)
    if (userArticles) return resolve(userArticles.articles)
    else reject(`Articles not found`)
  })
}

// getUser('john')
//   .then((user) => getArticles(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

const getData = async () => {
  try {
    const user = await getUser('john')
    const articles = await getArticles(user.id)
    console.log(articles)
  } catch (error) {
    console.log(error)
  }
}

getData()
