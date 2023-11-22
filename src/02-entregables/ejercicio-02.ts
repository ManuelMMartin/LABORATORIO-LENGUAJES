console.log("************** DELIVERABLE 02 *********************");

const concat = <T, U>(a: T[], b: U[]): (T | U)[] => {
  return [...a, ...b]
}

//opcional
const concatMultiple = (...arrays: any[]) => {
  return arrays.reduce((result, arr) => [...result, ...arr], [])
};


console.log("Concat:", concat([2, 3, 4, 5], ["patata", "manzana", "naranja", "platano"]))
console.log("ConcatMultiple:", concatMultiple([2, 3, 4, 5], ["patata", "manzana", "naranja", "platano"], [6, 7, 8, 9]))
