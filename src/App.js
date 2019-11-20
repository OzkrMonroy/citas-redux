import React from 'react';
// Redux
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de pacientes de Veterinaria</h1>
        </header>

        <div className="row my-5">
          <div className="col-md-6">
            Formulario Aquí
          </div>
          <div className="col-md-6">
            Listado Aquí
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
