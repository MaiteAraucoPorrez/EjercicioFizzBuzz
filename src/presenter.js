import calcularFizzBuzz from "./fizzbuzz.js";

const form = document.querySelector("#sumar-form");
const first = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(first.value);

  div.innerHTML = "<p>" + calcularFizzBuzz(number) + "</p>";
});
