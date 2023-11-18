import React from 'react'
import './Confirmpage.css'
import { Link } from 'react-router-dom'

const Confirm = () => {
  return (
    <div>
      <div className="container-fluid success">
        <div className="row min-vh-100 justify-content-center align-items-center">
          <div className="col-lg-4 col-md-5 col-sm-7">
            <div className="pt-5">
              <div className="card shadow rounded-4 px-5 pt-3 pb-5 confirm">
                <div className="header text-center">
                    <i class="bi bi-check-circle-fill icon"></i>
                </div>
                <div className='text-center pb-3 fw-bold text-dark'>
                    <h1>Weldone!!!</h1>
                    <p>
                        Form Submited successfuly
                    </p>
                    <div className='mt-5'>
                        <Link to="/confirm" className='rounded-pill py-3 px-5 text-decoration-none  w-100 success-btn'>Add another</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
