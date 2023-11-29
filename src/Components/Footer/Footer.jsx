import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container-fluid py-4 bg-light text-center mb-0">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <p className="mb-0">
              <i class="bi bi-geo-alt-fill "></i>
              Avda de Espana 2428710-EL MOLAR (MADRID)
            </p>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-telephone-fill"></i>+918410517
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-envelope-at-fill"></i>
            <Link to="loteriaelmolar@yahoo.es">loteriaelmolar@yahoo.es</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
