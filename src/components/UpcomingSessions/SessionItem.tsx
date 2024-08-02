import React, { useState } from 'react';
import './upcomingsessions.css';

interface SessionItemProps {
  time: string;
  patientName: string;
  status: string;
  imageUrl: string;
}

const SessionItem: React.FC<SessionItemProps> = ({ time, patientName, status, imageUrl }) => {
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleButtonClick = () => {
    if (currentStatus === 'Late' || currentStatus === 'Check In') {
      setCurrentStatus('Checked In');
    }
  };

  const statusClass = currentStatus === 'Late' ? 'status-late' : (currentStatus === 'Checked In' ? 'status-checked-in' : 'status-normal');

  return (
    <div className="session-item">
      <img src={imageUrl} alt="Patient" className="patient-image" />
      <div className="session-info">
        <p className="session-time">{time}</p>
        <p className="patient-name">{patientName}</p>
      </div>
      <button className={`status-button ${statusClass}`} onClick={handleButtonClick}>
        {currentStatus}
      </button>
    </div>
  );
};

export default SessionItem;