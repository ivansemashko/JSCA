const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const getTours = async () => {
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

console.log(getTours().then())
