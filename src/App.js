import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import UserDash from "./components/userDash/UserDash";
import AdminDash from "./components/dashBoard/AdminDash";

function App() {
  const firebaseUrl = "https://register-d6145-default-rtdb.firebaseio.com/users.json";

  const addAdminAccount = async () => {
    const adminData = {
      username: "admin_account",
      password: "admin_password",
      role: "admin",
    };

    try {
      // Fetch all users from the Firebase database
      const response = await fetch(firebaseUrl);
      const users = await response.json();

      // Check if the admin account already exists based on the username and password
      const adminExists = users && Object.values(users).some(user => user.username === adminData.username && user.password === adminData.password);

      if (adminExists) {
        console.log("Admin account already exists.");
        return; // If admin account exists, stop adding it again
      }

      // Add the admin account if it doesn't exist
      const addResponse = await fetch(firebaseUrl, {
        method: "POST", // Use POST to add a new entry
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });

      if (addResponse.ok) {
        console.log("Admin account added successfully!");
      } else {
        console.log("Failed to add admin account.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Call this function once to add the admin account if it doesn't exist
  useEffect(() => {
    addAdminAccount();
  }, []); // Runs only once when the component mounts

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-dashboard" element={<AdminDash />} />
        <Route path="/user-dashboard" element={<UserDash />} />
      </Routes>
    </Router>
  );
}

export default App;
