

function makeError() {
  const x = y + 1;
}


try {
  makeError()
} catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}


console.log("Helloo")


function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
  }
}


try {
  eval("console.log('rr')");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}

