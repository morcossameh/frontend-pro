


function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 seconds")
    }, 2000)
  })
}

// myPromise
//   .then((message) => {
//     console.log(message)
//   })
//   .catch((err) => {
//     console.log(err)
//   })


async function myAsyncFunction() {
  try {
    const result = await createPromise()
    console.log(result)
    const result1 = await createPromise()
    console.log(result1)
    const result2 = await createPromise()
    console.log(result2)
  } catch (error) {
    console.log(error)
  }
}

myAsyncFunction()

