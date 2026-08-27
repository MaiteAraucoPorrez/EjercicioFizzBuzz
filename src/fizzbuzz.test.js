import calcularFizzBuzz from "./fizzbuzz.js";

describe("calcularFizzBuzz", () => {
  it("Si el numero no es multiplo de 3 ni de 5 deberia devolver el mismo numero", () => {
    expect(calcularFizzBuzz(1)).toEqual("1");
  });
});

describe("calcularFizzBuzz", () => {
  it("Si el numero no es multiplo de 3 ni de 5 deberia devolver el mismo numero", () => {
    expect(calcularFizzBuzz(2)).toEqual("2");
  });
});

describe("calcularFizzBuzz", () => {
  it("Si el numero es multiplo de 3 deberia devolver Fizz", () => {
    expect(calcularFizzBuzz(3)).toEqual("Fizz");
  });
});

describe("calcularFizzBuzz", () => {
  it("Si el numero es multiplo de 3 deberia devolver Fizz", () => {
    expect(calcularFizzBuzz(6)).toEqual("Fizz");
  });
});

describe("calcularFizzBuzz", () => {
  it("Si el numero es multiplo de 5 deberia devolver Buzz", () => {
    expect(calcularFizzBuzz(5)).toEqual("Buzz");
  });
});

describe("calcularFizzBuzz", () => {
  it("Si el numero es multiplo de 5 deberia devolver Buzz", () => {
    expect(calcularFizzBuzz(10)).toEqual("Buzz");
  });
});