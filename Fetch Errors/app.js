const url = 'https://www.course-api.com/react-tours-projects'

// console.log(fetch(url))

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))

const getTours = async () => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const msg = `There was an Error "${resp.status} ${resp.statusText}"`
      throw new Error(msg)
    }
    const tours = await resp.json()
    console.log(tours)
  } catch (error) {
    console.log(error)
  }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)
