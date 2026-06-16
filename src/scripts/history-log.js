// Guardar cada número ingresado en un objeto junto con su resultado.

let fizzBuzzHistory = [];

export function historyLog(result) {
  fizzBuzzHistory.push(result);
}

export function getHistoryLog() {
  return fizzBuzzHistory;
}
