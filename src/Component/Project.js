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
  Button,
} from "reactstrap";
import logo from "./img/p1.jpg";
import "./css/Project.css";
export default function Project() {
  return (
    <Container className="my-project">
      <Row>
        <Col>
          <p className="fs-3">My Project</p>
          <hr className="mx-auto" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="4">
          <Card className="text-black">
            <img alt="Sample" src={logo} />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="text-black">
            <img alt="Sample" src={logo} />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
