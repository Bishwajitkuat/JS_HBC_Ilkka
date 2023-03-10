'use strict'

function slowRandomLengthOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'), Math.random() * 2000)
    setTimeout(() => reject('rejected'), Math.random() * 2000)
  })
}

// slowRandomLengthOperation().then(console.log).catch(console.log);

async function test() {
  try {
    const result = await slowRandomLengthOperation()
    console.log('resolved:', result)
    console.log('something')
  } catch (err) {
    console.log('error:', err)
  }
}

// test();
// Promise.all() => resolve if all promises are resolved
Promise.all([slowRandomLengthOperation(), slowRandomLengthOperation()])
  .then(console.log)
  .catch(console.log)

// Promise.any() => resolve if any prosie is resolved
Promise.any([slowRandomLengthOperation(), slowRandomLengthOperation()])
  .then(console.log)
  .catch(console.log)
