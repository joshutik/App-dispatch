import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Adminpage2.css";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Managerlinkmodal from "../Copymanagermodal/Managerlinkmodal";

const Adminpage2 = () => {
  
  const [loading, setLoading] = useState(false);
  const [establishmentData, setEstablishmentData] = useState([]);
  const [riderData, setRiderData] = useState([]);
  const [orderResponse, setOrderResponse] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    quantity_delivered: "",
    amount_paid : "",
    balance : "",
    discount: "",
    confirm: false
  });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const establishmentResponse = await axios.get("https://distachapp.onrender.com/establishment/");
        const riderResponse = await axios.get("https://distachapp.onrender.com/rider/");
        const orderResponse = await axios.get("https://distachapp.onrender.com/order/");

        if (establishmentResponse.status === 200) {
          setEstablishmentData(establishmentResponse.data);
        } else {
          console.error("Failed to fetch establishment data");
        }
        if (orderResponse.status === 200) {
          setOrderResponse(orderResponse.data);
        } else {
          console.error("Failed to fetch Order data");
        }

        if (riderResponse.status === 200) {
          setRiderData(riderResponse.data);
        } else {
          console.error("Failed to fetch rider data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (orderResponse.length > 0) {
      const orderData = orderResponse[0]; // Assuming you want to prefill with the first order
  
      setFormData((prevData) => ({
        ...prevData,
        order_number: orderData.order_number || '',
        series: orderData.series || '',
        quantity_delivered: orderData.quantity_delivered || '',
        amount_paid: orderData.amount_paid || '',
        balance: orderData.balance || '',
        discount: orderData.discount || '',
      }));
    }
  }, [orderResponse]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const selectedEstablishment = establishmentData.find(
        (establishment) => establishment.id === parseInt(value, 10)
      );
      if (selectedEstablishment) {
        setFormData((prevData) => ({
          ...prevData,
          name: selectedEstablishment.name,
          contact_person: selectedEstablishment.contact_person,
          phone_number: selectedEstablishment.phone_number,
          order_number: selectedEstablishment.order_number,
        }));
      }
    } else if (name === "rider") {
      const selectedRider = riderData.find(
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
    } else if (name === "order") {
      const selectedOrder = orderResponse.find(
        (order) => order.id === parseInt(value, 10)
      );
      if (selectedOrder) {
        setFormData((prevData) => ({
          ...prevData,
          order: selectedOrder.id,
          quantity_sold: selectedOrder.quantity_sold,
          amount_charged: selectedOrder.amount_charged,
          created: selectedOrder.created,
          gift_or_discount: selectedOrder.gift_or_discount,
          series: selectedOrder.series,
          amount_paid: selectedOrder.amount_paid,
          quantity_delivered: selectedOrder.quantity_delivered,
          balance: selectedOrder.balance,
          discount: selectedOrder.discount,
        }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;

  //   // Handle checkbox input separately
  //   const newValue = type === "checkbox" ? checked : value;

  //   setFormData({
  //     ...formData,
  //     [name]: newValue,
  //   });
  // };

  


  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:9090/establishment/create/${formData.id}`,
        formData
      );

      if (response.status === 200) {
        console.log(formData);
        console.log("Establishment data sent successfully!!");
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
  // const handleSubmitOrder = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:9090/order/create/",
  //       formData
  //     );

  //     if (response.status === 200) {
  //       console.log("Order details sent successfully!");
  //       toast.success("Order details sent successfully!");
  //       setShowModal(true);
  //     } else {
  //       console.error("Failed to send order details.");
  //       toast.error("Failed to send order details.");
  //     }
  //   } catch (error) {
  //     console.error("Error sending order details:", error);
  //     toast.error("An error occurred. Please try again later.");
  //   }
  // };

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


  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:9090/establishment/${formData.name}`, // Update the endpoint with the establishment ID you're editing
  //       {
  //         contact_person: formData.contact_person,
  //         phone_number: formData.phone_number,
  //         // Add other fields you want to update
  //       }
  //     );
  
  //     if (response.status === 200) {
  //       console.log("Establishment data updated successfully!!");
  //       toast.success("Establishment data updated successfully!!");
  //       // You can add additional logic here such as updating state or informing the user about the successful update
  //     } else {
  //       console.error("Failed to update establishment data");
  //       toast.error("Failed to update establishment data");
  //     }
  //   } catch (error) {
  //     console.error("Error updating establishment data:", error);
  //     toast.error("An error occurred. Please try again later.");
  //   }
  // };

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
        <div className="mb-4 mt-5">
                <label htmlFor="name" className="mb-3">
                  Select Establishment
                </label>
                <select
                  className="form-select rounded-pill w-100 border-1 py-3 px-3 numero"
                  aria-label="establishment" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                >
                  <option value=""  disabled>
                    Select Establishment
                  </option>
                  {establishmentData.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name} {item.contact_person} - {item.phone_number}
                  </option>
                  ))}
                </select>
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
                  value={formData.contact_person || ''}
                  onChange={handleChange}
                  readOnly={false} // Always editable
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
                    value={formData.phone_number || ''}
                    onChange={handleChange}
                    readOnly={false}
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
                  {riderData.map((rider, index) => (
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
                      Telephone
                    </label>
                    <input
                      type="tel"
                      name="riderPhone"
                      value={formData.riderPhone}
                      onChange={handleChange}
                      readOnly={true}
                      className="form-control rounded-pill w-100 border-1 py-3 px-3"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="riderAddress" className="mb-3">
                      Address
                    </label>
                    <input
                      type="text"
                      name="riderAddress"
                      value={formData.riderAddress}
                      onChange={handleChange}
                      readOnly={true}
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
                  value={formData.order_number || ''}
                  onChange={handleChange}
                  className="form-control rounded-pill w-100 border-1 py-3 px-3"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
                <label htmlFor="name" className="fs-5 mb-2">
                  Date Created
                </label>
                <input
                  type="text"
                  name="order_number"
                  value={formData.order_number}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
