// Los reducer tienen que tener su propio state
const initialState = {
  citas:[]
}

// Debemos de exportar una función. Dicha función recibirá el state (si viene vació le damos el valor del state por default que tenemos) y el action. El action es un objecto que tiene el tipo y el payload(datos). Para saber que acción debemos realizar evaluamos el tipo mediante un switch
export default function(state = initialState, action){

  switch(action.type){
    case 'AGREGAR_CITA':
      return {
        ...state,
        citas: [...state.citas, action.payload]
      }

    default:
      return state
  }
  
}