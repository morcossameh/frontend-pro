

function greet(name) {
  console.log(`Hello ${name}!`)
}

function processUserInput(callback) {
  const name = "Ali"
  callback(name)
}

processUserInput(greet);


// logic 1
// logic 2
// logic 3
// logic 4 -> async
// logic 5
// logic 6
// logic 7


setTimeout(() => {
  console.log("Timeout finished")
}, 1000)

console.log("here")


setTimeout(() => {
  console.log("1")
  setTimeout(() => {
    console.log("2")
    setTimeout(() => {
      console.log("3")
    }, 1000)
  }, 1000)
}, 1000)

