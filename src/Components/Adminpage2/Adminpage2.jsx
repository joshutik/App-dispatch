import React from "react";
import "./Adminpage2.css";
import { Link } from "react-router-dom";

const Adminpage2 = () => {
  return (
    <div>
      <div className="container-fluid add">
        <div className="pt-3 ps-5">
          <a className="text-light text-decoration-none fs-5 ml-4" href="/">
            <i className="bi bi-chevron-left"></i> Go Back
          </a>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <h1 className="text-light text-center fw-bold">Lottery Company</h1>
          </div>
        </div>
        </div>
        <div className="row rounded-5 p-5 mt-3">
          <div className="header mt-5">
            <p className="fs-3 fw-bold">Establecimiento</p>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="mb-4">
              <label htmlFor="name" className="mb-3">
                Establecimiento
              </label>
              <input
                type="text"
                className="form-control rounded-pill w-100 border-1 py-3 px-3"
              />
            </div>
            <div>
              <div className="row mt-5 pt-3">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="name" className="mb-3">
                    Persona de contacto
                  </label>
                  <input
                    type="tel"
                    className="form-control rounded-pill w-100 border-1 py-3 px-3"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <label htmlFor="name" className="mb-3">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="form-control rounded-pill w-100 border-1 py-3 px-3"
                  />
                </div>
              </div>
            </div>

            {/* riders details */}
            <div className="row justify-content-center">
              <div className="">
                <div className="header mt-5">
                  <p className="fs-3 fw-bold mt-4">Riders Details</p>
                </div>
                <div className="mb-4 mt-5">
                  <label htmlFor="name" className="mb-3">
                    Namo
                  </label>

                  <select
                    className="form-select rounded-pill w-100 border-1 py-3 px-3"
                    aria-label="Default select example"
                  >
                    <option selected>select Rider</option>
                    <option value="1">select Rider</option>
                    <option value="2">select Rider</option>
                    <option value="3">select Rider</option>
                  </select>
                </div>
                <div>
                  <div className="row mt-5 pt-3">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label htmlFor="name" className="mb-3">
                        Persona de contacto
                      </label>
                      <input
                        type="tel"
                        className="form-control rounded-pill w-100 border-1 py-3 px-3"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <label htmlFor="name" className="mb-3">
                        Addresso
                      </label>
                      <input
                        type="tel"
                        className="form-control rounded-pill w-100 border-1 py-3 px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order */}
            <div className="container-fluid">
              <div className="header mt-5 pt-5">
                <p className="fs-3 fw-bold my-5">Order details</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Numero
                  </label>
                  <input
                    type="number"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Cantidad reserva
                  </label>
                  <input
                    type="text"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Cantidad devuelta por el cliente
                  </label>
                  <input
                    type="text"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Cantidad vendida
                  </label>
                  <input
                    type="text"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Cantidad cobrada
                  </label>
                  <input
                    type="text"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                  <label htmlFor="name" className="fs-5 mb-2">
                    Regalo
                  </label>
                  <input
                    type="text"
                    className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <Link
                  to="/confirm"
                  type="submit"
                  className="save text-decoration-none rounded-pill text-light w-50 py-3 mt-5 mb-5"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-4 col-md-12 col-sm-6">
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
              <a href="/">loteriaelmolar@yahoo.es</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Adminpage2;
