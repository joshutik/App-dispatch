import React from "react";
import "./Establish.css";
import img4 from "../Assets/card img-1.png";
import img5 from "../Assets/card img-2.png";
import img6 from "../Assets/card img-3.png";
import img7 from "../Assets/Rectangle 21 (3).png";
import { Link } from "react-router-dom";

const Establish = () => {
  return (
    <div>
      <div className="row mt-5 gy-4">
        <div className="rounded-5 overlay">
          <div class="container position-relative">
            <img className="w-100 " src={img4} alt="" />
            <div className=" text-light fs-4 my-3">
              <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
              Lottery Company
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
          <div class="container position-relative">
            <img className="w-100" src={img5} alt="" />
            <div className=" text-light fs-4 my-3">
              <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
              Lottery Company
            </div>

            <div className="middle">
              <div className="text">
                <Link to="/"></Link>
              </div>
            </div>
          </div>
          <div class="container position-relative">
            <img className="w-100" src={img6} alt="" />
            <div className=" text-light fs-4 my-3">
              <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
            </div>
            <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
              Lottery Company
            </div>
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
                <Link to="/edit-company">
                  <i class="bi bi-plus-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Establish;
