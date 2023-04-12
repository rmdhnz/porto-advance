import React from "react";
import { Col, Container, Row } from "reactstrap";
import profilPhoto from "./img/foto-kece.jpg";
import "./css/Jumbotron.css";
const htmlIcon = ["</>", "C", "#"];
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
        <Col lg="6" className="profile">
          <Row>
            <p class="text-center fs-2">About me</p>
            <hr style={{ width: "250px" }} class="mx-auto text-warning" />
          </Row>
          <Row>
            <Col lg="3" className="col-3">
              <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </Col>
            <Col lg="3" className="col-3">
              <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
            </Col>
            <Col lg="3" className="col-3">
              <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
                <i class="bi bi-stack-overflow"></i>
              </a>
            </Col>
            <Col lg="3" className="col-3">
              <a href="https://instagram.com/fadhlyrmdhnz" target="_blank">
                <i class="bi bi-linkedin"></i>
              </a>
            </Col>
          </Row>
          <Row className="mt-5 skill">
            <p class="text-center fs-2">Skills</p>
            <hr style={{ width: "250px" }} class="mx-auto text-warning" />
          </Row>
          <Row className="skill">
            <Col lg="3" className="col-3">
              <i class="bi bi-bootstrap-fill"></i>
            </Col>
            <Col lg="3" className="col-3">
              <i>{htmlIcon[0]}</i>
            </Col>
            <Col lg="3" className="col-3">
              <i>{htmlIcon[1]}</i>
            </Col>
            <Col lg="3" className="col-3">
              <i>{htmlIcon[2]}</i>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
