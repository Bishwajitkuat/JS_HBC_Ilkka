"use strick";

(function () {
  let card;
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    card = document.getElementById("card");
    document.getElementById("pick").addEventListener("click", update);
  }

  function update() {
    const suite = Math.floor(Math.random() * 4);
    const rank = Math.floor(Math.random() * 13) + 1;

    let suiteSymbol;

    if (suite === 0) {
      suiteSymbol = "\u2665";
      card.classList.add("red");
    } //hearts
    else if (suite === 1) {
      suiteSymbol = "\u2666";
      card.clssList.add("red");
    } // diamonds
    else if (suite === 2) {
      suiteSymbol = "\u2660";
      card.classList.remove("red");
    } // spadees
    else {
      suiteSymbol = "\u2663";
      card.classList.remove("red");
    } // clubs

    card.textContent = `${suiteSymbol} ${rank}`;
  }
})();
