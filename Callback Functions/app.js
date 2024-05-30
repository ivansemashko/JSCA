function makeUpperCase(value) {
  console.log(value.toUpperCase())
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
  const fullName = `${name} smith`
  cb(fullName)
}

const a = handleName('peter', makeUpperCase)

const b = handleName('peter', reverseString)

handleName('sua', (value) => console.log(value))
