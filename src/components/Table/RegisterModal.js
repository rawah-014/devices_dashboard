// RegisterModal.js

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./RegisterModal.css"; // You may want to style your modal
import { Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import "../../App.css";

const RegisterModal = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: "",
    deviceName: "",
    serialNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeviceInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleCreateKeyPairs = () => {
    // Implement your logic for creating key pairs
    // You may want to send the deviceInfo to your backend/API
    // Reset the modal state or close the modal as needed
    console.log("Creating key pairs with:", deviceInfo);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Row className="p-4" style={{ backgroundColor: 'rgba(250, 250, 253, 1)' }}>
        <Row>
          <Modal.Header closeButton>
            <Modal.Title className="header">Register new device</Modal.Title>
          </Modal.Header>
        </Row>
        <p className="input-text">
              We will sent a verification code to the email address.
            </p>
        <Row>
          <Modal.Body>
            
            <div className="step-names">
              <span className={currentStep === 1 ? "active input-text" : "input-text"}>
                1.Device Details <IoIosArrowForward />
              </span>
              <span className={currentStep === 2 ? "active input-text" : "input-text"}>
                2.Generate Key Pairs <IoIosArrowForward />
              </span>
              <span className={currentStep === 3 ? "active input-text" : "input-text"}>
                3.Download Ket Pairs <IoIosArrowForward />
              </span>
            </div>
            {currentStep === 1 && (
              <Form>
                <Row>
                  <Row className="mt-4">
                    <Col>
                      <Form.Group controlId="deviceType">
                        <Form.Label className="input-text">
                          Device Type
                        </Form.Label>
                        <Form.Control
                          as="select"
                          name="deviceType"
                          value={deviceInfo.deviceType}
                          onChange={handleInputChange}
                        >
                          <option value="" className="input-text">Device Type</option>
              <option value="Mobile" className="input-text">Mobile</option>
              <option value="Laptop" className="input-text">Laptop</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="deviceName">
                        <Form.Label className="input-text">
                          Device Name
                        </Form.Label>
                        <Form.Control
                        placeholder="Enter Device Name "
                          className="input-text"
                          type="text"
                          name="deviceName"
                          value={deviceInfo.deviceName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-4">
                      <Form.Group controlId="serialNumber">
                        <Form.Label className="input-text">
                          Serial Number
                        </Form.Label>
                        <Form.Control
                          className="input-text"
                          placeholder="Enter Serial Number"
                          type="text"
                          name="serialNumber"
                          value={deviceInfo.serialNumber}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
              </Form>
            )}
            {/* Add other steps similar to Step 1 */}
          </Modal.Body>
        </Row>
        <Row>
          <Modal.Footer>
            <Button
              variant="outline-danger" size="sm" className=" me-1"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              Cancel
            </Button>
            {currentStep < 3 ? (
              <Button className="sc-button" size="sm" onClick={handleNextStep}>
                Create Key Pairs
              </Button>
            ) : (
              <Button className="sc-button" size="sm" onClick={handleCreateKeyPairs}>
                Submin
              </Button>
            )}
          </Modal.Footer>
        </Row>
      </Row>
    </Modal>
  );
};

export default RegisterModal;
