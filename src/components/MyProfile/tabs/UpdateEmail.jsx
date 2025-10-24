import React from 'react';

const UpdateEmail = () => {
  return (
    <div className="profile-form-container">
      <form className="profile-form">
        <h4>Update Email</h4>
        <p>Update your Email here.</p>
        <div className="form-row">
          <div className="form-group">
            <label>Current Email</label>
            <input type="email" defaultValue="studentdemo@algotutor.io" disabled/>
          </div>
          <div className="form-group">
            <label>Update Email</label>
            <input type="email" placeholder="Enter new email" />
          </div>
        </div>
        <button type="button" className="btn-otp">Send OTP</button>
      </form>
    </div>
  );
};

export default UpdateEmail;
