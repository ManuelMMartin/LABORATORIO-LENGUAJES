console.log("************** DELIVERABLE 03 *********************");

type Person = {
  name: string
  surname?: string
  country?: string
  age?: number
  married?: boolean
}
function clone(source: Person) {
  return { ...source }
}

function merge(source: Person, target: Person): Person {
  let a = clone(source)
  let b = clone(target)
  return { ...b, ...a }
}
const a: Person = { name: "Maria", surname: "Ibañez", country: "SPA" }
const b: Person = { name: "Luisa", age: 31, married: true }
console.log("Clone Merge:", merge(a, b))