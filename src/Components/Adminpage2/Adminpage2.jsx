
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Adminpage2.css";
// import Managerlinkmodal from "../Copymanagermodal/Managerlinkmodal";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "../Selectdropdown/Select";
import Managerlinkmodal from "../Copymanagermodal/Managerlinkmodal";


const Adminpage2 = () => {

 const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'rider') {
      // Retrieve rider details and set riderPhone and riderAddress based on selected rider
      const selectedRider = responseData.find((rider) => rider.id === parseInt(value, 10));
      if (selectedRider) {
        setFormData((prevData) => ({
          ...prevData,
          rider: selectedRider.id,
          riderPhone: selectedRider.phone,
          riderAddress: selectedRider.address,
        }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  

  const handleSaveClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const navigate = useNavigate()
    // function to handle saving establishment and  order data
    const handleSave = async () => {
      try {
        setLoading(true);
        await handleSubmit(); // Sending establishment details
        await handleSubmitOrder(); // Sending order details
      } catch (error) {
        console.error("Error during save:", error);
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:9090/rider/");
  
        if (response.status === 200) {
          setResponseData(response.data);
          console.log(response.data)
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState({
    establishment: "",
    contact_person: "",
    phone_number: "",
    rider: "",
    riderPhone: "",
    riderAddress: "",
    order_number: 0,
    reserved_quantity: "",
    amount_returned_by_customer: "",
    quantity_sold: "",
    collectedQuantity: "",
    gift_or_discount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    if (!formData.first_name || !formData.last_name || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:9090/establishment/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Establishment data sent successfully!!');
        console.log(formData);
      } else {
        // Get error response from server
        const errorResponse = await response.json();
        console.error('Failed to send establishment  data:', errorResponse);
      }
    } catch (error) {
      console.error('Error sending establishment data:', error);
    }
  };



  const handleSubmitOrder = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:9090/order/create/",
        formData // Sending formData for creating an order
      );

      if (response.status === 200) {
        console.log("Order details sent successfully!");
        toast.success("Order details sent successfully!");
        navigate("/managercopy-modal");
        setShowModal(true);
      } else {
        console.error("Failed to send order details.");
        toast.error("Failed to send order details.");
      }
    } catch (error) {
      console.error("Error sending order details:", error);
      toast.error("An error occurred. Please try again later.");
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
              name="name"
              onChange={handleInputChange}
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
                  name="contact_person"
                  onChange={handleInputChange}
                  className="form-control rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="phoneNumber" className="mb-3">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  onChange={handleInputChange}
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
                  Select Rider
                </label>
                
                <select
                  className="form-select rounded-pill w-100 border-1 py-3 px-3 numero"
                  aria-label="Rider" 
                  name="rider" 
                  value={formData.rider}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Rider
                  </option>
                  {responseData.map((rider, index) => (
                  <option key={index} value={rider.id}>
                    {rider.first_name} {rider.last_name} - {rider.phone}
                  </option>
          ))}
                </select>
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
                      value={formData.riderPhone}
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
                      value={formData.riderAddress}
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
                  name="order_number"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="reserveQuantity" className="fs-5 mb-2">
                  Cantidad reserva
                </label>
                <input
                  type="number"
                  name="reserve_quantity"
                  value={formData.reserveQuantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="customerReturnQuantity" className="fs-5 mb-2">
                  Cantidad devuelta por el cliente
                </label>
                <input
                  type="number"
                  name="amount_returned_by_customer"
                  value={formData.customerReturnQuantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="soldQuantity" className="fs-5 mb-2">
                  Cantidad vendida
                </label>
                <input
                  type="text"
                  name="quantity_sold"
                  value={formData.soldQuantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="collectedQuantity" className="fs-5 mb-2">
                  Cantidad cobrada
                </label>
                <input
                  type="text"
                  name="amount_charged"
                  value={formData.collectedQuantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Regalo
                </label>
                <input
                  type="text"
                  name="gift_or_discount"
                  value={formData.giftQuantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
            </div>
            <div className="text-center mt-3">
              {/* <Managerlinkmodal type="submit"
                onClick={handleSave}
                disabled={loading}/> */}
              <Managerlinkmodal
                type="submit"
                onClick={() => {
                  handleSave();
                  handleSaveClick();
                }}
                disabled={loading}
                showModal={showModal}
                onClose={handleCloseModal} 
              />

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
