import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import logo from "./img/p1.jpg";
import "./css/Project.css";
export default function Project() {
  return (
    <Container className="my-project pt-5">
      <Row className="mb-3">
        <Col>
          <p className="fs-3">My Project</p>
          <hr className="mx-auto" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4" className="mb-3 col-6">
          <Card className="text-black">
            <img alt="Sample" src={logo} />
            <CardBody>
              <CardTitle tag="h5">IEEElevate</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                2022
              </CardSubtitle>
              <CardText></CardText>
              <a href="/" className="btn btn-outline-primary">
                show more
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-3 col-6">
          <Card className="text-black">
            <img alt="Sample" src={logo} />
            <CardBody>
              <CardTitle tag="h5">IEEEBig</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                2022
              </CardSubtitle>
              <CardText></CardText>
              <a href="/" className="btn btn-outline-primary">
                show more
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
