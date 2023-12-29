import React, { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 500); // Auto close after 5 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="notification">
      <div className="notification-content">
        <p className='notification-content'>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
