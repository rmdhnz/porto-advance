import React from "react";
import htmlLogo from "./img/html.png";
import cssLogo from "./img/css.png";
import pythonLogo from "./img/python.png";
import bootstrapLogo from "./img/bootstrap.png";
import logo from "../logo.svg";
import reactLogo from "./img/logo512.png";
import cppLogo from "./img/cpp.png";
import jsLogo from "./img/JavaScript-logo.png";
import { Col, Row } from "reactstrap";
const arrayOfLogo1 = [htmlLogo, cssLogo, pythonLogo];
const arrayOfLogo2 = [bootstrapLogo, reactLogo, cppLogo, jsLogo];
export default function Skill() {
  return (
    <React.StrictMode>
      <Row>
        <p class="text-center fs-2 mt-5">Skills</p>
        <hr style={{ width: "250px" }} class="mx-auto text-warning" />
      </Row>
      <Row className="justify-content-center">
        {arrayOfLogo1.map((item, index) => (
          <Col lg="3" className="col-3" key={index}>
            <img src={item} className="img-thumbnail mb-3" />
          </Col>
        ))}
      </Row>
      <Row>
        {arrayOfLogo2.map((item, index) => (
          <Col lg="3" className="col-3" key={index}>
            <img src={item} className="img-thumbnail mb-3" />
          </Col>
        ))}
      </Row>
    </React.StrictMode>
  );
}
