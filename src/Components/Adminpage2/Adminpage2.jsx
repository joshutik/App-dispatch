import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Adminpage2.css";
// import Managerlinkmodal from "../Copymanagermodal/Managerlinkmodal";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "../Selectdropdown/Select";


const Adminpage2 = () => {
  const [formData, setFormData] = useState({
    establishment: "",
    contactPerson: "",
    contactPhone: "",
    phoneNumber: "",
    rider: "",
    riderPhone: "",
    riderAddress: "",
    orderNumber: 0,
    reserveQuantity: "",
    customerReturnQuantity: "",
    soldQuantity: "",
    collectedQuantity: "",
    giftQuantity: "",
  });

  console.log(formData)
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate()
  const handleSave = async () => {
    try {
      setLoading(true);

      // Simulating an API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));


      // Assume successful save
      console.log("Data saved successfully!");
      toast.success("Data saved successfully!");
      navigate('/managercopy-modal');
      
      // Open the modal after a successful save
      setShowModal(true);
    } catch (error) {
      console.error("Error during save:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid add">
        <div className="pt-3 ps-5">
          <Link className="text-light text-decoration-none fs-5 ml-4" to="/">
            <i className="bi bi-chevron-left"></i> Go Back
          </Link>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-6 col-sm-12 p-5">
            <h1 className="text-light text-center fw-bold">Lottery Company</h1>
          </div>
        </div>
      </div>
      <div className="row rounded-5 p-5 mt-3">
        <div className="header mt-5">
          <p className="fs-3 fw-bold">Establecimiento</p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="mb-4">
            <label htmlFor="establishment" className="mb-3">
              Establecimiento
            </label>
            <input
              type="text"
              name="establishment"
              value={FormData.establishment}
              onChange={handleChange}
              className="form-control rounded-pill w-100 border-1 py-3 px-3"
            />
          </div>
          <div>
            <div className="row mt-5 pt-3">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="contactPerson" className="mb-3">
                  Persona de contacto
                </label>
                <input
                  type="tel"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="form-control rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="phoneNumber" className="mb-3">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  className="form-control rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
            </div>
          </div>

          {/* riders details */}
          <div className="row justify-content-center">
            <div className="">
              <div className="header mt-5">
                <p className="fs-3 fw-bold mt-4">Riders Details</p>
              </div>
              <div className="mb-4 mt-5">
                <label htmlFor="name" className="mb-3">
                  Namo
                </label>
                <Select />
                {/* <select
                  className="form-select rounded-pill w-100 border-1 py-3 px-3 numero"
                  aria-label="Rider"
                  name="rider" // Set the name attribute to match the corresponding property in formData
                  value={formData.rider} // Bind the value to the corresponding property in formData
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Select Rider
                  </option>
                  <option value="1">Rider 1</option>
                  <option value="2">Rider 2</option>
                  <option value="3">Rider 3</option>
                </select> */}
              </div>
              <div>
                <div className="row mt-5 pt-3">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <label htmlFor="riderPhone" className="mb-3">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="riderPhone"
                      value={FormData.riderPhone}
                      onChange={handleChange}
                      className="form-control rounded-pill w-100 border-1 py-3 px-3"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="riderAddress" className="mb-3">
                      Addresso
                    </label>
                    <input
                      type="text"
                      name="riderAddress"
                      value={FormData.riderAddress}
                      onChange={handleChange}
                      className="form-control rounded-pill w-100 border-1 py-3 px-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order */}
          <div className="container-fluid">
            <div className="header mt-5 pt-5">
              <p className="fs-3 fw-bold my-5">Order details</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="orderNumber" className="fs-5 mb-2">
                  Numero
                </label>
                <input
                  type="number"
                  name="orderNumber"
                  value={FormData.orderNumber}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="reserveQuantity" className="fs-5 mb-2">
                  Cantidad reserva
                </label>
                <input
                  type="number"
                  name="reserveQuantity"
                  value={FormData.reserveQuantity}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="customerReturnQuantity" className="fs-5 mb-2">
                  Cantidad devuelta por el cliente
                </label>
                <input
                  type="number"
                  name="customerReturnQuantity"
                  value={FormData.customerReturnQuantity}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="soldQuantity" className="fs-5 mb-2">
                  Cantidad vendida
                </label>
                <input
                  type="text"
                  name="soldQuantity"
                  value={FormData.soldQuantity}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="collectedQuantity" className="fs-5 mb-2">
                  Cantidad cobrada
                </label>
                <input
                  type="number"
                  name="collectedQuantity"
                  value={FormData.collectedQuantity}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Regalo
                </label>
                <input
                  type="text"
                  name="giftQuantity"
                  value={FormData.giftQuantity}
                  onChange={handleChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                type="submit"
                className="save text-decoration-none rounded-pill text-light w-50 py-3 mt-5 mb-5"
                onClick={handleSave}
                disabled={loading}
                // closeModal={() => setShowModal(false)}
                show={showModal} onHide={handleCloseModal}
              >
                Save
              </button>
              {/* <Managerlinkmodal/> */}
              {/* Modal component */}

              {/* <Managerlinkmodal
                
                onClick={handleSave}
                disabled={loading}
              /> */}
              {/* {loading ? "Saving..." : "Save"}) */}
              {/* <Link
                  to="/confirm"
                  type="submit"
                  className="save text-decoration-none rounded-pill text-light w-50 py-3 mt-5 mb-5"
                >
                  Save
                </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adminpage2;
