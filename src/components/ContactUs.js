import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <Container style={{ height: "81%" }}>
      <Row className="mb-5 mt-3">
        <Col>
          <h1 className="display-4 mb-4 text-center">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-center" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Storepage</h3>
          <address>
            <strong>Email: </strong>
            <a href="@" className="text-decoration-none">
              MahmoudMohamed@gmail.com
            </a>
            <br />
            <br />

            <p>
              <strong>Phone: 01069433663</strong>
            </p>
          </address>
          <p>
            Contact us if there is any problem or difficulty in using our
            website, and we will respond to you as soon as possible, and we are
            working to make you happy.
          </p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row className="mb-3">
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <Button className="btn ac_btn " type="submit">
                  Send
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
