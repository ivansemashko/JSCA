const heading = document.querySelector('.heading')
console.log(heading)

const listItems = document.querySelectorAll('.list-items')
console.log(listItems)

const getElement = (selector, isList) => {
  //   if (isList) {
  //     const el = [...document.querySelectorAll(selector)]
  //     if (el.length < 1) throw new Error(`Please check selector ${selector}`)
  //     return el
  //   }

  //   const el = document.querySelector(selector)
  //   if (el) return el
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector)

  //   if (!isList && el) return el
  //   if (isList && !el.length < 1) return el

  if ((!isList && el) || (isList && !el.length < 1)) return el
  throw new Error(
    `[${selector}] Element not found OR Syntax incorrect check code`
  )
}

console.log(getElement('.list-item', true))
