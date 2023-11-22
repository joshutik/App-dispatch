import React from "react";
import "./Ownerslog.css";
import img4 from "../Assets/Circle chart.png";

const Ownerslog = () => {
  return (
    <div className="container-fluid">
      <div className="owner-bg p-5">
        <div className="row justify-content-center text-light">
          <div className="col-lg-7">
            <div className="text-light">
              <h3 className="fs-2 fw-bold text-light">Buenas Noches,</h3>
              <h1 className="fs-1 fw-bold text-light ml-5">Dunena De Loteria</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-lg-10 col-md-6 col-sm-12">
          <label htmlFor="establishment" className="fs-4 fw-normal mb-3">Choose an establishment</label>
          <select
            className="form-select rounded-pill py-3"
            aria-label="Default select example"
          >
            <option selected>Lottery company 1</option>
            <option value="1">Lottery Company 1</option>
            <option value="2">Lottery Company 1</option>
            <option value="3">Lottery Company 1</option>
          </select>
          <div className="row gy-4 justify-content-center">
            <div className="mt-5 d-flex">
              <p className="fs-2 mt-5">Overview</p>
              <p className="text-dark mt-5 pt-3 text-normal ms-auto">Fecha Uitima Entrega: <span className="fw-bold">16th of October, 2023</span></p>
            </div>
            
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card w-100 plates p-5 d-flex justify-content-center rounded-5">
                <div className="row g-0 justify-content-center align-items-center text-center">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className="img-fluid w-75" src={img4} alt="" />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 text-light pt-4 px-auto">
                    <p className="text-light">Total earnings</p>
                    <h2>
                      <span className="success-class fw-bold">$18,000</span>
                    </h2>
                    <p className="text-light">compared to 52,000 yesterday</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 ">
              <div className="card w-100 plates p-5 d-flex justify-content-center rounded-5">
                <div className="row g-0row g-0 justify-content-center align-items-center text-center">
                  <div className="col-lg-6 col-sm-12 ">
                    <img className="img-fluid w-75" src={img4} alt="" />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-10 text-light pt-4 px-auto">
                    <p className="text-light">Order trent</p>
                    <h2>
                      <span className="success-class fw-bold">124 order</span>
                    </h2>
                    <p className="text-light">compared to 52,000 yesterday</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-5 gy-4 mb-5 pb-5">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">
                    Total amount paid
                  </h6>
                  <h1 className="text-light">$18,000</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">
                    Total amount paid
                  </h6>
                  <h1 className="text-light own">$18,000</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">
                    Total amount paid
                  </h6>
                  <h1 className="text-light">$18,000</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light own">
                    Total amount paid
                  </h6>
                  <h1 className="text-light">$18,000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-md-12 col-sm-6">
            <p className="mb-0">
              <i class="bi bi-geo-alt-fill "></i>
               Avda de Espana 2428710-EL MOLAR  (MADRID)
              </p>
          
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-telephone-fill"></i>+918410517
          </div>

          <div className="col-lg-4 col-md-12 col-sm-6">
            <i class="bi bi-envelope-at-fill"></i>
            <a href="/">loteriaelmolar@yahoo.es</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownerslog;
