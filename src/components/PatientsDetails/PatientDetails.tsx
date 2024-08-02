import React from 'react';
import './patientdetails.css';
import sophiaClarkImage from '../../images/image-1.png';
import progressNoteThumbnail from '../../images/progress-note-preview-1.png';

interface PatientDetailsProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const PatientDetails: React.FC<PatientDetailsProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    const notesToShow = Array(3).fill(null);
  
    return (
      <div className="patient-details-overlay">
        <div className="patient-details-content">
          <div className="header">
            <h1>Patient Details</h1>
            <button className="close-button" onClick={onClose}>X</button>
          </div>
          <div className="content">
            <div className="left-panel">
              <img src={sophiaClarkImage} alt="Sophia Clark" className="patient-image" />
              <h2>Sophia Clark</h2>
              <div className="details-box">
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Age:</strong> 12 Years Old</p>
                <p><strong>Birth Date:</strong> June 10, 2010</p>
                <p><strong>ICD-10 Code:</strong> F43.21</p>
                <p><strong>CPT Code:</strong> 90837</p>
                <p><strong>Phone Number:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> sophiaclark@anemailaddress.com</p>
                <p><strong>Home Address:</strong> 123 Rainbow Lane, 78910, Sparkleville, Fairyland</p>
              </div>
              <button className="see-more-info">See More Information</button>
            </div>
            <div className="right-panel">
              <h2>Progress Notes</h2>
              <div className="notes-list">
                {notesToShow.map((_, index) => (
                  <div key={index} className="note-item">
                    <img src={progressNoteThumbnail} alt="Progress Note" className="note-thumbnail" />
                    <div className="note-details">
                      <p><strong>Title:</strong> Sophia Clark - Progress Note</p>
                      <p><strong>Date:</strong> July 24, 2024</p>
                      <p><strong>Time:</strong> 4:15pm</p>
                      <p><strong>Status:</strong> Currently Being Processed</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="overview-button">Patient Overview</button>
            <button className="documents-button">Patient Documents</button>
            <button className="create-document-button">Create New Document</button>
            <button className="close-footer-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PatientDetails;