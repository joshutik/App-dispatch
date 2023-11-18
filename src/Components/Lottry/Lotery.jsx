import React from "react";
import "./Lotery.css";
import { Link } from "react-router-dom";

const Lotery = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="lotery">
          <div className="lot">
            <div className="pt-3 ps-5">
              <a className="text-light text-decoration-none fs-5 ml-4" href="/">
                <i className="bi bi-chevron-left"></i> Go Back
              </a>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 col-sm-12 p-5">
                <h1 className="text-light text-center fw-bold">
                  LOTTERY DELIVERY RECEIPT
                </h1>
                <p className="text-center text-light mt-3">
                  Please fill in the details below
                </p>
              </div>
            </div>
          </div>

          <div className="row rounded-5 justify-content-center w-100 p-5 mt-3 px-5">
            <div className="header mt-5">
              <p className="fs-3 fw-bold est">Establishment</p>
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
              {/* <div className="row justify-content-center">
                <div className="">
                  <div className="header mt-5">
                    <p className="fs-3 fw-bold mt-4 est">Riders Details</p>
                  </div>
                  <div className="mb-4 mt-5">
                    <label htmlFor="name" className="mb-3">
                      Name
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
                          Contact Person
                        </label>
                        <input
                          type="tel"
                          className="form-control rounded-pill w-100 border-1 py-3 px-3"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name" className="mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control rounded-pill w-100 border-1 py-3 px-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Order */}
              <div className="container-fluid">
                <div className="header mt-5">
                  <p className="fs-3 fw-bold est">Order details</p>
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
                      Amout returned by customer
                    </label>
                    <input
                      type="text"
                      className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                    <label htmlFor="name" className="fs-5 mb-2">
                      Quantity sold
                    </label>
                    <input
                      type="text"
                      className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                    <label htmlFor="name" className="fs-5 mb-2">
                      Amount charger
                    </label>
                    <input
                      type="text"
                      className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                    <label htmlFor="name" className="fs-5 mb-2">
                      Gift/Discount
                    </label>
                    <input
                      type="text"
                      className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                    />
                  </div>
                </div>
              </div>
              {/* Table */}
              <div className="my-3">
                <h3 className="fw-bold">Invoice</h3>
              </div>
              <div className=" w-100">
                <table className="table-1 table-bordered table-responsive align-middle w-100">
                  <thead>
                    <tr>
                      <th scope="col" className="p-4">
                        Date
                      </th>
                      <th scope="col" className="p-4">
                        Series
                      </th>
                      <th scope="col" className="p-4">
                        Quantity delivered
                      </th>
                      <th scope="col" className="p-4">
                       Amount paid
                      </th>
                      <th scope="col" className="p-4">
                       Balance
                      </th>
                      <th scope="col" className="p-4">
                        Discount
                      </th>
                      <th scope="col" className="p-4">
                      <Link to="/pending">Pending <i class="bi bi-chevron-down"></i></Link>
                        
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="p-4 text-center">3356</td>
                      <td className="p-4 text-center">24-46</td>
                      <td className="p-4 text-center">$200</td>
                      <td className="p-4 text-center">$200</td>
                      <td className="p-4 text-center">$500</td>
                      <td className="p-4 text-center">$200</td>
                    </tr>
                    <tr className="text-center">
                      <td className="p-4">3356</td>
                      <td className="p-4">24-46</td>
                      <td className="p-4">$200</td>
                      <td className="p-4">$200</td>
                      <td className="p-4">$500</td>
                      <td className="p-4">$200</td>
                    </tr>
                    <tr>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                    </tr>
                    <tr>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                      <td className="p-4"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-3 fw-bold">
                  <i class="bi bi-plus-lg est"></i>
                  <a href="/" className="est">
                    Add more
                  </a>
                </div>
                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="save rounded-pill text-light w-50 py-3 mt-5 mb-5"
                  >
                    Entregar
                  </button>
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
      </div>
    </div>
  );
};

export default Lotery;
