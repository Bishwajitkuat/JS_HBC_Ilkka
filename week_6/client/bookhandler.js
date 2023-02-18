"use strict";
(function () {
  let firstnameField;
  let lastnameField;
  let resultarea;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    firstnameField = document.querySelector("#firstname");
    lastnameField = document.querySelector("#lastname");
    resultarea = document.querySelector("#result");

    document
      .querySelector("#searchbooks")
      .addEventListener("click", searchbooks);
    // document
    //   .querySelector("#searchnames")
    //   .addEventListener("click", searchnames);
    // document
    //   .querySelector("#searchtotals")
    //   .addEventListener("click", searchtotals);
  }
  async function searchbooks() {
    const firstname = firstnameField.value;
    const lastname = lastnameField.value;
    const url = `http://localhost:3000/books?firstname=${firstname}&lastname=${lastname}`;
    const data = await fetch(url, { mode: "cors" });
    const jsonData = await data.json();
    resultarea.textContent = JSON.stringify(jsonData, null, 2);
  }
})();
