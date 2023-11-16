import React from 'react'
import './Coppymanagerlink.css'

const Copymanagerlink = () => {
  return (
    <div className='container-fluid'>
        <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-md-5 col-sm-4">
          <div className="card text-center py-5 rounded-5 border-3 shadow">
            <div className=" my-4 mt-5">
              <a href="/" className="copy rounded-pill text-light px-5 py-4 fw-bold">Copy manager link</a>
            </div>
            <div className="my-4">
              <a href="/" className="delete btn rounded-pill px-5 py-4 approved text-danger fw-bold">Delete establishment</a>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Copymanagerlink
