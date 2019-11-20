import { createStore } from 'redux'
// Importamos el reducer
import reducer from './reducers'

// Definimos el state inicial
// const initialState = []

const store = createStore(
  reducer,
  // initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store