import React, { useState } from 'react';
import { Modal, Card } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import './Modal.css';

function Examplem() {
  const [showModal, setShowModal] = useState(true);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <BsThreeDotsVertical
        onClick={handleModalToggle}
        className="position-absolute top-0 end-0 me-4 mt-3 bi bi-three-dots-vertical text-light btn-modal"
      />

      <Modal show={showModal} onHide={handleModalToggle} size="md" centered>
        <Modal.Body id="heloworld"  className="text-center shadow-lg rounded-5">
          <Card >
            <div className="copy my-4">
              <button className="rounded-pill px-5 py-2 copy-btn fw-bold">Copy rider link</button>
            </div>
            <div className="my-4">
              <button className="delete-btn rounded-pill px-5 py-2 fw-bold">Delete rider</button>
            </div>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Examplem;
