
/*

&&
||
!

*/


console.log("AND")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(!(false && true && true && true))

console.log("OR")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!(false || true) && (false || false))


console.log("NOT")
console.log(!false)
console.log(!true)

let userName = "Ahmed"
const greet = `Hello ${userName || "there"}!`
console.log(greet)


