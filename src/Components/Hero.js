import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import "../css/style_cert.css";

export default function Hero() {
  return (
    <div>
      <section id="hero" className=" flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <section class="main">
            <video
              src="/src/y2mate.com - ARMIN VAN BUUREN  VINI VICI  HILIGHT TRIBE  Great Spirit Live at Transmission Prague 2016 4K_480p.mp4"
              autoplay
              loop
              muted
            ></video>
            <h1 class="title"><pre>   Bienvenidos a mi portafolio </pre></h1>
          </section>
        </div>
      </section>
    </div>
  );
}
