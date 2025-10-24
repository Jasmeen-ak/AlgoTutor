import React from 'react';

const Notification = () => {
  return (
    <div className="profile-form-container">
      <div className="notification-settings">
        <div className="notification-block">
          <div className="toggle-item">
            <span className="toggle-label-bold">
              <i className="fa-solid fa-envelope"></i>
              Allow Email Notifications
            </span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <p className="toggle-description">Receive notifications about your sessions and activities via email.</p>
        </div>

        <div className="notification-block">
          <div className="toggle-item">
            <span className="toggle-label-bold">
              <i className="fa-solid fa-comment-sms"></i>
              Allow Text Message Notifications
            </span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <p className="toggle-description">Get SMS alerts for upcoming sessions and important updates.</p>
        </div>

        <div className="notification-block">
          <div className="toggle-item">
            <span className="toggle-label-bold">
              <i className="fa-brands fa-whatsapp"></i>
              Allow Whatsapp Notifications
            </span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <p className="toggle-description">Enable notifications on your WhatsApp for quick updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
