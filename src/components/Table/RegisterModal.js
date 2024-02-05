// RegisterModal.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './RegisterModal.css'; // You may want to style your modal

const RegisterModal = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: '',
    deviceName: '',
    serialNumber: '',
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
    console.log('Creating key pairs with:', deviceInfo);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register new device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enter information to register a new device:</p>
        <div className="step-names">
          <span className={currentStep === 1 ? 'active' : ''}>Step 1</span>
          <span className={currentStep === 2 ? 'active' : ''}>Step 2</span>
          <span className={currentStep === 3 ? 'active' : ''}>Step 3</span>
        </div>
        {currentStep === 1 && (
          <Form>
            <Form.Group controlId="deviceType">
              <Form.Label>Device Type</Form.Label>
              <Form.Control
                as="select"
                name="deviceType"
                value={deviceInfo.deviceType}
                onChange={handleInputChange}
              >
                {/* Add your device type options here */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="deviceName">
              <Form.Label>Device Name</Form.Label>
              <Form.Control
                type="text"
                name="deviceName"
                value={deviceInfo.deviceName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="serialNumber">
              <Form.Label>Serial Number</Form.Label>
              <Form.Control
                type="text"
                name="serialNumber"
                value={deviceInfo.serialNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        )}
        {/* Add other steps similar to Step 1 */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handlePrevStep} disabled={currentStep === 1}>
          Previous
        </Button>
        {currentStep < 3 ? (
          <Button variant="primary" onClick={handleNextStep}>
            Next
          </Button>
        ) : (
          <Button variant="success" onClick={handleCreateKeyPairs}>
            Create Key Pairs
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
