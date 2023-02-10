"use strict";

const {
  getWithLicence,
  getWithModel,
  getAllModels,
  getCars,
} = require("./carStorage");

const myCar = getWithLicence("A-1");
if (myCar) {
  console.log(`My car is ${myCar.model}. The licence is ${myCar.licence}`);
} else {
  console.log("Car was not found");
}

const fastGts = getWithModel("Fast GT");
fastGts.forEach((object) => {
  console.log(object.model, object.licence);
});

console.log(`\nAll available modesl:\n\t${getAllModels().join("\n\t")}`);

getCars("model", "Fast GT").forEach((car) => {
  console.log("Model:", car.model);
  console.log("Licence:", car.licence);
});
