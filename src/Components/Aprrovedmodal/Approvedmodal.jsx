import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Approvedmodal.css';

function Approvedmodal() {
  const [showMainModal, setShowMainModal] = useState(false);

  const handleShowMainModal = () => setShowMainModal(true);
  const handleCloseMainModal = () => setShowMainModal(false);

  const handlePendingClick = () => {
    alert('Pending');
    handleCloseMainModal(); // Close the modal after showing the alert
  };

  const handleApprovedClick = () => {
    alert('Approved');
    handleCloseMainModal(); // Close the modal after showing the alert
  };

  return (
    <>
      <button variant="primary" onClick={handleShowMainModal} className='border-0 fw-bold p-2 rounded-3'>
        Pending
      </button>
      <Modal show={showMainModal} onHide={handleCloseMainModal} className='h-50 bg-transparent' style={{ width: '25rem' }}>
        <Modal.Body className='card rounded-0 text-center bg-transparent'>
          <div className="pending">
            <Button className='w-50 py-3 rounded-pill my-3' onClick={handlePendingClick}>
              Pending
            </Button>
          </div>
          <div className="approved-1">
            <Button className='w-50 py-3 approved rounded-pill my-3 fw-bold' onClick={handleApprovedClick}>
              Approved
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Approvedmodal;
