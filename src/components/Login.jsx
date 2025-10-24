import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Import navigation hook
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";
import logo from "../assets/logo.jpg";
import rightImage from "../assets/bg.jpeg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();  // ✅ Initialize navigation

  const handleLogin = (e) => {
    e.preventDefault(); // prevent page refresh
    navigate("/home");  // ✅ Redirect to Home page
  };

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="login-box">
          {/* Logo and Brand */}
          <div className="brand-header">
            <img src={logo} alt="AlgoTutor Logo" className="brand-logo" />
          </div>

          {/* Welcome Text */}
          <h3 className="welcome-heading">Welcome to AlgoTutor 👋</h3>
          <p className="welcome-subtext">
            Login to your account with username and password.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>
                Email Id <span className="required">*</span>
              </label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group password-group">
              <label>
                Password <span className="required">*</span>
              </label>
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>
            </div>

            <div className="options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Remember me</label>
              </div>
              <a href="/" className="forgot-password">
                <u>Forgot Password?</u>
              </a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div
          className="image-section"
          style={{
            backgroundImage: `url(${rightImage})`,
          }}
        ></div>

        <div className="text-section">
          <h2>Start your journey with us.</h2>
          <p>Get started with your immersive learning experience.</p>

          <div className="stats">
            <div>
              <h3>30000+</h3>
              <p>Careers Transformed</p>
            </div>
            <div>
              <h3>20000+</h3>
              <p>Learning Community</p>
            </div>
            <div>
              <h3>Live</h3>
              <p>Interactive Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
