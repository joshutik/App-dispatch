// MyModalComponent.js

// import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import './Copyriderlink.css'
import { Link } from 'react-router-dom';


function Copyriderlink({showModal, handleCloseModal}) {
  return (
    <>
      

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-transparent rounded-3">
      {/* <Modal.Header closeButton>
        
        </Modal.Header> */}
        <Modal.Body dialogClassName="modal-body">
        <div className="header text-center">
                    <i class="bi bi-check-circle-fill icon"></i>
                </div>
                <div className='text-center pb-5 fw-bold text-dark'>
                    <h1>Weldone!!!</h1>
                    <p>
                        Saved successfully
                    </p>
                    <div className='mt-5 mb-5'>
                        <div>
                        <Link to="/rider-page-2" className='rounded-pill go-back py-2 px-5 text-decoration-none d-block  w-100 btn-link mt-3 text-light'>Go back</Link>
                        </div>
                        <div>
                        <Link to="/" className='rounded-pill py-2 px-5 text-decoration-none d-block w-100 btn-link mt-3 text-light'>Copy rider link</Link>
                        </div>
                    </div>
                </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Copyriderlink;
