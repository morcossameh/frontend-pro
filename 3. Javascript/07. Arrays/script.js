
const arr = [1, true, "hello"]

console.log(arr.length)

console.log(arr[2])


const arr2 = new Array(5).fill(false)
console.log(arr2)


const stringArray = Array.from("hello");
console.log(stringArray)

stringArray[0] = "H";
console.log(stringArray)

stringArray.push("!")
console.log(stringArray)

stringArray.pop()
console.log(stringArray)

stringArray.unshift("!")
console.log(stringArray)

stringArray.shift()
console.log(stringArray)


const searchResult = stringArray.lastIndexOf("l")
console.log(searchResult)

console.log(stringArray.includes("H"))

console.log(stringArray.concat(arr2))



const helloString = stringArray.join("")
console.log(helloString)

// slice vs splice (in-place)

const arr3 = stringArray.slice(1, 4)
console.log(stringArray)
console.log(arr3)

const arr4 = stringArray.splice(1, 0)
console.log(stringArray)
console.log(arr4)


// Array desctructuring

const [x, y, ...rest] = [1, 2, 3];
console.log(rest)



// shallow copy vs deep copy
const stringCopy = [...stringArray];
stringCopy.push("!")
console.log(stringCopy)
console.log(stringArray)


