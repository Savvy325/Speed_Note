import React, { useState } from 'react';
import './logsessionnote.css';
import ReviewNote from '../ReviewNotePanel/ReviewNote';

interface LogSessionNoteProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const LogSessionNote: React.FC<LogSessionNoteProps> = ({ isOpen, onClose }) => {
    const [isReviewNoteOpen, setReviewNoteOpen] = useState(false);
  
    const handleProcessSessionNotes = () => {
      setReviewNoteOpen(true);
      onClose();
    };
  
    const handleCloseReviewNote = () => {
      setReviewNoteOpen(false);
    };
  
    if (!isOpen && !isReviewNoteOpen) return null;
  
    return (
      <>
        {isOpen && (
          <div className="log-session-note-overlay">
            <div className="log-session-note-content">
              <div className="header">
                <h2>Create New Progress Note</h2>
                <p>Generate a progress note by logging the notes taken during Sophia Clark's session.</p>
              </div>
              <div className="content">
                <textarea placeholder="Enter session notes here..." style={{ width: '100%', height: '300px', padding: '10px', borderRadius: '10px', border: '1px solid #ddd' }}></textarea>
              </div>
              <div className="footer">
                <button className="close-button" onClick={onClose}>Close</button>
                <button className="process-button" onClick={handleProcessSessionNotes}>Process Session Notes</button>
              </div>
            </div>
          </div>
        )}
        <ReviewNote isOpen={isReviewNoteOpen} onClose={handleCloseReviewNote} />
      </>
    );
  };
  
  export default LogSessionNote;