import React from "react";
import "./Rider.css";
import img1 from "../Assets/Rectangle 21 (2).png";
import img2 from "../Assets/Rectangle 21 (1).png";
import img3 from "../Assets/Rectangle 21.png";

const Rider = () => {
  return (
    <div className="container-fluid establish">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 col-md-6 col-sm-12 p-5">
          <p className="fs-3 text-light">Buenas noches,</p>
          <h1 className="text-light text-center fw-bold">ADMIN DE LOTERIA</h1>
        </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body w-75">
            <div>
              <input type="search" className="form-control rounded-pill mt-5" />
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="card rounded-5">
                    <img src={img1} alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card rounded-5">
                    <img src={img2} alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card rounded-5">
                    <img src={img3} alt="" />
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
  );
};

export default Rider;
