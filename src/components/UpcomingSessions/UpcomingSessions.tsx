import React from 'react';
import SessionItem from './SessionItem';
import './upcomingsessions.css';

// Import images
import image1 from '../../images/image.png';
import image2 from '../../images/image-10.png';
import image3 from '../../images/image-12.png';
import image4 from '../../images/image-13.png';
import image5 from '../../images/image-14.png';
import image6 from '../../images/image-11.png';
import image7 from '../../images/image-15.png';
import image8 from '../../images/image-9.png';

const sessionData = [
  { id: 1, time: '10:00am - 10:30am', patientName: 'Lucas Bennett', status: 'Checked In', imageUrl: image1 },
  { id: 2, time: '10:45am - 11:15am', patientName: 'Isabella Lewis', status: 'Checked In', imageUrl: image2 },
  { id: 3, time: '11:30am - 12:00pm', patientName: 'Olivia Martine', status: 'Checked In', imageUrl: image3 },
  { id: 4, time: '1:00pm - 1:30pm', patientName: 'Oliver Hayes', status: 'Late', imageUrl: image4 },
  { id: 5, time: '1:45pm - 2:15pm', patientName: 'Harper Adams', status: 'Check In', imageUrl: image5 },
  { id: 6, time: '2:30pm - 3:00pm', patientName: 'Mason Brooks', status: 'Check In', imageUrl: image6 },
  { id: 7, time: '3:15pm - 4:00pm', patientName: 'Mia Walker', status: 'Check In', imageUrl: image7 },
  { id: 8, time: '4:15pm - 4:45pm', patientName: 'Ethan Parker', status: 'Check In', imageUrl: image8 }
];

const UpcomingSessions: React.FC = () => {
  return (
    <div className="upcoming-sessions">
      <h2>Upcoming Sessions</h2>
      {sessionData.map(session => (
        <SessionItem key={session.id} time={session.time} patientName={session.patientName} status={session.status} imageUrl={session.imageUrl} />
      ))}
    </div>
  );
};

export default UpcomingSessions;