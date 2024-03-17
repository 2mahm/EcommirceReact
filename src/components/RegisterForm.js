import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // alert("Register Successful ✔👌!");
  };

  const [Name ,setName]=useState()
  const [email ,setemail]=useState()
  const [password ,setpassword]=useState()
  const [emerror ,seteror]=useState()
  const [passerr ,setpasser]=useState()
  
let arr=[]
const info={
  useremaail:'',
  userpassword:''
}
const emailRegix=/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
  const validate=()=>{
if (emailRegix.test(email)){

seteror("your email is valide")
info.useremaail=email;

}
if(password.length >=8){
setpasser("valide password")
info.userpassword=password;

}else{
  seteror("error")
  setpasser("error")
}

console.log(info);
arr.push(info)
var serializedObject = JSON.stringify(arr);

localStorage.setItem('myObjec', serializedObject);
  }
  
  return (
    <Container style={{ height: "35.6rem", marginTop: "3rem" }}>
      <h2 className="mt-5 text-center">Register</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" className="mb-4" value={Name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="mb-4" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </Form.Group>
            <p className="text-danger"> {emerror}</p>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className="mb-4" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </Form.Group>
            <p className="text-danger"> {passerr}</p>

            <Button onClick={validate} variant="primary" type="submit" style={{ display: "block", width: "15rem", margin: "30px auto" }} >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterForm;
