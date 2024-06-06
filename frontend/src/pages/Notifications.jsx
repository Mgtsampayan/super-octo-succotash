import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';

const Notifications = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications for the logged-in user
    if (user) {
      axios.get(`/api/notifications/${user.studentcode}`)
        .then(response => setNotifications(response.data))
        .catch(error => console.error(error));
    }
  }, [user]);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.notification_id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
