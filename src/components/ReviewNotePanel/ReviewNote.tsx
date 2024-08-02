import React, { useState } from 'react';
import './reviewnote.css';
import PatientDetails from '../PatientsDetails/PatientDetails';

interface ReviewNoteProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewNote: React.FC<ReviewNoteProps> = ({ isOpen, onClose }) => {
  const [isPatientDetailsOpen, setPatientDetailsOpen] = useState(false);

  const handleOpenPatientDetails = () => {
    setPatientDetailsOpen(true);
  };

  const handleClosePatientDetails = () => {
    setPatientDetailsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="review-note-overlay">
        <div className="review-note-content">
          <div className="header">
            <h1>Sophia Clark - Progress Note for July 24th, 2024</h1>
            <button className="send-to-insurance" onClick={handleOpenPatientDetails}>Send To Insurance</button>
          </div>
          <div className="note-content">
            <div className="left-panel">
              <h2>Logged Session Notes</h2>
              <div className="session-notes">
                <p>Sophia Clark, 14<br />July 24, 2024</p>
                <p>
                  Sophia is struggling deeply with her father's recent death due to a drunk driver. 
                  She arrived visibly distressed, her eyes red and teary, expressing a mix of sadness, 
                  confusion, and anger. Throughout the session, she shared heartfelt memories of her dad, 
                  speaking with deep sorrow about his absence.
                </p>
                <p>
                  Sophia feels an overwhelming sense of guilt, believing she could have prevented the 
                  accident if she hadn't visited her best friend after school that day. She tearfully 
                  explained that if she hadn't gone, her dad wouldn't have needed to pick her up.
                </p>
                <p>
                  At school, Sophia is having a hard time concentrating, and she's been avoiding social 
                  activities and withdrawing from her friends. Her mother, while supportive, is also grieving, 
                  which makes it difficult for them to comfort each other. Sophia is also very concerned 
                  for her younger sibling, who seems to be coping differently, adding to her stress.
                </p>
                <p>
                  As we talked, it became clear that Sophia is showing signs of complicated grief and 
                  potential depression. Her social withdrawal and difficulty in managing her emotions 
                  are concerning.
                </p>
                <p>
                  I provided a safe space for Sophia to express her feelings, which she did openly. 
                  This emotional release is crucial for her healing process. I explained the stages 
                  of grief to her, hoping to reassure her that what she's experiencing is normal. 
                  While she seemed somewhat comforted, it's evident she's still in the early stages of her grief.
                </p>
              </div>
            </div>
            <div className="right-panel">
              <h2>Completed Progress Note</h2>
              <div className="details-box">
                <h3>Patient Details</h3>
                <div className="box-content">
                  <p>Date: Thursday July 24, 2024 at 4:15pm</p>
                  <p>Duration: 1 Hour</p>
                  <p>Service Type: Individual Therapy</p>
                  <p>Service Fee: $150.00</p>
                  <p>Patient First Name: Sophia</p>
                  <p>Patient Last Name: Clark</p>
                  <p>Patient Date of Birth: June 10, 2010</p>
                  <p>Patient Insurance Policy Number: 123 456 789</p>
                  <p>ICD-10 Code: F43.21</p>
                  <p>CPT Codes: 90837</p>
                </div>
              </div>
              <div className="details-box">
                <h3>Therapist Details</h3>
                <div className="box-content">
                  <p>Therapist Title: LCSW</p>
                  <p>Therapist First Name: Jane</p>
                  <p>Therapist Last Name: Doe</p>
                  <p>Therapist National Identifier (NPI): 987 654 321</p>
                  <p>Therapist Tax Identifier (TIN): 123 456 789</p>
                  <p>Therapist Phone Number: (123) 123-4567</p>
                  <p>Therapist Email Address: jaendoe@therapyexample.com</p>
                </div>
              </div>
              <div className="details-box">
                <h3>Summary of Session</h3>
                <div className="box-content">
                  <p>Sophia is struggling deeply with her father's recent death due to a drunk driver...</p>
                </div>
              </div>
              <div className="details-box">
                <h3>Therapeutic Intervention</h3>
                <div className="box-content">
                  <p>Provided a safe space for Sophia to express her feelings...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="close-button" onClick={onClose}>Close</button>
            <button className="save-changes">Save Changes</button>
          </div>
        </div>
      </div>
      <PatientDetails isOpen={isPatientDetailsOpen} onClose={handleClosePatientDetails} />
    </>
  );
};

export default ReviewNote;