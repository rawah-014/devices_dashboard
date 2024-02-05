import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";
import cogIcon from "../../assets/icons/armor_icon.png";
import NotificationButton from "./NotificationButton";
import LanguageDropdown from "./LnaguageDropdown";
import UserButton from "./User";
import "./Navbar.css";

const Navbar = () => {
  const [userName, setUserName] = useState("John Doe");
  const userImage = require("../../assets/user-image.png");
  return (
    <BootstrapNavbar>
      <Container fluid>
        <Row className="w-100">
          <Col className="d-flex align-items-center">
            <img src={cogIcon} alt="Cog Icon" className="mr-2" />
            <div>
              <span className="header">Management-</span>
              <span className="sub-header">Device List</span>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            {/* Language dropdown */}
            <div className="me-3">
              <LanguageDropdown />
            </div>

            {/* Notification button */}
            <div className="me-2">
              <NotificationButton />
            </div>

            {/* User button */}
            <div>
              <UserButton userName={userName} userImage={userImage} />
            </div>
          </Col>
        </Row>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
