const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

const firstName = bob.first
const lastName = bob.last
const sisters = bob.siblings.sister

const {
  first: fname,
  last: lname,
  city: hsity,
  siblings: { sister: favorite },
} = bob

console.log(fname, lname, hsity, favorite)

function printPerson(person) {
  const {
    first,
    last,
    siblings: { sister },
  } = person
  console.log(first, last, sister)
}

printPerson(bob)
