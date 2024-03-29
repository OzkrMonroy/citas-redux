import React from 'react';
// Redux
import store from './store'
import { Provider } from 'react-redux'
// componets
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de pacientes de Veterinaria</h1>
        </header>

        <div className="row my-4">
          <div className="col-md-6">
            <AgregarCita/>
          </div>
          <div className="col-md-6">
            <ListadoCitas/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
