import React from "react";
import "./Rider.css";
import img1 from "../Assets/Rectangle 21 (2).png";
import img2 from "../Assets/Rectangle 21 (1).png";
import img3 from "../Assets/Rectangle 21.png";
import { Link } from "react-router-dom";

const Rider = () => {
  return (
    <div className="container-fluid w-100">
      <div className="establish">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <p className="fs-3 text-light">Buenas noches,</p>
            <h1 className="text-light text-center fw-bold">ADMIN DE LOTERIA</h1>
          </div>
        </div>
        <div className="form-box">
                  <label htmlFor="" className="switch">
                  <input type="checkbox"/><span className="Slider round"></span>
                  </label>
        </div>
        <div className="row justify-content-center">
          <div className="">
            <div className="card rounded-0 border-0">
              <div className="card-body w-100">
                <div>
                  <input
                    type="search"
                    className="form-control rounded-pill mt-5"
                  />
                  <div className="row mt-5 gy-4">
                    <div className="">
                      <div className="rounded-5 overlay">
                        <div class="container">
                          <img className="w-100 image" src={img1} alt="" />
                          <div className="middle">
                            <div className="text">
                            <Link to="/"><i class="bi bi-plus-lg"></i></Link>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                        <img className="w-100 image" src={img2} alt="" />
                        
                          <div className="middle">
                            <div className="text">
                            <Link to="/"><i class="bi bi-plus-lg"></i></Link>
                            </div>
                            <p>Lottery company</p>
                          </div>
                        </div>
                        <div class="container">
                        <img className="w-100 image" src={img3} alt="" />
                          <div className="middle">
                            <div className="text">
                            <Link to="/"><i class="bi bi-plus-lg"></i></Link>
                            </div>
                          </div>
                        </div>
                        <div class="container">
                        <img className="w-100 image" src={img3} alt="" />
                          <div className="middle">
                            <div className="text">
                            <Link to="/Add-more"><i class="bi bi-plus-lg"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    {/* <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className=" rounded-5 ">
                        <img className="w-100" src={img2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className=" rounded-5">
                        <img className="w-100" src={img3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className=" rounded-5">
                        <img className="w-100" src={img3} alt="" />
                      </div>
                    </div> */}
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

export default Rider;
