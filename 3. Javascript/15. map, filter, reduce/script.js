
const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map(number => number * 2)

console.log(numbers)
console.log(doubledNumbers)

const newArray = []
for (const number of numbers) {
  newArray.push(number * 2)
}

console.log(newArray)



const oddNumbers = numbers.filter(number => number % 2 === 1)

console.log(oddNumbers)

const newArray2 = []

for (const number of numbers) {
  if(number % 2 === 1) {
    newArray2.push(number)
  }
}

console.log(newArray2)

// const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(
  (acc, currentValue) => acc + currentValue,
  0
)

let total = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  total += numbers[i]
}
console.log(total)

console.log(sum)
