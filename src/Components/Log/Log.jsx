import React, { useState } from "react";
import axios from "axios";

const Log = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const [loginResult, setLoginResult] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Simple validation
        if (!formData.email || !formData.password) {
          setLoginResult("Please fill in all fields.");
          return;
        }
    
        try {
          // Simulate login with a fake API endpoint from JSONPlaceholder
          const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts",
            formData
          );
    
          if (response.status === 201) {
            // Handle successful login
            console.log("Login successful:", response.data);
            setLoginResult("Login successful!");
          } else {
            // Handle failed login
            setLoginResult("Invalid credentials. Please try again.");
          }
        } catch (error) {
          console.error("Error during login:", error);
          setLoginResult("An error occurred. Please try again later.");
        }
      };
    
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          {loginResult && (
            <div style={{ marginTop: "10px", color: loginResult.includes("successful") ? "green" : "red" }}>
              {loginResult}
            </div>
          )}
        </div>
      );
    };

export default Log;
