import React from 'react';
import { FaTrash, FaUser, FaBell, FaHome, FaSearch, FaLaptop, FaCalendar, FaCalendarCheck, FaCheckCircle, FaTruck, FaBook, FaUserAlt } from 'react-icons/fa';
import './UserDash.css';
import { FaFileCircleCheck, FaHouseMedical, FaNoteSticky } from 'react-icons/fa6';
import { FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { BsTruck } from 'react-icons/bs';
import { BiLineChart } from 'react-icons/bi';

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
                        <BiLineChart color='white' size={30}/>
                        <span>Waste Report</span>
                    </div>
                    <div className="nav-container">
                        <FaTruck color='white' size={30}/>
                        <span>Schedule Pickup</span>
                    </div>
                    <div className="nav-container">
                        <FaBook color='white' size={30}/>
                        <span>Education</span>
                    </div>
                    <div className="nav-container">
                        <FaUserAlt color='white' size={30}/>
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
                        <div className="inner-box">
                            <FaFileCircleCheck size={24}/>
                        </div>
                        <div className="box-details">
                            <small>Total Reports</small>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box">
                            <FaCalendarCheck size={25}/>
                        </div>
                        <div className="box-details">
                            <small>pending Reports</small>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner-box">
                            <FaCheckCircle size={24}/>
                        </div>
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
                            <div className="sinner-box">
                                <div className="inner-box-left-detail">
                                <div className="icon-box">
                                    <FaTrash size={24}/>

                                </div>
                                <div className="sinner-box-details">
                                    <small>Plastic Waste</small>
                                    <span>End of Tar</span>

                                </div>
                                </div>
                                <div className="inner-box-right-detail">
                                    <div className="status-box">
                                        <small>Pending</small>

                                    </div>
                                </div>
                         


                            </div>
                            <div className="sinner-box">
                                <div className="inner-box-left-detail">
                                <div className="icon-box">
                                    <FaLaptop size={24}/>

                                </div>
                                <div className="sinner-box-details">
                                    <small>Electronic waste</small>
                                    <span>End of Tar</span>

                                </div>
                                </div>
                                <div className="inner-box-right-detail">
                                    <div id='progress' className="status-box">
                                        <small>In progress</small>

                                    </div>
                                </div>
                         


                            </div>


                            
                        </div>
                        <div className="sbox">
                            <h1>Upcoming Pickup</h1>
                            <div className="sinner-box">
                                <div className="inner-box-left-detail">
                                <div className="icon-box">
                                    <FaCalendar size={24}/>

                                </div>
                                <div className="sinner-box-details">
                                    <small>General waste</small>
                                    <span>Tomorrow, 10:00 am</span>

                                </div>
                                </div>
                                <div className="inner-box-right-detail">
                                    <div className="status-box">
                                        <small>Pending</small>

                                    </div>
                                </div>
                         


                            </div>
                            <div className="sinner-box">
                                <div className="inner-box-left-detail">
                                <div className="icon-box">
                                    <FaCalendar size={24}/>

                                </div>
                                <div className="sinner-box-details">
                                    <small>Recyclables</small>
                                    <span>Next week, 2:00pm</span>

                                </div>
                                </div>
                                <div className="inner-box-right-detail">
                                    <div id='progress' className="status-box">
                                        <small>In progress</small>

                                    </div>
                                </div>
                         


                            </div>


                            
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