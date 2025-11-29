


function greet(firstName, age) {
  if (!firstName) {
    return
  }
  console.log(`Hello ${firstName}!`)
  if(age) {
    console.log(`You are ${age} years old`)
  }
}

greet("Youssef", 20)
greet("Ali", 30)
greet()

// function expression

const greetFunction = function (firstName, age) {
  if (!firstName) {
    return
  }
  console.log(`Hello ${firstName}!`)
  if(age) {
    console.log(`You are ${age} years old`)
  }
}

greetFunction("Youssef", 20)
greetFunction("Ali", 30)
greetFunction()

const greetArrow = (firstName, age) => {
  if (!firstName) {
    return
  }
  console.log(`Hello ${firstName}!`)
  if(age) {
    console.log(`You are ${age} years old`)
  }
}

greetArrow("Youssef", 20)
greetArrow("Ali", 30)
greetArrow()


function add(a, b) {
  return a + b;
}

const result = add(534, 543)
console.log(result)

function isEven(num) {
  return num % 2 === 0;
}


function addNumbers(sum, index, numbers) {
  // console.log(sum, index, numbers)
  if (index === numbers.length) {
    return sum;
  }
  sum += numbers[index];
  return addNumbers(sum, index + 1, numbers)
}

console.log(addNumbers(0, 0, [1, 2, 5, 6]))


// alert("Hello!")
// const username = prompt("Enter you name");
// console.log(username)


console.log(Math.round(4.4))  // 5
console.log(Math.floor(4.7))  // 4
console.log(Math.ceil(4.1))   // 5
console.log(Math.random())    // random number between 0 and 1
console.log(Math.max(1, 5))   // 5
console.log(Math.min(1, 5))   // 1


