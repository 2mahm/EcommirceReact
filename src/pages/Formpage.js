import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
//import RegisterForm from '../components/RegisterForm';

const Formpage = () => {
  return (
    <Container style={{height:"83%"}}>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className='mt-5 text-center'>Login</h2>
          <LoginForm />
        </Col>
      </Row>
{/* 
      <Row className="mt-5 justify-content-center">
        <Col md={6}>
          <h2>Register</h2>
          <RegisterForm />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Formpage;