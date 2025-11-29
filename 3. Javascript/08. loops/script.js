

// let i = 0
// // do {
// //   // logic
// //   console.log(i)
// //   i++;
// // } while(i < 10)


// // infinite loop
// while (i < 10) {
//   // logic
//   i++;
//   console.log(i)
// }

// for(let j = 10; j > 0; j--) {
//   if (j === 4) {
//     break;
//   }
//   if (j%2 === 0) {
//     continue;
//   }
  
//   console.log(j)

//   // logic
// }

// const arr = [10, 20, 30, 40, 50]
// for(let j = 0; j < arr.length; j++) {
//   console.log(arr[j])
// }



// for(let item of arr) {
//   console.log(item)
// }





// input: arr
// output: sum all elements
        //  5  3  3.  1. 1. 1. 1. 1
const arr = [5, 3, 6, 1, 5, 4, 5, 1]

let total = 0
for(let num of arr) {
  total += num;
}
console.log(total)


// input: arr
// output: minimum

let minimum = Number.MAX_SAFE_INTEGER
for(let num of arr) {
  if(num < minimum) {
    minimum = num
  }
}
console.log(minimum)



