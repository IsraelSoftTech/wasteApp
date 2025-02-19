import React, { useState } from "react";
import { FaRegFileAlt, FaUserAlt, FaBell } from "react-icons/fa";
import { MdDelete, MdEdit, MdMenu, MdSearch } from "react-icons/md";
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { FiTrash2, FiEdit, FiUsers } from "react-icons/fi";
import { FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./AdminDash.css";
import logo from "../../assets/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
// Graph
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";
import EduContent from "../EduContent/EduContent";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const AdminDash = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const navigate = useNavigate(); // Used for navigation


  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
  };
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to Signin.jsx
  };

  const openEditProfile = () => {
    setIsEditProfileOpen(true);
    setIsProfileDropdownOpen(false);
  };

  const closeEditProfile = () => {
    setIsEditProfileOpen(false);
  };
// graph
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Reports Analysis",
      data: [10, 25, 15, 30, 40], // Adjust these values to match the image trend
      backgroundColor: "rgba(173, 216, 230, 0.5)",
      borderColor: "#6495ED",
      fill: true,
      tension: 0.4, // Curve effect
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true },
  },
};
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="logo">
          <span className="logo-icon"><img src={logo} alt=""/></span>
        </div>
        <ul className={`nav-links ${isSidebarOpen ? "active" : ""}`}>
          <li className="active">
            <MdDashboard className="icon" /> Dashboard
          </li>
          <li>
            <FaRegFileAlt className="icon" /> Report
          </li>
          <li>
            <FaRegCalendarAlt className="icon" /> Schedule
          </li>
          <li>
            <FaGraduationCap className="icon" /> Education
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
      <header className="topbar">
          <MdMenu className="menu-icon" onClick={handleMenuClick} />
          <h2>WASTE MANAGEMENT APPLICATION</h2>
          <div className={`search-box-mobile ${isSearchVisible ? "active" : ""}`}>
            <MdSearch className="search-icon-mobile" onClick={handleSearchClick} />
            <input type="text" placeholder="Place a search" />
          </div>
          <div className="search-box">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Place a search" />
          </div>
          <div className="top-icons">
            <FaBell className="icon bell" />
            <div className="notification-badge">1</div>
            <div className="profile-container">
              <FaUserAlt className="profile-icon" onClick={toggleProfileDropdown} />
              {isProfileDropdownOpen && (
                <div className="profile-dropdown">
                  <p onClick={openEditProfile}>Edit Profile</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Edit Profile Modal */}
        {isEditProfileOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Edit Profile</h3>
              <label>Username:</label>
              <input type="text" value="admin_account" readOnly />
              <label>Password:</label>
              <input type="text" value="admin_password" readOnly />
              <button className="close-btn" onClick={closeEditProfile}>
                Close
              </button>
            </div>
          </div>
        )}

        <section className="stats-section">
          <div className="stat-card">
            <FaRegFileAlt className="icon" />
            <h3>Reports</h3>
            <p>21</p>
          </div>
          <div className="stat-card">
            <FaRegFileAlt className="icon" />
            <h3>Pending PickUps</h3>
            <p>12</p>
          </div>
          <div className="stat-card">
            <FiUsers className="icon" />
            <h3>Users</h3>
            <p>100</p>
          </div>
        </section>

        {/* Educational Content */}
        <section className="content-section">
         <EduContent/>
 <div className="graph-box">
      <h3>Reports Analysis (Graph)</h3>
      <div className="graph-placeholder">
        <Line data={data} options={options} />
      </div>
    </div>
        </section>

        {/* User and Dump Site */}
        <section className="user-illegal">
          <div className="user-box">
            <h3>Users</h3>

           <table>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>
              <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </td>
            </tr>
           </table>

          </div>

          <div className="user-box">
            <h3>Illegal Dump Sites</h3>
            <div className="graph-placeholder"></div>
          </div>
        </section>

     
      </main>
    </div>
  );
};

export default AdminDash;
