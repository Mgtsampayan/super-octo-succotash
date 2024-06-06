export const getUnreadNotificationsCount = (notifications) => {
    return notifications.filter(notification => !notification.read).length;
  };
  