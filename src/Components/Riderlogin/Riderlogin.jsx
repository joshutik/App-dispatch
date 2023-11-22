import React from 'react'
import './Riderlogin.css'
// import { Link } from 'react-router-dom'
import Copyriderlink from '../Copyriderlink/Copyriderlink'

const Riderlogin = () => {
  return (
    <div>
        <div className="container ">
      <div className="card rider-login rounded-5 w-100 p-5 mt-3">
        <div className="header mt-5">
          <p className="fs-3 fw-bold">Riders Details</p>
        </div>
        <div className="col-lg-12 col-md-6 col-sm-12">
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="rounded-pill w-100 border-1 py-3 px-3"
            />
          </div>
          <div>
            <div className="row mt-5 pt-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="tel"
                  className="rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="name">Address</label>
                <input
                  type="text"
                  className="rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
            </div>
            <div className="text-center mt-5">
              {/* <Link to="/confirm"
                type="submit"
                className="save text-decoration-none rounded-pill text-light w-50 py-4 mt-5"
              >
                Save
              </Link> */}
              <Copyriderlink/>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Riderlogin
