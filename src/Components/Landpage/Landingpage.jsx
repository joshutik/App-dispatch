import React from "react";
import './Landingpage.css'
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="container-fluid landing-page">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card rounded-5">
            <div className="card-body text-center pt-5">

                <div className="my-4">
                    <Link to="/Admin-login" className="btn btn-primary rounded-pill w-75 py-3"> Admin login</Link>
                </div>
                <div className="text-center">
                   <hr className="w-50 mx-auto my-3" />
                </div>
               
                {/* <div className="my-4">
                    <Link to="" type="submit" className="btn btn-primary rounded-pill w-75 py-3"> Administrador sesion</Link>
                </div> */}
                <div className="my-4">
                    <Link to="/riders-form" type="submit" className="btn btn-primary rounded-pill w-75 py-3">Rider page</Link>
                </div>
                <div className="my-4">
                    <Link to="/manager-page" type="submit" className="btn btn-primary rounded-pill w-75 py-3"> Manager page</Link>
                </div>

                <div className="mt-5">
              <p className="text-center pt-3">
                Don’t have an account yet? <a href="/">Register now</a>
              </p>
            </div>

            {/* <div className="text-center">
              <link to="/Land-page" className="Link">
                Iniciar sesion
              </link>
            </div>
            <div className="text-center mt-5">
              <link to="/Admin" className="rounded-pill Link">
                Administrador sesion
              </link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
