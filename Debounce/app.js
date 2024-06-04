const btn = document.querySelector('.btn')

const debounce = (fn) => {
  let timeoutId
  return () => {
    console.log(timeoutId)
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn()
    }, 2000)
  }
}
btn.addEventListener(
  'click',
  debounce(() => {
    console.log('Click')
  })
)
