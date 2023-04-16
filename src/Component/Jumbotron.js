import React from "react";
import { Col, Container, Row } from "reactstrap";
import profilPhoto from "./img/foto-kece.jpg";
import "./css/Jumbotron.css";
import About from "./About";
export default function Jumbotron() {
  return (
    <Container className="jumbotron pt-5">
      <Row>
        <Col lg="6" className="left-side mb-3">
          <Row>
            <div className="banner mb-5">
              <img src={profilPhoto} className="rounded-circle" />
            </div>
            <p className="display-6 text-center text-warning fst-italic">
              Fadhly Ramadhan
            </p>
          </Row>
          <Row>
            <a href="">
              <i class="bi bi-envelope">ramadhanfadhly2@gmail.com</i>
            </a>
          </Row>
        </Col>
        <Col lg="6" className="profile mb-3">
          <About />
        </Col>
      </Row>
    </Container>
  );
}
