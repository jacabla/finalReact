import React from "react";
import "../css/style.css"
import "../css/bootstrap.min.css"
import "../css/style_cert.css"

export default function Preloader() {
  return (
    <div>
      <div id="preloader"></div>
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}
