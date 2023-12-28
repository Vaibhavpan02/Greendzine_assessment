import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import LoginImage from './assets/Group 3@2x.png';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = () => {
    // Check credentials (dummy check for demo purposes)
    if (credentials.email === 'username@gmail.com' && credentials.password === 'password') {
      // Trigger the onLogin callback with true to indicate successful login
      onLogin(true);
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container className="container">
      <Row className="justify-content-center m-5">
        <Col xs={12} sm={8} md={6} className="text-center">
          <div className="logo-container">
            <img src={LoginImage} alt="Logo" className="logo-image" />
            <p className="logo-text"></p>
          </div>

          <Form className="login-form">
            {errorMessage && <Alert variant="danger" className="form-alert">{errorMessage}</Alert>}
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleInputChange}
              className="form-input"
            />
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleInputChange}
              className="form-input"
            />

            <Button onClick={handleLogin} className="login-button">
              Login
            </Button>

            <div className="forgot-password">
              <span className="forgot-password-link" href="/forgot-password">
                Forgot Password?
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;


