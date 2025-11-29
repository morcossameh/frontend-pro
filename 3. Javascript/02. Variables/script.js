
// data types in JS

// 1. string
//    'This is a string'
//    "This is another string"
//    `This is ${var_identifier}, ${var_identifier2}`

// camelCase:
// This is a rock
// thisIsARock

var personName = "Asem" + " Adel";
console.log(`personName = ${personName}, type = ${typeof personName}`)

// 2. number
//    30
//    18.32

var num = 30.52;
console.log(`num = ${num}, type = ${typeof num}`)


// 3. bigint

const bigNum = 123456789123456789123456789123456789n;
console.log(`bigNum = ${bigNum}, type = ${typeof bigNum}`)

const wrongNum = 123456789123456789123456789123456789;
console.log(`wrongNum = ${BigInt(wrongNum)}, type = ${typeof wrongNum}`)

const bigNumStr = "123456789123456789123456789123456789";
const bigIntFromStr = BigInt(bigNumStr);
console.log(`bigNumStr = ${bigIntFromStr}, type = ${typeof bigNumStr}`)


// 4. boolean: true, false

const isStudent = false;
console.log(`isStudent = ${isStudent}, type = ${typeof isStudent}`)


// 5. undefined
let x;
console.log(`x = ${x}, type = ${typeof x}`)


// const
const constantNumber = 23;
// constantNumber = 22

// let

let a;
console.log(`a=${a}`)

let b = 20;
console.log(`b=${b}`)

a = b;
console.log(`a=${a}`)


// var

var varA;
console.log(`varA=${varA}`)

var varB = 20;
console.log(`varB=${varB}`)

varA = varB;
console.log(`varA=${varA}`)


// var vs let (block-based)
// if (true) {
//   console.log(`letVariable = ${letVariable}`)
//   let letVariable = 4
// }
// console.log(`letVariable = ${letVariable}`)

if (true) {
  console.log(`varVariable = ${varVariable}`)
  var varVariable = 4
}
console.log(`varVariable = ${varVariable}`)



