

const obj = {
  firstName: "Ahmed",
  lastName: "Abd Elrahman",
  age: 24,
  isStudent: false,
  sayHello: function () {
    console.log(`Hello, my is ${this.firstName}`)
  },
  skills: [
    "HTML",
    "CSS",
    "JS"
  ],
  address: {
    city: "Cairo",
    country: "Egypt"
  },
  brothers: [
    { name: "Ali", age: 22 },
    { name: "Mostafa", age: 23 },
    { name: "Mohamed", age: 24 }
  ]
}

obj.brothers.push({name: "Adel", age: 43})

console.log(obj)
obj.sayHello()

console.log(obj["brothers"])

obj.age = 42
console.log(obj)


delete obj.age
console.log(obj)


console.log(Object.keys(obj))
console.log(Object.values(obj))

for (const key in obj) {
  console.log(`Key: ${key}, Value: ${JSON.stringify(obj[key])}`)
}

const obj2 = {
  isStudent: true,
  hairColor: "brown",
  eyeColor: "blue",
  height: 180,
  weight: 70
}

const obj3 = {
  ...obj,
  ...obj2
}

console.log(obj3)

const { yeColor, hairColor } = obj3;
console.log(JSON.stringify(obj3))
const obj4 = JSON.parse('{"salary": 8000}')
console.log(obj4)


const mySet = new Set();
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(3)
mySet.add(2)

console.log(mySet)

mySet.delete(1)
console.log(mySet)

for (let item of mySet) {
  console.log(item)
}

// const arr = Array.from(mySet)
// console.log(arr)

const myMap = new Map()

myMap.set("name", "John")
myMap.set("age", 20)

console.log(myMap.get("name"))
console.log(myMap.get("age"))

// myMap.delete("name")
console.log(myMap)

for (let [key, value] of myMap) {
  console.log(key, value)
}


const arr = Array.from(myMap)
console.log(arr)

