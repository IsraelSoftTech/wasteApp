import React, { useState } from "react";
import { FaRegFileAlt, FaUserAlt, FaBell } from "react-icons/fa";
import { MdDelete, MdEdit, MdMenu, MdSearch } from "react-icons/md";
import { FiTrash2, FiEdit, FiUsers } from "react-icons/fi";
import { FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "./AdminDash.css";
import logo from "../../assets/logo.png";

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearchClick = () => {
    setIsSearchVisible((prev) => !prev);
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
            <div className="profile-icon"><FaUserAlt/></div>
          </div>
        </header>
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
          <div className="content-box">
            <h3>Educational Contents</h3>
            <ul>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                Importance of keeping a clean env...

                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>

              </li>
              <li>
                How to keep a clean environment fro...
                <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </li>
              <li>
                Dangers of dirty environments on the...
                 <div className="editDel">
                <FiEdit className="edit-icon" />
                <FiTrash2 className="delete-icon" />
                </div>
              </li>
            </ul>
          </div>

          <div className="graph-box">
            <h3>Reports Analysis (graph)</h3>
            <div className="graph-placeholder"></div>
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
