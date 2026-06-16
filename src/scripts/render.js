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
  });
}
