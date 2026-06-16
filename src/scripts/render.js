import { fizzBuzzLogic } from "./fizzbuzz.js";
import { historyLog, getHistoryLog } from "./history-log.js";
import { validateInput } from "./validations.js";

// Manipulación del DOM
// Se muestra en pantalla un historial con los valores ingresados y sus resultados.
// Manejar errores usando `<span>try...catch</span>`. (dejarlo para el final)

//Agafar elements DOM per ID
export function renderUi() {
  const forms = document.getElementById("fizzbuzz-form");
  const userInput = document.getElementById("user-number");
  const fizzBuzzResult = document.getElementById("fizzbuzz-result");
  const historyLogsResult = document.getElementById("history-logs-result");

  if (!forms || !userInput || !fizzBuzzResult || !historyLogsResult) {
    return;
  }

  //Escoltar el botó
  forms.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const error = validateInput(userInput.value);

      if (error !== null) {
        fizzBuzzResult.innerHTML = `<li>${error}</li>`;
        return;
      }

      const inputNumber = Number(userInput.value);

      const result = fizzBuzzLogic(inputNumber);

      fizzBuzzResult.innerHTML = `<li>${result.message}</li>`;

      historyLog(result);

      const history = getHistoryLog();
      historyLogsResult.innerHTML = history
        .map(
          (item) =>
            `<li>Message: ${item.message} | User number:  ${item.userNumber} |  Result: ${item.result}</li>`,
        )
        .join("");

      forms.reset();
    } catch (error) {
      fizzBuzzResult.innerHTML = `<li>Something went wrong. Please, try again</li>`;
    }
  });
}
