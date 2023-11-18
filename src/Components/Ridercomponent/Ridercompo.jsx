import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/Rectangle 21 (2).png";
import img2 from "../Assets/Rectangle 21 (1).png";
import img3 from "../Assets/Rectangle 21.png";
import img7 from "../Assets/Rectangle 21 (3).png";


const Ridercompo = () => {
  return (
    <div>
      <div className="row mt-5 gy-4 pt-4">
        <div className="">
          <div className="rounded-5 overlay">
            <div class="container position-relative my-3">
              <img className="w-100 " src={img1} alt="" />
              <div className=" text-light fs-4 my-3">
                <i class="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"></i>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle mt-5 text-light">
                Frank Analaba
              </div>
              <div className="middle">
                <div className="text">
                  <Link to="/"></Link>
                </div>
              </div>
            </div>
            <div class="container my-3">
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
            <div class="container my-3">
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
            <div class="container my-3">
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
  );
};

export default Ridercompo;
