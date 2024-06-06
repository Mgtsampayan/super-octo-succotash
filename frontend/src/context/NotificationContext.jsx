import React, { createContext, useState, useEffect } from 'react';
import fetchNotifications, { getNotifications, markAsRead } from '../services/notificationService';

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

  // You can use getNotifications and markAsRead here as needed

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
