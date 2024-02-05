import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import './Sidebar.css';
import './sidebar2.css';

const Sidebar = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const activeRoute = (routeName) =>
    window.location.pathname.indexOf(routeName) > -1 ? "active" : "";

  const toggleCollapse = () => setCollapseOpen((data) => !data);

  return (
    <Navbar
      className="navbar-vertical fixed-left "
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        <div className="d-flex align-items-center ">
         
          <NavbarBrand className="pt-0" to="/">
            <img alt="..." src={require("../../assets/logo.png")} />
          </NavbarBrand>
          <h5 className="navbar-header-text ml-2 mb-3">GREEN<strong>PEOPLE</strong></h5>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
        <Collapse navbar isOpen={collapseOpen} className={collapseOpen ? "expanded" : "collapsed"}>
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img alt="..." src={require("../../assets/logo.png")} />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>

          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Documentation</h6>

          <Nav className="nav-link mb-md-3" navbar>
            {[
              { href: "#", icon: require("../../assets/icons/dashboard.png"), text: "Getting started" },
              { href: "#", icon: require("../../assets/icons/receipt_long.png"), text: "Foundation" },
              { href: "#", icon: require("../../assets/icons/armor_icon.png"), text: "Components" },
            ].map((item, index) => (
              <NavItem key={index}>
                <NavLink href={item.href} >
                  <img src={item.icon} alt={`icon-${index}`} className="mr-2" />
                  {item.text}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.propTypes = {
  // Add your prop types here
};

export default Sidebar;
