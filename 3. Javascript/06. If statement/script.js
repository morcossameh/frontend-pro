
// if (conditionA)
//   logic A
// else if (conditionB)
//   logic B
// else if (conditionC)
//   logic C
// else 
//   logic D

// if (false) {
//   console.log("Hello")
// } else {
//   console.log("Hello there")
//   console.log("Hello there again")
// }

var grade = 54;
if (grade <= 100 && grade >= 0) {
  if (grade >= 85) {
    console.log("Excellent")
  } else if (grade >= 75) {
    console.log("Very good")
  } else if (grade >= 65) {
    console.log("Good")
  } else if (grade >= 50) {
    console.log("Pass")
  } else {
    console.log("Fail")
  }
}

const result = grade >= 85 ? "Excellent" : "Fail";
console.log(result);


// let result;
// if(grade >= 50) 
//   result = "Pass";
// else 
//   result = "Fail";

console.log(result)

// state = "pending", "finished", "failed"

const value = "65"

switch(value) {
  case 1:
     console.log("one")
     break;
  case 2:
     console.log("two")
     break
  case 3:
     console.log("three")
     break
  default:
     console.log("Other")
     break;
}


