import React, { useState } from 'react';
import './MyProfile.css';

// Import all the individual tab components from the 'tabs' folder
import AccountDetail from './tabs/AccountDetail';
import Department from './tabs/Department';
import Address from './tabs/Address';
import UpdateEmail from './tabs/UpdateEmail';
import ChangePassword from './tabs/ChangePassword';
import Notification from './tabs/Notification';
import CodingProfile from './tabs/CodingProfile';
import Others from './tabs/Others';

// Map tab names to their corresponding components for easy lookup
const tabComponents = {
  'Account Detail': AccountDetail,
  'Department': Department,
  'Address': Address,
  'Update Email': UpdateEmail,
  'Change Password': ChangePassword,
  'Notification': Notification,
  'Coding Profile': CodingProfile,
  'Others': Others,
};

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('Account Detail');

  // Get the component to render based on the active tab
  const ActiveTabComponent = tabComponents[activeTab];

  return (
    <div className="profile-container">
      <h2>Setting</h2>
      <p><i className="fa-solid fa-house"></i> Home / Setting</p>
    <div className="profile-starts">
     <h3>My Profile</h3>
      <div className="profile-tabs">
        {Object.keys(tabComponents).map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="profile-content">
        {/* Render the active component here */}
        <ActiveTabComponent />
      </div>
      </div>
    </div>
  );
};

export default MyProfile;
