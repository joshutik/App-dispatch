// import React, { useState } from "react";
import "./Rider.css";
import img1 from "../Assets/Rectangle 21 (2).png";
import img2 from "../Assets/Rectangle 21 (1).png";
import img3 from "../Assets/Rectangle 21.png";
import img7 from "../Assets/Rectangle 21 (3).png";
import { Link } from "react-router-dom";

const Rider = ({ onpageSwitch }) => {
  //   const [activeState, setActiveState] = useState("establishmentLogin");
  //   const [modal, setModal] = useState(false);

  //   const toggleModal = () => {
  //     setModal(!modal);
  //   };

  return (
    <div className="container-fluid w-100">
      <div className="establish">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <p className="fs-3 text-light">Buenas noches,</p>
            <h1 className="text-light text-center fw-bold">ADMIN DE LOTERIA</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-item-center">
        <div className="row justify-content-center">
          <div className="">
            <div className="card rounded-0 border-0">
              <div className="card-body w-100">
                <div className="">
                  <input
                    type="search"
                    className="form-control rounded-pill mt-5 py-3"
                  />
                  <div className="w-50 mx-auto my-4">
                    <label class="toggle-container">
                      {/* Checkbox input  */}
                      <input type="checkbox" class="toggle-checkbox" />

                      {/* Switch  */}
                      <div class="toggle-switch">
                        {/* Knob  */}
                        <Link to='/rider-page-1' className="establishment inline-block">Establishment</Link>
                        <div class="toggle-knob"></div>
                        <Link to="/rider-page-2" className="rider inline-block">Rider</Link>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="row mt-5 gy-4 pt-4">
                  <div className="">
                    <div className="rounded-5 overlay">
                      <div class="container position-relative">
                        <img className="w-100 " src={img1} alt="" />
                        <div className=" text-light fs-4">
                          <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
                          Frank Analaba
                        </div>

                        {/* modal */}
                        {/* {isVisible && (<div className="container-fluid modal">
                            <div className="overlay"></div>
                            <div className="row align-items-center justify-content-center overlay-1">
                              <div className="col-lg-6 col-md-5 col-sm-4 ">
                                <div className="card text-center py-5 rounded-5 border-3 shadow modal-content">
                                  <div className=" my-4 mt-5">
                                    <a
                                      href="/"
                                      className="copy rounded-pill text-light px-5 py-4 fw-bold"
                                    >
                                      Copy manager link
                                    </a>
                                  </div>
                                  <div className="my-4">
                                    <a
                                      href="/"
                                      className="delete btn rounded-pill px-5 py-4 approved text-danger fw-bold"
                                    >
                                      Delete establishment
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>)} */}

                        <div className="middle">
                          <div className="text">
                            <Link to="/"></Link>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div className=" text-light fs-4">
                          <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
                          Winifred Iwu
                        </div>
                        <img className="w-100" src={img2} alt="" />

                        <div className="middle">
                          <div className="text">
                            <Link to="/"></Link>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div className=" text-light fs-4">
                          <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
                          Philomina Udie
                        </div>
                        <img className="w-100" src={img3} alt="" />
                        <div className="middle">
                          <div className="text">
                            <Link to="/"></Link>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <img className="w-100 image" src={img7} alt="" />
                        <div className="middle">
                          <div className="text">
                            <Link to="/riders-details">
                              <i class="bi bi-plus-lg"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Rider;
