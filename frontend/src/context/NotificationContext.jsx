import React, { createContext, useState, useEffect } from 'react';
import { fetchNotifications } from '../services/notificationService';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const notificationsData = await fetchNotifications();
      setNotifications(notificationsData);
    };
    loadNotifications();
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
