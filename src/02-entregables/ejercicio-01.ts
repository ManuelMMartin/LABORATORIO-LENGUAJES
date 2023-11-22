console.log("************** DELIVERABLE 01 *********************");
let array = ["patata", "manzana", "naranja", "platano"]
console.log("original:", array)

const head = <T>([head, ...rest]: T[]): T => {
  return head
}
let headArray = head(array);
console.log("head:", [headArray])

const tail = <T>([_head, ...rest]: T[]): T[] => {
  return rest;
};
let tailArray = tail(array);
console.log("tail:", tailArray);

const init = <T>(array: T[]): T[] => {
  return array.slice(0, -1);
}

let initArray = init(array);
console.log("init:", initArray)

const last = <T>(array: T[]): T[] => {
  return array.slice(-1);
}
let lastArray = last(array);
console.log("last:", lastArray)

console.log("original:", array)
