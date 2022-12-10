import React from "react";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/style_cert.css"

export default function Resume() {
  return (
    <div>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resumé</h2>
            <p>
              Resumen de estudios formales, certificaciones, adiconal a la
              experiencia en diferentes ámbitos.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Resumen</h3>
              <div className="resume-item pb-0">
                <h4>Jason Castro</h4>
                <p>
                  <em>
                    Innovador, estudiante, autodidacta, orientado al
                    cumplimiento de metas, desarrollador web en busca de
                    entrenamiento y en busca de formar parte de una empresa
                    desarrolladora, con un año de estudio, orientado a entregar
                    productos de calidad que superen las espectativas del
                    cliente.
                  </em>
                </p>
                <ul>
                  <li>Quesada, Costa Rica</li>
                  <li>+506 88907260</li>
                  <li>castrob.jason@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Educación</h3>
              <div className="resume-item">
                <h4>Desarrollador Full Stack</h4>
                <h5>2022 - actualidad</h5>
                <p>
                  <em>Universidad Creativa de Costa Rica</em>
                </p>
                <p>
                  Cursando actualmente la carrera de desarrollador Full Stack,
                  con 3 de 5 cautrimestres aprobados.
                </p>
              </div>
              <div className="resume-item">
                <h4>Desarrollo web</h4>
                <h5>2022 - actualidad</h5>
                <p>
                  <em>ORACLE - one generation bootcamp</em>
                </p>
                <p>
                  Programa de formacion Dev de 9 meses, orientado al frontend y
                  backend, con clases asincrónicas con mas de 300 horas
                  prácticas aprobadas{" "}
                </p>
              </div>
              <div className="resume-item">
                <h4>Profesor de Inglés, tercer ciclo y diversificado</h4>
                <h5>2017- 2021</h5>
                <p>
                  <em>Universidad Catolica de Costa Rica</em>
                </p>
                <p>Graduado de Bachiller en la enseñanza del inglés </p>
              </div>
              <div className="resume-item">
                <h4>Microfinanzas rurales</h4>
                <h5>2019</h5>
                <p>
                  <em>Organización Internacional del trabajo OIT</em>
                </p>
                <p>Microfinanzas rurales, Turín, Italia.</p>
              </div>
              <div className="resume-item">
                <h4>Microfinanzas</h4>
                <h5>2017- 2018</h5>
                <p>
                  <em>Universidad Estatal a Distancia UNED</em>
                </p>
                <p>Diplomado en microfinanzas </p>
              </div>
              <div className="resume-item">
                <h4>Turismo</h4>
                <h5>2006- 2008</h5>
                <p>
                  <em>Escuela Tecnica Agricola Industrial de CR.</em>
                </p>
                <p>Diplomado en turismo</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Experiencia profesional</h3>
              <div className="resume-item">
                <h4>Desarrollo web</h4>
                <h5>2022</h5>
                <p>
                  <em>WFH, Remote </em>
                </p>
                <ul>
                  <li>
                    En espera de una oportunidad laboral/training/pasantía
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>jefe de credito y cobro</h4>
                <h5>2011 - Present</h5>
                <p>
                  <em>Quesada, Costa Rica. </em>
                </p>
                <ul>
                  <li>ONG de microfinanzas</li>
                  <li>Encargado del departamento de credito y cobro</li>
                  <li>Manejo de personal</li>
                  <li>Administracion de cartera +5 Million USD</li>
                  <li>
                    Crecimiento de un 33% de cartera en los dos ultimos años
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>GuÍa de turismo.</h4>
                <h5>2008- 2011</h5>
                <p>
                  <em>Fortuna, Costa Rica</em>
                </p>
                <ul>
                  <li>Servicio de guiado naturalista y de aventura</li>
                </ul>
              </div>
              <h3 className="resume-title">Idiomas</h3>
              <div className="resume-item">
                <ul>
                  <li>Español (nativo)</li>
                  <li>Inglés C2 (EF SET Certificate) ESL.</li>
                </ul>
              </div>
              <h3 className="resume-title">Soft skills</h3>
              <div className="resume-item">
                <ul>
                  <li>Empatia</li>
                  <li>Confianza</li>
                  <li>Adminsitracion del tiempo</li>
                  <li>Entusiasta y optimista</li>
                  <li>Enfocado</li>
                  <li>Trabajo en equipo</li>
                  <li>Orientado al servicio al cliente</li>
                  <li>Autodidacta</li>
                </ul>
              </div>
              <h3 className="resume-title">Conocimiento en:</h3>
              <div className="resume-item">
                <ul>
                  <li>Git / Github</li>
                  <li>Business model Canvas</li>
                  <li>Accesibilidad web</li>
                  <li>Layouts responsivos</li>
                  <li>Regex</li>
                  <li>SCRUM</li>
                  <li>Agile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
