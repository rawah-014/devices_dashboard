import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const UserButton = ({ userName, userImage }) => {
  return (
    <Dropdown className=''>
        
      <Dropdown.Toggle  variant="white" className="pl-0 pt-0 pb-0 bg-white" size="sm">  
        <img src={userImage} alt="User Image" className="p-0 m-0 user-image" sizes='sm'  /> 
       <span className='m-2'>{userName}</span> 
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ width: '100%' }} className="dropdown-menu">
        <Dropdown.Item as={Link} to="/profile" className="input-text">Profile</Dropdown.Item>
        <Dropdown.Item as={Link} to="/settings" className="input-text">Settings</Dropdown.Item>
        <Dropdown.Item as={Link} to="/logout" className="input-text">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserButton;
