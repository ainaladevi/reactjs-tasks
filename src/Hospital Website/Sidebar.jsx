import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import vector from "./Vector.png";
import taskimg from "./task.png";
import admin from "./admin.png";
import medicareicon from "./mediicon.png";
import wrong from "./wrong.png";
import { CiLogin } from "react-icons/ci";
import NursingDashboard1 from "./NursingDashboard1";
import BedManagement from "./BedManagement";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
            <div className="position-fixed">
              <div className="list-group list-group-flush mx-3 mt-4">
                <div className="header container">
                              <div className="header-content">
                                    <img src={medicareicon} className="medi-icon"></img>
                                    <div className="medicare-data">MediCare HIS</div>
                                  </div>
                                  <div>
                                    <img
                                      src={wrong}
                                      className="wrong-content"
                                      width="20px"
                                      height="20px"
                                    ></img>
                                  </div>
                                </div>
        
            <div className="dashboard-item">
            <Link
              to="/"
              className="text-decoration-none py-2"
              aria-current="true"
            >
              <span className="dashboard">
                <RiDashboardLine size={20} />
                &nbsp; Dashboard
              </span>
            </Link></div>
            <Link
              to="/BedManagement"
              class="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="bed-management">
                <MdOutlineBed size={20} />
                &nbsp;Bed Management
              </span>
            </Link>
            <a
              href="/Patientcarepage"
              className="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="patient">
                <RxPeople size={20} />
                &nbsp; Patient Care
              </span>
            </a>
            <a
              href="#"
              className="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="vital">
                <img src={vector} width={20} height={20}></img>&nbsp; Vitals
                Monitoring
              </span>
            </a>
            <a
              href="#"
              className="sidebar-items text-decoration-none text-secondary py-3"
            >
              <span className="task">
                <img src={taskimg} width={20} height={20}></img>&nbsp; Tasks
                &amp; HandOver
              </span>
            </a>
          </div>
        </div>
      </nav>
        <div className="sidebar-footer position-fixed">
          <div className="footer-admin">
            <img src={admin} />
            <div>
                <p className="admin-name">Jennifer Thompson</p>
                <p className="admin-occ">nurse</p>
            </div>
          </div>
          <div className="login-btn">
             <CiLogin className="login-icon"/>
             <span className="logout-btn">Logout</span>
          </div>
        </div>
    </header>
  );
};

export default Sidebar;
