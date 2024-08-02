import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TodoList from '../TodoList/TodoList';
import UpcomingSessions from '../../UpcomingSessions/UpcomingSessions';
import './dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <div className="dashboard-header">
                    <h1>My Dashboard</h1>
                    <div className="header-buttons">
                        <button className="new-patient-btn">New Patient</button>
                        <button className="new-appointment-btn">New Appointment</button>
                    </div>
                </div>
                <div className="content">
                    <TodoList />
                    <UpcomingSessions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;