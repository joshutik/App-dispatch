import React, { useEffect, useState } from "react";
import "./Ownerslog.css";
import img4 from "../Assets/Circle chart.png";
import Currentdate from "../Currentdate/Currentdate";
import axios from "axios";

const Ownerslog = () => {
  const [establishmentData, setEstablishmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const establishmentResponse = await axios.get("https://distachapp.onrender.com/establishment/");
        if (establishmentResponse.status === 200) {
          setEstablishmentData(establishmentResponse.data);
        } else {
          console.error("Failed to fetch establishment data");
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const [totalEarnings, setTotalEarnings] = useState("");
  const [order, setOrder] = useState("");
  const [amtPaid, setAmtPaid] = useState("");
  const [totalDebt, setTotalDebt] = useState("");
  const [totalAmtPaid, setTotalAmtPaid] = useState("");
  const [totalAmtSupplied, setTotalAmtSupplied] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      console.log(response);
      setTotalEarnings(response.data.length);
      setOrder(response.data.length);
      setAmtPaid(response.data.length);
      setTotalDebt(response.data.length);
      setTotalAmtPaid(response.data.length);
      setTotalAmtSupplied(response.data.length);
      // if (response.ok) {
      //   // Handle successful login
      //   const responseData = await response.json();
      //   console.log("Login successful:", responseData);
      //   console.log(response)

      // } else {
      //   // Handle failed login
      //   console.error("Login failed:", response.status);
      //   // navigate('/Rider-login')
      // }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="owner-bg p-5">
        <div className="row justify-content-center text-light">
          <div className="col-lg-7">
            <div className="text-light">
              <h3 className="fs-2 fw-bold text-light">Buenas Noches,</h3>
              <h1 className="fs-1 fw-bold text-light ml-5">
                Dunena De Loteria
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-lg-10 col-md-6 col-sm-12">
          <label htmlFor="establishment" className="fs-4 fw-normal mb-3">
            Choose an establishment
          </label>
          <select
            className="form-select rounded-pill py-3"
            aria-label="Default select example"
          >
            <option selected>Select an establishment</option>
                  {establishmentData.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name} {item.contact_person} - {item.phone_number}
            </option>
            ))}
          </select>
          <div className="row gy-4 justify-content-center">
            <div className="row mt-5">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="fs-2 mt-5">Overview</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="text-dark mt-5 pt-3 text-normal text-end">
                  Fecha Uitima Entrega:{" "}
                  <span className="fw-bold">
                    <Currentdate />
                  </span>
                </p>
              </div>
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
                      <span className="success-class fw-bold">
                      &euro;{totalEarnings}
                      </span>
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
                      <span className="success-class fw-bold">{order} order</span>
                    </h2>
                    <p className="text-light">compared to 52,000 yesterday</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center mt-5 gy-4 mb-5 pb-5">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">Total amount paid</h6>
                  <h1 className="text-light">&euro;{amtPaid}</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">Total debts</h6>
                  <h1 className="text-light own">&euro;{totalDebt}</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light">Total amount reserved</h6>
                  <h1 className="text-light">&euro;{totalAmtPaid}</h1>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card plates rounded-4 w-100 py-3">
                  <h6 className="text-light own">Total amount supplied</h6>
                  <h1 className="text-light">&euro;{totalAmtSupplied}</h1>
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

export default Ownerslog;
