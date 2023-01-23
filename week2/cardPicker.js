"use strick";

document.querySelector("#pick").addEventListener("click", card_picker);

function card_picker() {
  const suite = Math.floor(Math.random() * 4);
  const rank = Math.floor(Math.random() * 13) + 1;
  const card = document.querySelector("#card");
  const card_number = document.querySelector("#number");
  let suiteSymbol;

  if (suite === 0) {
    suiteSymbol = "\u2665";
    card.classList.toggle("red", true);
  } //hearts
  else if (suite === 1) {
    suiteSymbol = "\u2666";
    card.classList.toggle("red", true);
  } // diamonds
  else if (suite === 2) {
    suiteSymbol = "\u2660";
    card.classList.toggle("red", false);
  } // spadees
  else {
    suiteSymbol = "\u2663";
    card.classList.toggle("red", false);
  } // clubs

  card.textContent = `${suiteSymbol}`;
  card_number.textContent = `${rank}`;
}
