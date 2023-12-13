import React, { useState, useEffect } from "react";
import "./Managmentlog.css";
import axios from "axios";

const Managmentlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://distachapp.onrender.com/order/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="manager-log">
        <div className="pt-3 ps-5">
          <a
            className="text-light text-decoration-none fs-5 ml-4 text-end"
            href="/"
          >
            <i className="bi bi-chevron-left text-danger"></i> Logout
          </a>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <p>Buenas noches,</p>
            <h1 className="text-light text-center fw-bold">
              ESTABLISHMENT DEL LOTTERY
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="">
          <div className="my-3 text-center">
            <h3 className="fw-bold fs-1 my-5">Order details</h3>
          </div>
          <div className=" w-100">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Numero</th>
                    <th>Series</th>
                    <th>Quantity Reserved</th>
                    <th>Quantity Returned</th>
                    <th>Quantity Charged</th>
                    <th>Quantity Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.numero}</td>
                      <td>{item.series}</td>
                      <td>{item.quantityReserved}</td>
                      <td>{item.quantityReturned}</td>
                      <td>{item.quantityCharged}</td>
                      <td>{item.quantitySold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*<table className="table-1 table-bordered table-responsive align-middle w-100">
               <thead>
                <tr>
                  <th scope="col" className="p-4">
                    Date
                  </th>
                  <th scope="col" className="p-4">
                    Number
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
                    Gift
                   
                  </th>
                </tr>
              </thead>
              <tbody className="text-center position-relative">
                <tr>
                  <td className="p-4 text-center">23-11-2021</td>
                  <td className="p-4 text-center">3356</td>
                  <td className="p-4 text-center">24-46</td>
                  <td className="p-4 text-center">$200</td>
                  <td className="p-4 text-center">$200</td>
                  <td className="p-4 text-center">$500</td>
                  <td className="p-4 text-center">$200</td>
                  <td className="p-5 text-center ">
                    $200
                   <div className="position-relative re">

                    <div className="vertical-letters position-absolute">
                      <span>A</span>
                      <span>p</span>
                      <span>p</span>
                      <span>r</span>
                      <span>o</span>
                      <span>v</span>
                      <span>e</span>
                      <span>d</span>
                    </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="p-4 text-center">23-11-2021</td>
                  <td className="p-4">3356</td>
                  <td className="p-4">24-46</td>
                  <td className="p-4">$200</td>
                  <td className="p-4">$200</td>
                  <td className="p-4">$500</td>
                  <td className="p-4">$200</td>
                  <td className="p-4">$200</td>
                </tr>
                <tr>
                  <td className="p-4"></td>
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
                  <td className="p-4"></td>
                </tr>
              </tbody>
            </table>*/}
          </div>
        </div>
      </div>
      <div className="container-fluid footer py-4 bg-light text-center mt-5 mb-0">
        <div className="row justify-content-center align-items-center">
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

export default Managmentlog;
