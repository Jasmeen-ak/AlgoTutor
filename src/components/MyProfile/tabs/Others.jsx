import React from 'react';

const Others = () => {
  return (
    <div className="profile-form-container">
      <form className="profile-form">
       <h4>Other Details</h4>
        <p>Update your Personal Details here.</p>
        <div className="form-group">
          <label>T-shirt Size <span className="required">*</span></label>
          <input type="text" placeholder="Enter Your T-shirt Size" />
        </div>
        <button type="button" className="btn-otp">Send OTP</button>
      </form>
    </div>
  );
};

export default Others;
