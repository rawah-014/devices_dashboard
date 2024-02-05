import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";
import './Navbar.css';

const NotificationButton = () => {
  const [notificationOptions, setNotificationOptions] = useState([
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ]);
  const [notificationCount, setNotificationCount] = useState(
    notificationOptions.length
  );
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const handleNotificationClick = () => {
    // Handle notification click, e.g., toggle dropdown visibility
    setShowNotificationDropdown(!showNotificationDropdown);

    // For demonstration, let's decrement the notification count on click
    setNotificationCount(notificationCount - 1);
  };

  const handleNotificationToggle = (isOpen) => {
    // Handle notification dropdown toggle
    setShowNotificationDropdown(isOpen);
  };

  const handleNotificationHide = () => {
    // Handle notification dropdown hide (if needed)
  };

  return (
    <Dropdown className="ml-3 " 
      show={showNotificationDropdown}
      onToggle={handleNotificationToggle}
      onHide={handleNotificationHide}
    >
      <Dropdown.Toggle size="sm"
        variant="white"
        className="white-button bg-white"
        onClick={handleNotificationClick}
      >
        <IoMdNotifications size="1.1em" />
        {notificationCount > 0 && (
          <div className=" position-absolute  text-white pe-1 ps-1 counter">{notificationCount}</div>
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ width: "100%" }} className="dropdown-menu">
        {notificationOptions.map((option) => (
          <Dropdown.Item key={option.value} href={`#/action-${option.value}`} className="input-text">
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationButton;
