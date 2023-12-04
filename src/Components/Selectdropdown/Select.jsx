import React, { useState, useEffect } from "react";
import '../Adminpage2/Adminpage2.css'

const Select = () => {
  const [formData, setFormData] = useState({
    rider: "",
  });

  const [riders, setRiders] = useState([]);

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await fetch("https://your-api-endpoint.com/riders");
        if (response.ok) {
          const ridersData = await response.json();
          setRiders(ridersData);
        } else {
          console.error("Failed to fetch riders:", response.status);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchRiders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <select className="form-select rounded-pill border-0 w-100 border-1 py-3 px-3 numero"
        id="rider"
        name="rider"
        value={formData.rider}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Select Rider
        </option>
        {riders.map((rider) => (
          <option key={rider.id} value={rider.id}>
            {rider.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
