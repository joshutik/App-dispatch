import React from "react";
import './Ownerslogin.css'

const Ownerslogin = () => {
  return (
    <div>
      <div className="container-fluid owner-login">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-lg-5 col-md-7 col-sm-12">
              <div className="pt-5">
              <div className="card shadow rounded-4 px-5 pt-5 pb-0">
              <div className="header text-center">
                <h2 className="fw-bold text-dark py-2 head">Owner Login</h2>
              </div>
              <div className="inputs">
                <div className="form-group mb-3">
                  <label htmlFor="email" className="text-start">Email address</label>
                  <input
                    type="email"
                    className="rounded-pill w-100 form-control border-1 py-2 px-3"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    className="rounded-pill w-100 form-control border-1 py-2"
                    type="password"
                  />
                </div>
                <div className="form-group d-flex justify-content-between">
                  <div>
                    <input className="rounded-pill  border-1 mr-2" type="checkbox"/>
                    <label htmlFor="checkbox">Remember me</label>
                  </div>
                  <div>
                    <a href="/">Forgot password?</a>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-75 rounded-pill py-2"
                  >
                    Login
                  </button>
                </div>

                <div className="text-center mt-5">
                  <p>
                    Not an owner? <a href="/">Login as admin</a>
                  </p>
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

export default Ownerslogin;
