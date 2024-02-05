import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from '../components/Table/DevicesTable';

const Devices = () => {

  const data = [
    { id: 1, status: 'Active', deviceType: 'Mobile', deviceName: 'Phone 1', dateIssued: '2024-02-04', onTimePasscode: '123456' },
    // Add more data as needed
  ];

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          {/* Sidebar component */}
          <Sidebar />
        </Col>
       <Col md={1}></Col>
       
        <Col md={9}>
          <Container fluid>
            <Row>
              <Col>
                {/* Navbar component */}
                <Navbar />
              </Col>
            </Row>
            <Row className='mt-4'>
              <Col>
              <DataTable data={data} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Devices;
