import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "./Table.css";
import "../../App.css";
import { FaDownload } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import RegisterModal from "./RegisterModal";
import { Row, Col, Button , Form ,Dropdown } from "react-bootstrap";

const headerClasses = "font-design-header";
  const dataClasses = "font-design-data";

  const customOptionsFormatter = (cell, row) => (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" size="sm" id={`options-dropdown-${row.id}`}>
        Options
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item /* onClick={() => handleEdit(row)} */>Edit</Dropdown.Item>
        <Dropdown.Item /* onClick={() => handleDelete(row.id)} */>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

const getStatusClass = (status) => {
  switch (status) {
    case "Revoked":
      return "bg-danger p-1 text-sm status-data";
    case "Completed":
      return "bg-success p-1 text-sm status-data";
    case "Expired":
      return "bg-secondary p-1 text-sm status-data";
    case "Pending":
      return "bg-warning p-1 text-sm status-data";
    case "Active":
      return "bg-primary p-1 text-sm status-data";
    default:
      return "bg-light text-dark rounded p-1"; // Default style
  }
};
const customStatusFormatter = (cell, row) => (
  <span className={getStatusClass(row.status)}>
    {cell}
  </span>
);

const columns = [
  {
    dataField: "id",
    text: "SI.No",
    sort: true,
    headerClasses,
    classes: dataClasses,
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    headerClasses,
    formatter: customStatusFormatter,
  },
  {
    dataField: "deviceType",
    text: "Device Type",
    sort: true,
    headerClasses,
                classes: dataClasses,
  },
  {
    dataField: "deviceName",
    text: "Device Name",
    sort: true,
    headerClasses,
                classes: dataClasses,
  },
  {
    dataField: "dateIssued",
    text: "Date Issued",
    sort: true,
    headerClasses,
                classes: dataClasses,
  },
  {
    dataField: "onTimePasscode",
    text: "On Time Passcode",
    sort: true,
    headerClasses,
                classes: dataClasses,
  },
  {
    dataField: "options",
    text: "", // Empty string for no column header
    headerClasses: "d-none", // Hide the column header
    formatter: customOptionsFormatter,
  },
];

const customSortCaret = (order, column) => {
  if (!order) return <FaSort className="custom-sort-caret"/>; // Default sorting indicator
  else if (order === "asc")
    return (
      <span className="custom-sort-caret">
        <FaSortUp />
      </span>
    ); // Ascending sorting indicator
  else if (order === "desc")
    return (
      <span className="custom-sort-caret">
        <FaSortDown />
      </span>
    ); // Descending sorting indicator
};

const DataTable = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      status: "Pending",
      deviceType: "Laptop",
      deviceName: "Laptop",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 2,
      status: "Active",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 3,
      status: "Revoked",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 4,
      status: "Active",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 5,
      status: "Pending",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 6,
      status: "Completed",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 7,
      status: "Expired",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 8,
      status: "Completed",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 9,
      status: "Revoked",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 10,
      status: "Expired",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
    {
      id: 11,
      status: "Pending",
      deviceType: "Mobile",
      deviceName: "iPhone",
      dateIssued: "2024-02-04",
      onTimePasscode: "123456",
    },
  ]);
 
  
  const [searchCriteria, setSearchCriteria] = useState({
    deviceType: "",
    deviceName: "",
    dateIssued: "",
  });

  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      const deviceTypeMatch =
        !searchCriteria.deviceType ||
        item.deviceType === searchCriteria.deviceType;
      const deviceNameMatch =
        !searchCriteria.deviceName ||
        item.deviceName.includes(searchCriteria.deviceName);
      const dateIssuedMatch =
        !searchCriteria.dateIssued ||
        item.dateIssued === searchCriteria.dateIssued;

      return deviceTypeMatch && deviceNameMatch && dateIssuedMatch;
    });

    // Update the table data with the filtered results
    setData(filteredData);
  };



  return (
    <div>
         <Form>
      <Row className="bg-white m-2 p-2">
       
        <Col md={8} className="m-0">
            <Row >
         
            <Col md={3} className="m-0">
            <Form.Select className="input-text "
              value={searchCriteria.deviceType}
              onChange={(e) =>
                setSearchCriteria({
                  ...searchCriteria,
                  deviceType: e.target.value,
                })
              }
            >
              <option value="">Device Type</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
            </Form.Select>
            </Col>
            <Col md={4} className="m-0">
            <Form.Control  className="input-style input-text"
              placeholder="Device Name"
              type="text"
              value={searchCriteria.deviceName}
              onChange={(e) =>
                setSearchCriteria({
                  ...searchCriteria,
                  deviceName: e.target.value,
                })
              }
            />
            </Col>
            <Col md={3} className="me-0 ms-0">
            <Form.Control  className="input-style input-text m-0"
              placeholder="Issued Date"
              type="date"
              value={searchCriteria.dateIssued}
              onChange={(e) =>
                setSearchCriteria({
                  ...searchCriteria,
                  dateIssued: e.target.value,
                })
              }
            />
            </Col>
            <Col md={2}>
            <Button onClick={handleSearch} variant="outline-dark" size="sm" >Search</Button>
              </Col>
          </Row>
        </Col>
     
        <Col md={4}>
          <div>
            <Button onClick={handleSearch} variant="outline-primary" size="sm" className="pr-button me-1">
              <FaDownload /> Export
            </Button>
            <Button variant="outline-primary" size="sm" className="pr-button me-1">
              <FaPrint /> Print
            </Button>
            <Button onClick={() => setShowRegisterModal(true)}  className="sc-button" size="sm">
              + Register Device
            </Button>
          </div>
        </Col>
      </Row>
      </Form>

      <Row >
        <Col className="bg-white p-4">
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            pagination={{
              ...paginationFactory(),
              classes: "pagination-button", // Apply the custom class to pagination buttons
            }}
            sort={{ caretRenderer: customSortCaret }}
            striped
            bordered={false}
            hover={true}
          />
        </Col>
      </Row>

      {/* Register Modal */}
      <RegisterModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      />
    </div>
  );
};

export default DataTable;
