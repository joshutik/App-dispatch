import React, { useState } from "react";
import "./Ownerregister.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Ownerregister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset validation error when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/1",
        formData
      );

      // Handle successful registration
      console.log("Registration successful:", response.data);

      // Assume the backend returns an authentication token
      const authToken = response.data.token;

      // Save the token to local storage or state for future API requests
      localStorage.setItem("authToken", authToken);
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Registration failed with status code:",
          error.response.status
        );
        console.error("Error data:", error.response.data);
        setErrors({
          ...errors,
          registration: "Registration failed. Please try again.",
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
        setErrors({
          ...errors,
          registration: "No response received from the server.",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
        setErrors({
          ...errors,
          registration: "An error occurred. Please try again.",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await handleRegistration();
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="container-fluid register">
      <div className="row min-vh-100 align-items-center justify-content-center">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <div className="card rounded-5 w-100 p-5 mx-auto shadow">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center text-color">Owner Register</h2>
              <div className="my-4">
                <label>First Name:</label>
                <br />
                <input
                  className="rounded-pill w-100 py-2 px-2"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <span style={{ color: "red" }}>{errors.firstName}</span>
              </div>

              <div className="my-4">
                <label>Email Address: </label>
                <br></br>
                <input
                  className="rounded-pill w-100 py-2 px-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <span style={{ color: "red" }}>{errors.email}</span>
              </div>

              <div className="my-4">
                <label>Password:</label>
                <br />
                <input
                  className="rounded-pill w-100 py-2 px-2"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <span style={{ color: "red" }}>{errors.password}</span>
              </div>

              <div className="text-center my-5">
                <button
                  type="submit"
                  className="w-75 rounded-pill py-2 text-light butn-bg"
                >
                  Register
                </button>
              </div>
              <div className="text-center">
                <p>
                  Not admin?{" "}
                   <Link>register as owner</Link>
                </p>
              </div>
            </form>
          </div>
          {errors.registration && (
            <p style={{ color: "red" }}>{errors.registration}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ownerregister;
