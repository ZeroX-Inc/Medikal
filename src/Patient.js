import React from 'react';
import './Patient.css';

function Patient() {
  return (
    <div className='patient-space'>
      <form>
        {/* First Row */}
        <div className="field-container">
          <input className='p-input' type="text" placeholder='Enter Name' required />
          <input className='p-input' type="number" placeholder='Enter Age' required />
          <input className='p-input' type="text" placeholder='Enter Patient ID' required />
        </div>

        {/* Second Row */}
        <div className="field-container">
          <input className='p-input' type="date" placeholder='Enter Birthday' required />
          <input className='p-input' type="text" placeholder='Gender' required />
          <input className='p-input' type="text" placeholder='Phone' required />
        </div>

        {/* Third Row */}
        <div className="field-container">
          <input className='p-input' type="text" placeholder='Address' />
          <select className='p-input'>
            <option value="disabled selected">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Fourth Row */}
        <div className="field-container">
          <input className='p-input' type="text" placeholder='Weight' />
          <input className='p-input' type="text" placeholder='Height' />
        </div>

        {/* Fifth Row */}
        <div className="field-container">
          <textarea className='p-input' placeholder='Enter Allergies'></textarea>
          <textarea className='p-input' placeholder='Enter Medications'></textarea>
        </div>

        {/* Sixth Row */}
        <div className="field-container">
          <textarea className='p-input' placeholder='Enter Diseases'></textarea>
          <input className='p-input' type="text" placeholder='Emergency Contact' />
        </div>

        {/* Seventh Row */}
        <div className="field-container">
          <input className='p-input' type="text" placeholder='Insurance' />
        </div>

        {/* Submit Button */}
        <button className='p-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Patient;
