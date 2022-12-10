import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/style_cert.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i class="bi bi-list mobile-nav-toggle"></i>
      </button>
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header" class="d-flex flex-column justify-content-center">
        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li>
              <Link to={"/"}>
                {" "}
                <i class="material-symbols-outlined active" >Home</i>
                <span>Inicio</span>
              </Link>{" "}
            </li>
            <li>
              <Link to={"About"}>
                {" "}
                <i class="material-symbols-outlined">account_box</i>
                <span>Acerca de mi</span>
              </Link>{" "}
            </li>
            <li>
              <Link to={"Resume"}>
                {" "}
                <i class="material-symbols-outlined">description</i>
                <span>Resumé</span>
              </Link>
            </li>
            <li>
              <Link to={"Certificates"}>
                {" "}
                <i class="material-symbols-outlined">badge</i>{" "}
                <span>Certificaciones</span>
              </Link>
            </li>
            <li>
              <Link to={"Skills"}>
                {" "}
                <i class="material-symbols-outlined">code</i> 
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to={"Contact"}>
                {" "}
                <i class="material-symbols-outlined">mail</i>{" "}
                <span>Contacto</span>
              </Link>
            </li>
            <li>
              <a href="Jason_Castro_CV.pdf" download="Jason_Castro_CV.pdf">
                <i class="material-symbols-outlined">picture_as_pdf</i>{" "}
                <span>Descarga Curriculo PDF</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
