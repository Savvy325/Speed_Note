import React from 'react';
import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
        <div className="side-bar-2"></div>
      <div className="logo">Speed Note</div>
      <nav>
        <ul>
          <li>
            <div className="dashboard-logo"></div>
            <span className="dashboard-label">Dashboard</span>
          </li>
          <li>
          <div className="patient-logo"></div>
            Patient Directory
          </li>
          <li>
          <div className="schedule-logo"></div>
            Schedule
            </li>
          <li>
          <div className="settings-logo"></div>
            Settings
            </li>
        </ul>
      </nav>
      <button className="logout-button">Log Out</button>
    </div>
  );
};

export default Sidebar;