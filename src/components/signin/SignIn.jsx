import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import logo from "../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  // Updated to use "username" instead of "email"
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://wms-ipcx.onrender.com/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        // Save tokens and user info as needed
        localStorage.setItem("accessToken", data.token.access);
        localStorage.setItem("refreshToken", data.token.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));

        setLoading(false);
        navigate("/dashboard"); // Redirect to Dashboard
      } else {
        setLoading(false);
        setMessage(data.detail || "Login failed!");
      }
    } catch (error) {
      setLoading(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="head-items">
        <img src={logo} alt="Logo" />
        <h2>Waste Management Application</h2>
      </div>

      <div className="signin-box">
        <h3>Sign In</h3>
        <button className="google-btn">
          <FcGoogle style={{ fontSize: "35px" }} />
          Continue with Google Authenticate
        </button>
        <p className="or-text">Or</p>

        {message && (
          <p className="message" style={{ background: "#FF4C4C" }}>
            {message}
          </p>
        )}

        {/* Show spinner if loading */}
        {loading && <div className="spinner"></div>}

        <form onSubmit={handleSignIn}>
          <label>*Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />

          <label>*Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="signin-btn" type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
        <p className="forgot-password">Forgot Password?</p>
        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
