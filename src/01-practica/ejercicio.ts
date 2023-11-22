console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");


//Biggest Word-----------------------------------------------------------------------------
function biggestWord(phrase: string): string {
  let palabras = phrase.split(" ")
  let biggestWord = ""
  palabras.forEach(palabra => {
    biggestWord = palabra.length > biggestWord.length ? palabra : biggestWord
  })
  return biggestWord
}
console.log("Biggest Word:", biggestWord("Ejercicios básicos de JavaScript"))

//Values----------------------------------------------------------------------------------
type ObjectWithValues<T> = {
  [key: string]: T
}
function values<T>(obj: ObjectWithValues<T>): T[] {
  let valores: T[] = []
  for (const valor in obj) {
    if (obj.hasOwnProperty(valor))
      valores.push(obj[valor])
  }
  return valores
}
console.log("Values:", values({ id: 31, duration: 310, name: "long video", format: "mp4" }))

//Califications----------------------------------------------------------------------------------
interface ClassResults {
  [key: string]: number
}
const eso2o: ClassResults = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
}

function notaMedia(classResults: ClassResults) {
  const valores = values(classResults)
  const suma = valores.reduce((acumulador, valor) => acumulador + valor, 0)
  const media = suma / valores.length
  return media
}

function categoria(media: number): string {
  if (media === 10) {
    return "Matrícula de Honor"
  } else if (media >= 9) {
    return "Sobresaliente"
  } else if (media >= 7) {
    return "Notable"
  } else if (media >= 6) {
    return "Bien"
  } else if (media >= 5) {
    return "Suficiente"
  } else if (media >= 4) {
    return "Insuficiente"
  } else {
    return "Muy deficiente"
  }
}

function printAverage(classResults: ClassResults): string {
  const media: number = notaMedia(classResults)
  const calificacion: string = categoria(media)
  return (`La media de la clase es ${media.toFixed(2)} - ${calificacion}`)
}
let text = printAverage(eso2o)
console.log("Califications:", text)

//Check Arguments----------------------------------------------------------------------------------

function f(input: string | null | undefined): string {
  return input === undefined ? "Unknown" : input || ""
}

console.log("Check Arguments:", f(undefined))

//Clone Merge----------------------------------------------------------------------------------
type PersonPractica = {
  name: string
  surname?: string
  country?: string
  age?: number
  married?: boolean
}
function clonePractica(source: Person) {
  return { ...source }
}

function mergePractica(source: Person, target: Person): Person {
  let a = clonePractica(source)
  let b = clonePractica(target)
  return { ...b, ...a }
}
const aPractica: Person = { name: "Maria", surname: "Ibañez", country: "SPA" }
const bPractica: Person = { name: "Luisa", age: 31, married: true }
console.log("Clone Merge:", mergePractica(aPractica, bPractica))

//Deep Equal----------------------------------------------------------------------------------
//A

type Primitivo = string | number | boolean | null | undefined

function isEqual(a: Record<string, Primitivo>, b: Record<string, Primitivo>): boolean {
  if (typeof a !== 'object' || typeof b !== 'object') {
    return false
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
      return false
    }
  }
  return true
}

var userA = { name: "María", age: 30 }
var clonedUserA = { name: "María", age: 30 }
console.log("Deep Equal A:", isEqual(userA, clonedUserA))

//B
type DeepObject = {
  [key: string]: Primitivo | DeepObject | Primitivo[]
}


function isDeepEqual(a: DeepObject, b: DeepObject): boolean {
  // Caso base: si ambos son valores primitivos, simplemente los comparamos
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (keysA.length !== keysB.length) {
    return false
  }

  for (const key of keysA) {
    if (!b.hasOwnProperty(key) || !isDeepEqual(a[key] as DeepObject, b[key] as DeepObject)) {
      return false
    }
  }

  return true
}

var userB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
}
var clonedUserB = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
}
console.log("Deep Equal B:", isDeepEqual(userB, clonedUserB))

//Dices----------------------------------------------------------------------------------

type Resultado = number | undefined

type Juego = {
  tirarDados: () => void
  resetearDados: () => void
  imprimirResultado: () => void
}

function juegoDeDados(): Juego {
  let dado1: Resultado
  let dado2: Resultado

  function tirarDados() {
    dado1 = Math.floor(Math.random() * 6) + 1
    dado2 = Math.floor(Math.random() * 6) + 1

    console.log(`Resultado de los dados: ${dado1} y ${dado2}`)

    if (dado1 === 6 && dado2 === 6) {
      console.log("¡Felicidades! ¡Doble 6! ¡Ganaste un premio!")
    }
  }

  function resetearDados() {
    dado1 = undefined
    dado2 = undefined
    console.log("Dados reseteados.")
  }

  function imprimirResultado() {
    if (typeof dado1 === 'undefined' || typeof dado2 === 'undefined') {
      console.log("Debes tirar los dados primero.")
    } else {
      console.log(`Último resultado: ${dado1} y ${dado2}`)
    }
  }

  return {
    tirarDados,
    resetearDados,
    imprimirResultado,
  }
}

const juego: Juego = juegoDeDados()

juego.imprimirResultado()
juego.tirarDados()
juego.imprimirResultado()
juego.resetearDados()
juego.imprimirResultado()

//Hoisting----------------------------------------------------------------------------------



//Includes----------------------------------------------------------------------------------

function includes(array: string, value: string) {
  let result = false
  array.split(" ").forEach((element: string) => {
    if (element === value) {
      result = true
    }
  });
  return result
}

console.log('Includes: ' + includes("Ejercicios básicos de JavaScript", "JavaScript"))

//Primes----------------------------------------------------------------------------------
console.log('Primes: ')
function showPrimes(from: number, to: number) {
  for (from; from <= to; from++) {
    if (from === 1) {
      console.log(`El numero ${from} NO es primo!`)
      continue;
    }
    let primo = true
    for (let i = 2; i < from; i++) {
      if (from % i === 0) primo = false
    }
    primo
      ? console.log(`El numero ${from} es PRIMO!`)
      : console.log(`El numero ${from} NO es primo!`)
  }
}
showPrimes(1, 10)

//Read Book----------------------------------------------------------------------------------

function isBookReadPractica(books: { title: string; isRead: boolean; }[], titleToSearch: string) {
  let leido = false
  for (const libro of books) {
    if (libro.title === titleToSearch) leido = libro.isRead
  }
  return leido
}

const booksPractica = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookReadPractica(booksPractica, "Devastación")); // true
console.log(isBookReadPractica(booksPractica, "Canción de hielo y fuego")); // false
console.log(isBookReadPractica(booksPractica, "Los Pilares de la Tierra")); // false

//Reverse Text----------------------------------------------------------------------------------


//Subsets----------------------------------------------------------------------------------


//This----------------------------------------------------------------------------------


//Zip----------------------------------------------------------------------------------


//ZZCrypt----------------------------------------------------------------------------------


//Args----------------------------------------------------------------------------------

//Array Operations----------------------------------------------------------------------------------

//Concat----------------------------------------------------------------------------------

//Console----------------------------------------------------------------------------------

//Fibonacci----------------------------------------------------------------------------------

//Players Order----------------------------------------------------------------------------------

//Reminder----------------------------------------------------------------------------------

//Slot Machine----------------------------------------------------------------------------------

//Swap----------------------------------------------------------------------------------

//Califications Summary----------------------------------------------------------------------------------

//Curry Setter----------------------------------------------------------------------------------

//Morse----------------------------------------------------------------------------------
