"use strict";
const person = {
  firstName: "Matt",
  lastName: "River",
  age: 20,
  member: true,
  fullName: function () {
    let full_name = this.firstName + " " + this.lastName;
    return full_name;
  },
};

console.log(person.fullName());
