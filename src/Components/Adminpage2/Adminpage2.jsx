
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Adminpage2.css";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Select from "../Selectdropdown/Select";
import Managerlinkmodal from "../Copymanagermodal/Managerlinkmodal";

const Adminpage2 = () => {
  const [loading, setLoading] = useState(false);
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  // const [pCompany, setPCompany] = useState({});
  const [responseData, setResponseData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    contact_person: "",
    phone_number: "",
    rider: "",
    riderPhone: "",
    riderAddress: "",
    order_number: "",
    reserved_quantity: "",
    amount_returned_by_customer: "",
    quantity_sold: "",
    amount_charged: "",
    gift_or_discount: "",
    created: "",
    series:  "",
    quantity_delivered: "",
    amount_paid : "",
    balance : "",
    discount: "",
    confirm: false
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://distachapp.onrender.com/rider/");
        if (response.status === 200) {
          setResponseData(response.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input separately
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "rider") {
      const selectedRider = responseData.find(
        (rider) => rider.id === parseInt(value, 10)
      );
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

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://distachapp.onrender.com/establishment/ ",
        formData
      );

      if (response.status === 200) {
        console.log(formData);
        console.log("Establishment data sent successfully!!");
        await handleSubmitOrder();
        navigate("/rider-page-1");
      } else {
        console.error("Failed to send establishment data");
        toast.error("Failed to send establishment data");
      }
    } catch (error) {
      console.error("Error sending establishment data:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };
  const handleSubmitOrder = async () => {
    try {
      const response = await axios.post(
        "https://distachapp.onrender.com/establishment/",
        formData
      );

      if (response.status === 200) {
        console.log("Order details sent successfully!");
        toast.success("Order details sent successfully!");
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

  const handleSave = async () => {
    try {
      setLoading(true);
      await handleSubmit();

    } catch (error) {
      console.error("Error during save:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {
  //   const company = localStorage.getItem('currentCompany');
  //   let parsedCompany = JSON.parse(company);
  //   setPCompany(parsedCompany);
  //   console.log(parsedCompany);
  // }, []);

  
  useEffect(() => {
    // Fetch company details when the component mounts
    fetchCompanyDetails(companyId);
  }, [companyId]);

     // Define the function to fetch company details
  const fetchCompanyDetails = async (companyId) => {
    try {
      const response = await axios.get(`https://distachapp.onrender.com/establishment/${companyId}`);
      if (response.status === 200) {
        setCompany(response.data);
      } else {
        console.error("Failed to fetch company details");
      }
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  }

    useEffect(() => {
      const selectedCompanyId = localStorage.getItem('selectedCompanyId');
      if (selectedCompanyId) {
        // Fetch company details using the stored ID
        fetchCompanyDetails(selectedCompanyId);
      }
  }, [ ]);

  return (
    <div>
      <div className="container-fluid add">
        <div className="pt-3 ps-5">
          <Link to="/edit-company" className="text-light text-decoration-none fs-5 ml-4">
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
              // value={pCompany.name}
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
                  type="text"
                  name="contact_person"
                  onChange={handleInputChange}
                  value={company.name || ''}
                  // value={pCompany.name}
                  className="form-control rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <label htmlFor="phoneNumber" className="mb-3">
                  Telefono
                </label>
                <input
                  type="text"
                  name="phone_number"
                  value={company.name || ''}
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
                  type="text"
                  name="order_number"
                  value={formData.order_number}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="reserveQuantity" className="fs-5 mb-2">
                  Cantidad reserva
                </label>
                <input
                  type="text"
                  name="reserved_quantity"
                  value={formData.reserved_quantity}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                <label htmlFor="customerReturnQuantity" className="fs-5 mb-2">
                  Cantidad devuelta por el cliente
                </label>
                <input
                  type="text"
                  name="amount_returned_by_customer"
                  value={formData.amount_returned_by_customer}
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
                  value={formData.quantity_sold}
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
                  value={formData.amount_charged}
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
                  value={formData.gift_or_discount}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Date Created
                </label>
                <input
                  type="text"
                  name="created"
                  value={formData.created}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Series
                </label>
                <input
                  type="text"
                  name="series"
                  value={formData.series}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                Quantity Delivered
                </label>
                <input
                  type="text"
                  name="quantity_delivered"
                  value={formData.quantity_delivered}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                Amount Paid
                </label>
                <input
                  type="text"
                  name="amount_paid"
                  value={formData.amount_paid}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Balance
                </label>
                <input
                  type="text"
                  name="balance"
                  value={formData.balance}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Discount
                </label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  className="rounded-pill w-100 border-1 py-3 px-3 form-control"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
              <label htmlFor="name" className="fs-5 mb-2">
                Confirm
              </label>
              {/* Convert input field to checkbox */}
              <input
                type="checkbox"
                name="confirm"
                checked={formData.confirm} // Use 'checked' for a checkbox
                onChange={handleInputChange} // Use the same change handler
                className="form-check-input" // Apply necessary classes for styling
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
