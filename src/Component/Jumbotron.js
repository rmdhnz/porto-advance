import React from "react";
import { Col, Container, Row } from "reactstrap";
import profilPhoto from "./img/foto-kece.jpg";
import "./css/Jumbotron.css";
export default function Jumbotron() {
  return (
    <Container className="jumbotron">
      <Row>
        <Col md="6" className="left-side">
          <div className="banner mb-5">
            <img src={profilPhoto} className="rounded-circle" />
          </div>
          <p className="display-6 text-center text-warning fst-italic">
            Fadhly Ramadhan | Fullstack Developer
          </p>
        </Col>
        <Col md="6" className="profile">
          <Row>
            <p class="text-center fs-2">About me</p>
            <hr style={{ width: "250px" }} class="mx-auto text-warning" />
          </Row>
          <Row>
            <Col lg="6">
              <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </Col>
            <Col lg="6">
              <i class="bi bi-instagram"></i>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <i class="bi bi-facebook"></i>
            </Col>
            <Col lg="6">
              <i class="bi bi-linkedin"></i>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
