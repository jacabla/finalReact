import React from 'react'
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/style_cert.css"
 
export default function About() {
  return (
    <div>
            <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Acerca de mi</h2>
          <p>Apasionado de la tecnología, estudiante de la carrera Full Stack y en busca de la oportunidad de convertirme en desarrollador web, profesor de inglés de profesión, turistologo y piloto de dron, aficionado a la aviación y dispuesto a dar todo por quienes apuestan por mi. Orientado al cumplimiento de metas, el trabajo en equipo y el servicio al cliente.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="me.JPG" className="img_me" alt="perfilJason"/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Developer.</h3>
            <p className="fst-italic">
              Cursando la carrera de Desarrollador Full Stack en la Universidad Creativa de Costa Rica, con un año de haber empezado, adicional a eso, cursando el bootcamp del programa de Oracle, One next generation de la Universidad de Alura Latam de Brasil.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Nacimiento:</strong> <span>mayo 29, 1987</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Teléfono:</strong> <span>+506 88907260</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Quesada, Costa Rica</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>35</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Grado:</strong> <span>Tecnico en formación</span></li>
                  <a href="mailto:castrob.jason@gmail.com" target="blank"><li><i className="bi bi-chevron-right"></i> <strong>Email</strong> <span>castrob.jason@gmail.com</span></li></a>
                  <li><i className="bi bi-chevron-right"></i> <strong>Buscando:</strong> <span>Trabajo/pasantía/entrenamiento</span></li>
                </ul>
              </div>
            </div>
            <p>
              Con un gran deseo de entrenarme en una empresa de desarrollo web, comprometido con entregar el mejor de los resultados, orientado a satisfacer y exceder las necesidas del cliente, entregando un producto funcional y de calidad. Abierto a aprender nuevas tecnologías y ponerlas en practica día a día.
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}
