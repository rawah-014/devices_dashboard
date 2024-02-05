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
import { Row, Col, Button , Form } from "react-bootstrap";

const columns = [
  {
    dataField: "id",
    text: "SI.No",
    sort: true,
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
  },
  {
    dataField: "deviceType",
    text: "Device Type",
    sort: true,
  },
  {
    dataField: "deviceName",
    text: "Device Name",
    sort: true,
  },
  {
    dataField: "dateIssued",
    text: "Date Issued",
    sort: true,
  },
  {
    dataField: "onTimePasscode",
    text: "On Time Passcode",
    sort: true,
  },
];

const customSortCaret = (order, column) => {
  if (!order) return <FaSort />; // Default sorting indicator
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
      status: "Active",
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

  //table style 
  const rowStyle = (row, rowIndex) => {
    // Apply background color to every second row
    if (rowIndex % 2 === 1) {
      return { backgroundColor: "rgba(250, 250, 253, 1)" };
    }
    return {};
  };
  const headerStyle = () => {
    // Apply font styles to column names
    return { fontWeight: "bold", fontSize: "14px" };
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

      <Row>
        <Col>
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            pagination={paginationFactory()}
            sort={{ caretRenderer: customSortCaret }}
            rowStyle={rowStyle}
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
