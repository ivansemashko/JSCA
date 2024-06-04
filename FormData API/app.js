const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const entries = [...formData.entries()]
  console.log(entries)
  const formObject = Object.fromEntries(formData)
  console.log(formData)
  e.currentTarget.reset()
})
