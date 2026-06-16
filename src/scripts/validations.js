//Validar que el usuario solo pueda ingresar números.
//Si el usuario ingresa un valor no numérico, se debe mostrar un mensaje de error.
export function validateInput(value) {
  //validar que no estigui buit
  if (!value.trim()) {
    return "Si us plau, introdueix un valor vàlid";
  }

  const inputNumber = Number(value);

  //Que sigui número
  if (isNaN(inputNumber)) {
    return "El valor introduit ha de ser un número";
  }

  if (!Number.isInteger(inputNumber) || inputNumber < 1) {
    return "El valor introduit ha de ser un número enter i positiu";
  }

  return null; //si no hi ha error que retorni això
}
