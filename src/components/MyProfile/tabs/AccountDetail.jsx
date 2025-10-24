import React from 'react';

const AccountDetail = () => {
  return (
    <form className="profile-form">
        <h4>Profile</h4>
        <p>Update your personal details here.</p>
      <div className="form-row-container">
        <div className="form-row">
          <div className="form-group">
            <label>First Name<span className="required-asterisk ">*</span></label>
            <div className="input-with-icon">
              <i className="fa-solid fa-user"></i>
              <input type="text" defaultValue="Student" />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i className="fa-solid fa-user"></i>
              <input type="text" defaultValue="Demo" />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i className="fa-solid fa-phone"></i>
              <input type="text" defaultValue="9999999999" />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address<span className="required-asterisk">*</span></label>
            <div className="input-with-icon">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" defaultValue="studentdemo@algotutor.io" />
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn-otp">Send OTP</button>
    </form>
  );
};

export default AccountDetail;
