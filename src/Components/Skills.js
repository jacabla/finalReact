import React from 'react'
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/style_cert.css"

export default function Skills() {
  return (
    <div>
        <section id="skills" className="skills section-bg"/>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Tanto en la carrera de la univerdidad como en el bootcamp he ido aprendiendo y desarrollando en las herramientas mas usadas en el campo de la programacion, aplicando estos conocimientos y desarrollando aplicaciones web.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">HTML <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript<i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">JAVA <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Bootstrap <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Python <i className="val"></i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Skills - Proximos a desarrollar en los programas</h2>
            <p>Para finales del 2022 voy a contar con estos skills ya que son parte del programa cursado actualmente en la universidad y el bootcamp. Para mitad del 2023 habré concluido ambos programas, complentado así más de 600 horas prácticas. 
            </p>
          </div>
  
          <div className="row skills-content">
  
            <div className="col-lg-6">
  
              <div className="progress">
                <span className="skill">Angular.js <i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">My Sql <i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">Rest API<i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
  
            </div>
  
            <div className="col-lg-6">
  
              <div className="progress">
                <span className="skill">Oracle cloud <i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">Oracle interface <i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
  
              <div className="progress">
                <span className="skill">MongoDb <i className="val"></i></span>
                <div className="progress-bar-wrap">
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}
