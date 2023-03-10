"use strict";

async function getPerson() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve({ firstname: "Matt", age: 20 }),
      Math.random() * 1000
    );
    setTimeout(() => reject({ error: "not found" }), Math.random() * 1000);
  });
}
// then-catch
getPerson()
  .then((person) => {
    console.log("then-catch");
    console.log("name", person.firstname);
    console.log("age", person.age);
  })
  .catch((err) => console.log(err.error));

// try-catch
(async () => {
  try {
    console.log("try-catch");
    const person = await getPerson();
    console.log("name", person.firstname);
    console.log("age", person.age);
  } catch (error) {
    console.log(error);
  }
})();
