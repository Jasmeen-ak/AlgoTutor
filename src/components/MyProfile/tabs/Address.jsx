import React from 'react';

const Address = () => {
  return (
     <form className="profile-form">
        <h4>Address</h4>
        <p>Update your Address.</p>
      <div className="form-row-container">
        <div className="form-row">
          <div className="form-group">
            <label>Street Address<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i class="fa-solid fa-house"></i>
              <input type="text" defaultValue="Enter Street Address" />
            </div>
          </div>
          <div className="form-group">
            <label>City<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i class="fa-solid fa-house"></i>
              <input type="text" defaultValue="Enter City Name" />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>State<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i class="fa-solid fa-house"></i>
              <input type="text" defaultValue="Enter State Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Pincode<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
               <i class="fa-solid fa-house"></i>
              <input type="text" defaultValue="Enter your Number"/>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn-otp">Send OTP</button>
    </form>
  );
};

export default Address;
