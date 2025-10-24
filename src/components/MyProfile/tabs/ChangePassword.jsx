import React from 'react';

const ChangePassword = () => {
  return (
    <div className="profile-form-container">
      <form className="profile-form">
        <h4>Update Password</h4>
        <p>Update your Password here.</p>
        <div className="form-row">
          <div className="form-group">
            <label>New Password <span className="required">*</span></label>
            <input 
              type="password" 
              placeholder="Enter new password" 
              className="input-with-icon" 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password <span className="required">*</span></label>
            <input 
              type="password" 
              placeholder="Confirm new password" 
              className="input-with-icon" 
            />
          </div>
        </div>
        <button type="button" className="btn-otp">Send OTP</button>
      </form>
    </div>
  );
};

export default ChangePassword;
