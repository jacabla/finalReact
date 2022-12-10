import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/style_cert.css";

export default function Certificates() {
  return (
    <div className="certificados">
      <div class="card-group certificados">
        <div class="card">
          <img class="card-img-top" src="P2.png" alt="Card image cap" />
        </div>
        <div class="card">
          <img class="card-img-top" src="P3.png" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">
              <br></br>
              <br></br>
              <br></br>
            </h5>
            <a href="https://app.aluracursos.com/program/certificate/5bfbf499-568d-473e-9d28-6866e57ae32d"><button type="button" class="btn btn-info">
              Validar certificados
            </button></a>
            <br></br>
            <br></br>
            <p class="card-text">
              Certificaciones obtenidas en el programa One Next Generation de
              ORACLE.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="P4.PNG" alt="Card image cap" />
        </div>
      </div>
    </div>
  );
}
