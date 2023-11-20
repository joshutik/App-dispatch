import "./Adminslogin.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import Ownerslogin from "../Ownerlogin/Ownerslogin";

const Adminslogin = ({onformSwitch}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [activeState, setActiveState] = useState('adminLogin')
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the login API endpoint with formData
    try {
      const response = await fetch("https://128f-41-184-171-185.ngrok-free.app/jwt_token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login
        const responseData = await response.json();
        console.log("Login successful:", responseData);
      } else {
        // Handle failed login
        console.error("Login failed:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };



  return (
    <>
      <div className="container-fluid login">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-12">
            <div className="pt-5">
              <div className="card shadow rounded-4 px-5 pt-5 pb-0">
                <form action="#" onSubmit={handleSubmit}>
                  {activeState === "adminLogin" && (<div className="header text-center">
                    <h2 className="fw-bold text-dark py-2 head">Admin Login</h2>
                  </div>)}

                 {activeState === "ownerLogin" && (<div className="header text-center">
                    <h2 className="fw-bold text-dark py-2 head">Owner Login</h2>
                  </div>)}
                  <div className="inputs">
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="text-start">
                        Email address
                      </label>
                      <input
                        value={formData.email} onChange={handleChange}
                        type="email"
                        className="rounded-pill w-100 form-control border-1 py-2 px-3"
                        name="email"
                        id="email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        value={formData.password} onChange={handleChange}
                        className="rounded-pill w-100 form-control border-1 py-2"
                        type="password"
                        id="password"
                        name="password"
                      />
                    </div>
                    {/* <div className="form-group d-flex justify-content-between">
                      <div>
                        <input
                          className="rounded-pill  border-1 mr-2"
                          type="checkbox"
                        />
                        <label htmlFor="checkbox">Remember me</label>
                      </div>
                      <div>
                        <a href="/">Forgot password?</a>
                      </div>
                    </div> */}

                    <div className="mt-5 text-center">
                      <Link
                        to="/Rider-login"
                        type="submit"
                        className="btn btn-primary w-75 rounded-pill py-2"
                      >
                        Login
                      </Link>
                    </div>

                    {activeState === "adminLogin" && <div className="text-center mt-5">
                      <p>
                        Not an admin?{" "}
                        <Link
                          // to="/Admin-login"
                          onClick={() => setActiveState("ownerLogin")}
                        >
                          Login as owner
                        </Link>
                      </p>
                    </div>}
                    {activeState === "ownerLogin" && <div className="text-center mt-5">
                      <p>
                        Not an owner?{" "}
                        <Link
                          // to="/Admin-login"
                          onClick={() => setActiveState("adminLogin")}
                        >
                          Login as Admin
                        </Link>
                      </p>
                    </div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminslogin;
