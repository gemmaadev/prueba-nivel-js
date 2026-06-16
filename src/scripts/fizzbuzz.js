// Funcional: Si el número ingresado es divisible por 3, se muestra Fizz.
// Funcional: Si el número ingresado es divisible por 5, se muestra Buzz.
// Funcional: Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz.
// Funcional: Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo.

export function fizzBuzzLogic(userNumber) {
  const FIZZ_DIVISOR = 3;
  const BUZZ_DIVISOR = 5;

  let message = "";
  let result = "";

  // Funcional: Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz.
  if (userNumber % (FIZZ_DIVISOR * BUZZ_DIVISOR) === 0) {
    message = "FizzBuzz";
    result = userNumber % (FIZZ_DIVISOR * BUZZ_DIVISOR);
  }

  //Si el número ingresado es divsible por 3, se muestra Fizz
  if (userNumber % FIZZ_DIVISOR === 0) {
    message = "Fizz";
    result = userNumber % FIZZ_DIVISOR;
  }

  //Si el número ingresado es divisble por 5 se muestra Buzz
  if (userNumber % BUZZ_DIVISOR === 0) {
    message = "Buzz";
    result = userNumber % BUZZ_DIVISOR;
  }

  // Funcional: Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo.
  if (userNumber % FIZZ_DIVISOR !== 0 || userNumber % BUZZ_DIVISOR !== 0) {
    message = userNumber.toString();
    result = userNumber % FIZZ_DIVISOR || userNumber % BUZZ_DIVISOR;
  }

  return {
    message, // Mensaje
    userNumber, // Número evaluado
    result, // Resultado esperado
  };
}

//   {
//   	status: "", // Código indicando éxito o error
//   	message: "", // Mensaje
//   	data: {
//   		number: 0, // Número evaluado
//   		result: "" // Resultado esperado
//   	}
//   }
