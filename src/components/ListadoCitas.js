import React from "react";

const ListadoCitas = () => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0"></h3>
        <p className="card-text">
          <span>Nombre Dueño:</span>
        </p>
        <p className="card-text">
          <span>Fecha:</span>
        </p>
        <p className="card-text">
          <span>Hora:</span>{" "}
        </p>
        <p className="card-text">
          <span>Sintomas:</span> <br />{" "}
        </p>
        <button className="btn btn-danger">Borrar &times;</button>
      </div>
    </div>
  );
};
export default ListadoCitas