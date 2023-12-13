import React from 'react';
import './Editestablishment.css'

const Editestablishment = ({ formData, onFormChange, onFormSubmit }) => {
  return (
    <div>
      <div className="mb-4 mt-5">
        <label htmlFor="name" className="mb-3">
          Select Establishment
        </label>
        <select
          className="form-select rounded-pill w-100 border-1 py-3 px-3 numero"
          aria-label="establishment"
          name="name"
          value={formData.name}
          onChange={onFormChange}
        >
          <option value="" disabled>
            Select Establishment
          </option>
          {/* Add options dynamically based on your establishmentData */}
        </select>
      </div>
      {/* Add more form fields for other establishment details */}
      <div className="row mt-5 pt-3">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <label htmlFor="contactPerson" className="mb-3">
            Persona de contacto
          </label>
          <input
            type="text"
            name="contact_person"
            value={formData.contact_person || ''}
            onChange={onFormChange}
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
            onChange={onFormChange}
            readOnly={false}
            className="form-control rounded-pill w-100 border-1 py-3 px-3"
          />
        </div>
      </div>
      {/* ... Add more form fields as needed ... */}
      <div className="text-center mt-3">
        <button
          type="button"
          className="save text-decoration-none rounded-pill text-light w-50 py-3 mt-5 mb-5"
          onClick={onFormSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Editestablishment;





