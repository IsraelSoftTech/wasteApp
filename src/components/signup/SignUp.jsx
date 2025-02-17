import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  // Renamed "fullName" to "username" to match the API
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://wms-ipcx.onrender.com/api/auth/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            confirm_password: confirmPassword, // Note the API expects "confirm_password"
          }),
        }
      );
      const data = await response.json();

      if (response.status === 201) {
        setMessage("Account Created Successfully!");
        // Optionally, store tokens if needed:
        // localStorage.setItem("accessToken", data.token.access);
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setLoading(false);
        setMessage(data.detail || "Signup failed!");
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

      <div className="signup-box">
        <h3>Sign Up</h3>
        <button className="google-btn">
          <FcGoogle style={{ fontSize: "35px" }} />
          Continue with Google Authenticate
        </button>
        <p className="or-text">Or</p>

        {message && <p className="message">{message}</p>}
        {loading && <div className="spinner"></div>}

        <form onSubmit={handleSignUp}>
          <label>*Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            required
          />

          <label>*Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            required
          />

          <label>*Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
          />

          <label>*Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat password"
            onChange={handleChange}
            required
          />

          <button className="signup-btn" type="submit" disabled={loading}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
