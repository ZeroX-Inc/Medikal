import React from 'react'
import './Patient.css'

function Patient() {
  return (
    <div className='patient-space'>
      <form>
        <input className='p-input' type="text" placeholder='enter name' required/>
        <input className='p-input' type="number" placeholder='enter age' required/>
        <input className='p-input' type="text" placeholder='enter patientID' required/>
        <input className='p-input' type="date" placeholder='enter birthday' required/>
        <input className='p-input' type="text" placeholder='gender' required/>
        <input className='p-input' type="text" placeholder='phone' required/>
        <input className='p-input' type="text" placeholder='address'/>
        <select>
          <option value = "disabled selected"> Select Blood Type </option>
          <option value = "A+"> A+ </option>
          <option value = "A-"> A- </option>
          <option value = " B+"> B+ </option>
          <option value = "B"> B- </option>
          <option value="O+"> O+</option>
          <option value="O-"> O-</option>
          <option value="AB+"> AB+</option>
          <option value="AB-"> AB-</option>
        </select>
        <input className='p-input' type="text" placeholder='weight'/>
        <input className='p-input' type="text" placeholder='height'/>
        <input className='p-input' type="text" placeholder='emergency contact'/>
        <input className='p-input' type="text" placeholder='insurance'/>
        <textarea className='p-input'>Enter allergies</textarea>
        <textarea className='p-input'>Enter Medications</textarea>
        <textarea className='p-input'>Enter diseases</textarea>{/* chronical */}
        <button className='p-button'>Submit</button>
      </form>
    </div>
  );
}

export default Patient;
