"use strict";

const {
  getWithLicence,
  getWithModel,
  getAllModels,
  getCar,
} = require("./carStorage");

console.log(getWithLicence("ABC-1"));
console.log(getWithModel("Fast GT"));

getWithModel("Fast GT").forEach((object) => {
  console.log(object.model, object.licence);
});

console.log(getAllModels());

console.log(getCar("model", "Fast GT"));
