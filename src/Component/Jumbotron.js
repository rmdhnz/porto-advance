import React from "react";
import { Col, Container, Row } from "reactstrap";
import profilPhoto from "./img/foto-kece.jpg";
import "./css/Jumbotron.css";
import cssLogo from "./img/css.png";
import htmlLogo from "./img/html-removebg-preview.png";
import jsLogo from "./img/JavaScript-logo.png";
import About from "./About";
import reactLogo from "../logo.svg";
import bootstrapLogo from "./img/bootstrap.png";
import phpLogo from "./img/php-removebg-preview.png";
import pythonLogo from "./img/python-removebg-preview.png";
import figmaLogo from "./img/figma-removebg-preview.png";
export default function Jumbotron() {
  return (
    <Container className="jumbotron py-5  ">
      <Row className="mt-5">
        <Col lg="6" className="left-side mb-3">
          <Row>
            <div className="banner mb-5">
              <img src={profilPhoto} className="rounded-circle" />
            </div>
            <p className="display-6 text-center text-warning fst-italic">
              Fadhly Ramadhan
            </p>
          </Row>
        </Col>
        <Col lg="6" className="profile mb-3">
          <About />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p className="fs-2">Skills</p>
          <hr className="mx-auto" />
        </Col>
      </Row>
      <Row className="justify-content-center my-skill">
        <Col md="2" className="col-3 mb-3">
          <img
            src={cssLogo}
            style={{ width: "100px" }}
            className="rounded-circle"
          />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img
            src={htmlLogo}
            style={{ width: "100px" }}
            className="img-fluid"
          />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={jsLogo} style={{ width: "100px" }} className="img-fluid" />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={reactLogo} className="img-fluid" />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={bootstrapLogo} className="img-fluid" />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={phpLogo} className="img-fluid" />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={pythonLogo} className="img-fluid" />
        </Col>
        <Col md="2" className="col-3 mb-3">
          <img src={figmaLogo} className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
