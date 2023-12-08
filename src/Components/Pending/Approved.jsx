import React from 'react'
import './Approved.css'
import { Link } from 'react-router-dom'

const Approved = () => {
  return (
    <div className='container-fluid'>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
          <div className="card border-3 shadow text-center px-4 py-5 rounded-5 ">
            <div className="my-5">
              <Link to="/" className="border border-2 rounded-pill py-4 px-5 pending fw-bold fs-5 text-light text-decoration-none">Pending</Link>
            </div>
            <div className="my-4">
              <Link to="/" className="border border-2 rounded-pill py-3 px-5 approved fw-bold fs-5 text-decoration-none">Approved</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approved
