import { expect, describe, test } from "@jest/globals";
import { fizzBuzzLogic } from "../src/scripts/fizzbuzz.js";

describe("FizzBuzz test for multiples of 3 and 5", () => {
  test("returns Fizz when multiple of 3", () => {
    // Gherking test
    /**
     * Scenario: Número divisible por 3
     * Given un número 9
     * When el número es procesado
     * Then se muestra "Fizz"
     */

    // Arrange: Preparar el escenario
    let valor_entrada = 9;
    let respuesta_esperada = {
      message: "Fizz",
      userNumber: 9,
      result: 0,
    };

    // Act: ejecutar el escenario
    let resultado = fizzBuzzLogic(valor_entrada);

    // Assert: Comprobar el escenario
    expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
    expect(resultado.message).toBe("Fizz"); // valida que el valor output corresponda al expect
  });

  test("returns Buzz when multiple of 5", () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 5
     * Given un número 10
     * When el número es procesado
     * Then se muestra "Buzz"
     */

    // Arrange
    let valor_entrada = 10;
    let respuesta_esperada = {
      message: "Buzz",
      userNumber: 10,
      result: 0,
    };

    // Act
    let resultado = fizzBuzzLogic(valor_entrada);

    // Assert
    expect(resultado).toEqual(respuesta_esperada);
    expect(resultado.message).toBe("Buzz");
  });

  test("returns FizzBuzz when multiple of 3 and 5", () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 3 y 5
     * Given un número 15
     * When el número es procesado
     * Then se muestra "FizzBuzz"
     */
  });

  test("returns number when is not multiple of 3 and 5", () => {
    //Gherking test
    /**
     * Scenario: Número no divisible por 3 ni 5
     * Given un número 8
     * When el número es procesado
     * Then se muestra el número ingresado
     */
  });
});
