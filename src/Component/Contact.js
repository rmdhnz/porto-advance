import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./css/Contact.css";
export default function ContactForm() {
  return (
    <Container className="contact-form py-5">
      <Row className="mb-3">
        <Col>
          <p className="fs-3">Contact Me</p>
          <hr className="mx-auto" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <Form>
            <FormGroup className="mb-3">
              <Label for="exampleEmail" className="text-start">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail" className="text-start">
                Name
              </Label>
              <Input
                id="exampleEmail"
                name="name"
                placeholder="with a placeholder"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
