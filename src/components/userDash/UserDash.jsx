import React from 'react';
import { FaTrash, FaUser, FaBell, FaHome, FaSearch } from 'react-icons/fa';
import './UserDash.css';
import { FaHouseMedical } from 'react-icons/fa6';
import { FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';

const UserDashboard = () => {
    return (
        <div className="ud-container">
            <div className="ud-sidebar">
                <div className="ud-sidebar-content">
                <div className="title">
                  <h1>WASTE MANAGEMENT</h1>
                </div>
                <div className="ud-sidebar-nav">
                    <div id='active' className="nav-container">
                        <FaHome color='white' size={30}/>
                        <span>Dashboard</span>
                    </div>
                    <div className="nav-container">
                        <FaHome color='white' size={30}/>
                        <span>Waste Report</span>
                    </div>
                    <div className="nav-container">
                        <FaHome color='white' size={30}/>
                        <span>Schedule Pickup</span>
                    </div>
                    <div className="nav-container">
                        <FaHome color='white' size={30}/>
                        <span>Education</span>
                    </div>
                    <div className="nav-container">
                        <FaHome color='white' size={30}/>
                        <span>Profile</span>
                    </div>
                </div>
                
                </div>
               
            </div>
            <div className="ud-main-content">
            <div className="ud-top-content">
                <div className="search">
                    <input className='search-box' type="text" placeholder=' search' />
                </div>
                <div className="left-content">
                    <FaBell size={24} color='white'/>
                    <FaUser size={24} color='white'/>
                    <span>User</span>
                </div>
            </div>
            <div className="ud-bottom-content">
                <div className="udb-content">
                <div className="boxes">
                    <div className="box">
                        <div className="inner-box"></div>
                        <div className="box-details">
                            <small>Total Reports</small>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box"></div>
                        <div className="box-details">
                            <small>pending Reports</small>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box"></div>
                        <div className="box-details">
                            <small>Completed Pickups</small>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className="second-boxes">
                    <div className="sboxes">
                        <div className="sbox">
                            <h1>Recent Reports</h1>

                            .
                        </div>
                    </div>
                </div>
                </div>
       

            </div>

            </div>
      
            
            
        </div>
    );
};

export default UserDashboard;