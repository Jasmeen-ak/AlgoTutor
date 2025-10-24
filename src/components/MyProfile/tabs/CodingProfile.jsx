import React from 'react';

// Path goes up THREE levels to src, then into assets
import codechefLogo from '../../../assets/Codechef_Logo.png';
import codeforcesLogo from '../../../assets/CodeForce_Logo.png';
import githubLogo from '../../../assets/github-logo.png';
import hackerearthLogo from '../../../assets/hackerEarth_Logo.png';
import hackerrankLogo from '../../../assets/HackerRank_Logo.png';
import leetcodeLogo from '../../../assets/LeetCode_logo_black.png';

// ... the rest of your component code remains the same

const CodingProfile = () => {
  return (
    <div className="profile-form-container">
      <div className="coding-profiles">
        <div className="coding-profile-item">
          <label>
            <img src={leetcodeLogo} alt="LeetCode" className="platform-logo" />
            LeetCode
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
        <div className="coding-profile-item">
          <label>
            <img src={codechefLogo} alt="CodeChef" className="platform-logo" />
            CodeChef
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
        <div className="coding-profile-item">
          <label>
            <img src={codeforcesLogo} alt="Codeforces" className="platform-logo" />
            CodeForce
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
        <div className="coding-profile-item">
          <label>
            <img src={hackerrankLogo} alt="HackerRank" className="platform-logo" />
            HackerRank
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
        <div className="coding-profile-item">
          <label>
            <img src={hackerearthLogo} alt="HackerEarth" className="platform-logo" />
            HackerEarth
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
        <div className="coding-profile-item">
          <label>
            <img src={githubLogo} alt="GitHub" className="platform-logo" />
            GitHub
          </label>
          <input type="text" defaultValue="tourist" className="coding-input" />
          <button className="btn-otp">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CodingProfile;
