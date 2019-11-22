// Exportamos una función que recibe una cita y devuelve un objeto que tendrá el tipo de acción y el payload
// Esto lo recibe después el reducer corespondiente a esta acción (citasReducer).

export const agregarCitaAction = cita => {
  return {
    type: 'AGREGAR_CITA',
    payload: cita
  }
}