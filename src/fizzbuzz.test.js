import calcularFizzBuzz from "./fizzbuzz.js";

describe("calcularFizzBuzz", () => {
  it("Si el numero no es multiplo de 3 ni de 5 deberia devolver el mismo numero", () => {
    expect(calcularFizzBuzz(1)).toEqual("1");
  });
});

