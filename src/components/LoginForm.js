import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
function LoginForm() {
  const initalFormData = {
    email: "",
    password: "",
  };

  const passRef = useRef(null);

  const [formData, setFormData] = useState({ ...initalFormData });

  const [err, setErr] = useState({
    email: null,
    password: null,
  });

  const emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;
  const changeHadler = (e) => {
    if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
      setErr({
        ...err,

        [e.target.name]: `* ${e.target.name} should have format like this 'name@email.com' `,
      });
    } else if (e.target.name === "password" && e.target.value.length <= 8) {
      setErr({
        ...err,

        [e.target.name]: `${e.target.name} must be more than 8 characters.`,
      });
    } else {
      setErr({
        ...err,
        [e.target.name]: null,
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !err.email &&
      !err.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8
    ) {
      setFormData({
        ...initalFormData,
      });
      alert("Successful ✔👌!");
    } else {
      alert("data is not correctly!");
    }
  };

  return (
    <Form className="my-5" onSubmit={submitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={changeHadler}
          name="email"
          value={formData.email}
        />
        <Form.Text className={err.email ? "text-danger fs-8" : "text-gray"}>
          {err.email
            ? err.email
            : " We'll never share your email with anyone else."}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword" ref={passRef}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={changeHadler}
          name="password"
          value={formData.password}
        />
        <Form.Text className={err.password ? "text-danger fs-8" : "text-muted"}>
          {err.password
            ? err.password
            : " Password has to be more than 8 characters."}
        </Form.Text>
      </Form.Group>
      <NavLink
        to="/RegisterForm"
        className="d-block text-primary text-center py-2 text-decoration-none"
      >
        Register now!
      </NavLink>
      <Button
        className="mt-3 "
        variant="primary"
        type="submit"
        style={{ width: "40rem" }}
      >
        Login
      </Button>
    </Form>
  );
}
export default LoginForm;
