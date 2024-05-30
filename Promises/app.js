const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)

  if (random === value) {
    resolve('you guessed correctly')
  } else {
    reject('Incorrect number')
  }
})

console.log(promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))
