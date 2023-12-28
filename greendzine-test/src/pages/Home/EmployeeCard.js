import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeCard.css';
import Data from './data'; // Adjust the path based on your project structure

const EmployeeCardData = ({ empId, name, dob, position, cardNumber }) => {
  return (
    <form>
      <div className="employee-card">
        <div className="card-number">{cardNumber}</div>
        <div className="card-details">
          <div className="label-container">
            <label htmlFor="empId"><strong>EMP ID</strong>:</label>
            <span id="empId">{empId}</span>
          </div>
          <div className="label-container">
            <label htmlFor="name"><strong>Name</strong>:</label>
            <span id="name">{name}</span>
          </div>
          <div className="label-container">
            <label htmlFor="dob"><strong>DOB</strong>:</label>
            <span id="dob">{dob}</span>
          </div>
          <div className="label-container">
            <label htmlFor="position"><strong>Role</strong>:</label>
            <span id="position">{position}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

const EmployeeCard = () => {
  const [searchInput, setSearchInput] = useState('');
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Data is already imported from the data.js file
    setEmployeeData(Data);
  }, []); // Empty dependency array to run the effect only once

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);

    const filteredEmployees = employeeData.filter((employee) =>
      employee.name.toLowerCase().includes(inputValue)
    );
    setEmployeeData(filteredEmployees);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search with name"
              className="search-input"
              value={searchInput}
              onChange={handleSearch}
            />
            <InputGroup.Text className="search-icon">
              <AiOutlineSearch style={{ fontSize: '1.7rem', color: '#36A54680' }} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        {employeeData.map((employee) => (
          <Col key={employee.empId} xs={12} sm={6} md={4} lg={3}>
            <EmployeeCardData {...employee} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmployeeCard;
