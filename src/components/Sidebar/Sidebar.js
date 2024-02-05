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

import "./Sidebar.css";

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
          <h6 className="navbar-header-text ml-2 mb-3">
            GREEN<strong>PEOPLE</strong>
          </h6>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Collapse
          navbar
          isOpen={collapseOpen}
          className={collapseOpen ? "expanded" : "collapsed"}
        >
          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img alt="..." src={require("../../assets/logo.png")} />
                </Link>
                <h6 className="navbar-header-text ml-2 mb-3">
                  GREEN<strong>PEOPLE</strong>
                </h6>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                ></button>
              </Col>
            </Row>
          </div>

          
          {/* <h6 className="navbar-heading text-muted">Documentation</h6>
           */}
          <Nav className="nav-link mb-md-3" navbar>
          <NavItem>
              <NavLink href="#" className="small nav-link bg-white p-3 w-100 m-0">
                <img
                  src={require("../../assets/icons/Tech_Logo.png")}
                  alt="icon-0"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
              
                  <strong>TECH</strong>LOGO
                
              </NavLink>
            </NavItem>
            <hr className="mt-0" />
            <NavItem>
              <NavLink href="#" className="small nav-link">
                <img
                  src={require("../../assets/icons/dashboard.png")}
                  alt="icon-0"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="small nav-link">
                <img
                  src={require("../../assets/icons/receipt_long.png")}
                  alt="icon-1"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
                Invoices
              </NavLink>
            </NavItem>
            <hr className="my-3" />
            <NavItem>
              <NavLink href="#" className="small nav-link pr-button">
                <img
                  src={require("../../assets/icons/armor_icon.png")}
                  alt="icon-2"
                  className="me-2 img-fluid "
                  style={{ width: "20px", height: "20px" }}
                />
                Management
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="small nav-link sc-button">
                Devices
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="small nav-link">
                Users & Roles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="small nav-link">
                <img
                  src={require("../../assets/icons/shopping_bag.png")}
                  alt="icon-2"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
                Billing
              </NavLink>
            </NavItem>
            {/*  <NavItem>
              <NavLink href="#" className="small nav-link">
                <img
                  src={require("../../assets/icons/construction.png")}
                  alt="icon-2"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
                Tools
              </NavLink>
            </NavItem> */}
            <hr className="mb-0" />
            <NavItem>
              <NavLink href="#" className="small nav-link">
                <img
                  src={require("../../assets/icons/waving_hand.png")}
                  alt="icon-2"
                  className="me-2 img-fluid"
                  style={{ width: "20px", height: "20px" }}
                />
                Help Center
              </NavLink>
            </NavItem>
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
