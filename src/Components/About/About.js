import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <h1 className="text-center mt-5 fw-bold mb-5">About Me</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <Figure>
              <Figure.Image
                className="w-100 rounded"
                alt="pro"
                src="https://mms.businesswire.com/media/20220222005335/en/1366158/4/Marcelo.jpg"
              />
            </Figure>
          </Col>

          <Col sm={6}>
            <p>
              My name is Ahmed. A reflection on my goals allows me to give a deeper insight into
              how this front end development fits in with my long-term career
              goals.
              <br />
              <br />
              The opportunity to participate in programming hero is been
              organized by the Team which has been immensely successful in
              creating a global network of a highly adept intelligent workforce
              that help companies achieve their mission-critical projects and
              goals.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
