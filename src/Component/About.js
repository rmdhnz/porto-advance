import React from "react";
import { Col, Row } from "reactstrap";
export default function About() {
  return (
    <React.StrictMode>
      <Row>
        <p class="text-center fs-2">About me</p>
        <hr style={{ width: "250px" }} class="mx-auto text-warning" />
      </Row>
      <Row className="justify-content-center">
        <Col lg="3" className="col-3">
          <a href="https://github.com/rmdhnz" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </Col>
        <Col lg="3" className="col-3">
          <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </Col>
        <Col lg="3" className="col-3">
          <a
            href="https://www.linkedin.com/in/fadhly-ramadhan-69217821b/"
            target="_blank"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </Col>
      </Row>
    </React.StrictMode>
  );
}
