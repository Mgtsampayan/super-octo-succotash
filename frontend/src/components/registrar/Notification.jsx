import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../../services/notificationService';
import './Registrar.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the server
    fetchNotifications('registrar').then(setNotifications);
  }, []);

  return (
    <div className="notification">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
