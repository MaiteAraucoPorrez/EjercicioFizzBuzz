import calcularFizzBuzz from "./fizzbuzz";

const first = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(first.value);

  div.innerHTML = "<p>" + calcularFizzBuzz(number) + "</p>";
});
