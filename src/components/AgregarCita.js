import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { agregarCitaAction } from '../actions/citasActions'
import uuid from 'uuid/v4'

const AgregarCita = () => {

  // State local
  const [mascota, guardarMascota] = useState('')
  const [duenio, guardarDuenio] = useState('')
  const [fecha, guardarFecha] = useState('')
  const [hora, guardarHora] = useState('')
  const [sintomas, guardarSintomas] = useState('')

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch()
  const agregarNuevaCita = cita => dispatch(agregarCitaAction(cita))

  const nuevaCita = e => {
    e.preventDefault()

    // validar

    // crear la nueva cita. #1
    // Para crear una nueva cita debemos de crear una nueva pieza llamada acciones. Para ello creamos una 
    // nueva carpeta a la que llamaremos actions. dentro de esta carpeta creamos un archivo llamdo citasActions.js
    agregarNuevaCita({
      id: uuid(),
      mascota,
      duenio,
      fecha,
      hora,
      sintomas
    })

    // reiniciar formulario
    guardarMascota('')
    guardarDuenio('')
    guardarFecha('')
    guardarHora('')
    guardarSintomas('')
  }

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
        <form
          onSubmit={nuevaCita}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                value={mascota}
                onChange={e => guardarMascota(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Dueño
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                value={duenio}
                onChange={e => guardarDuenio(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input type="date" className="form-control" 
                value={fecha}
                onChange={e => guardarFecha(e.target.value)}/>
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input type="time" className="form-control" 
                value={hora}
                onChange={e => guardarHora(e.target.value)}/>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
            <div className="col-sm-8 col-lg-10">
              <textarea className="form-control"
                value={sintomas}
                onChange={e => guardarSintomas(e.target.value)}></textarea>
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarCita
