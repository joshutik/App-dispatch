import React from "react";
import "./Addorder.css";
// import { Link } from "react-router-dom";
import Successmodal from "../Successmodal/Successmodal";


const Addorder = () => {

  // const [formData, setFormData] = useState({
  //   name: "",
  //   contact_person: "",
  //   phone_number: "",
  //   rider: "",
  //   riderPhone: "",
  //   riderAddress: "",
  //   order_number: "",
  //   reserved_quantity: "",
  //   amount_returned_by_customer: "",
  //   quantity_sold: "",
  //   amount_charged: "",
  //   gift_or_discount: "",
  // });

  return (
    <div>
      <div className="container-fluid bg bg-light">
        <div className="">
          <div className="pt-3 ps-5">
            <a className="text-light text-decoration-none fs-5 ml-4" href="/">
              <i className="bi bi-chevron-left"></i> Go Back
            </a>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-12 p-5">
              <h1 className="text-light text-center fw-bold">
                Lottery Company
              </h1>
            </div>
          </div>
          <div className="text-end">
            <p className="mb-0 fs-5 text-light p-3">
              Dispatch Rider: <span className="fw-bold">Gloria Analaba</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h2 className="fw-bold fs-2 heading-1">Add new order</h2>
      </div>
      <div className="container-fluid px-3">
        <div className="header mt-5">
          <p className="fs-3 fw-bold">Order details</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Number
            </label>
            <input
              type="number"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Reserve Quantity
            </label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Amount returned by customer
            </label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Quantity sold
            </label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Amount charger
            </label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <label htmlFor="name" className="fs-5 mb-2">
              Gift/Discount
            </label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3 form-control"
            />
          </div>
        </div>
        <div className="text-center mt-3 w-75 mx-auto">
          {/* <Link
            to="/confirm"
            type="submit"
            className="save text-decoration-none rounded-pill text-light w-100 py-3 mt-5 mb-5"
          >
            Save
          </Link> */}
          <Successmodal/>
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

export default Addorder;
