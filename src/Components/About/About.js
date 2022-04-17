import React from "react";
import { Col, Container, Figure,  Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <h1 className="text-center mt-5 fw-bold mb-5">About Me</h1>
      <Container>
        <Row>
          <Col sm={6}>
            <Figure>
              <Figure.Image
              className="img-fluid w-75 rounded"
              
                alt="pro"
                src="https://images.squarespace-cdn.com/content/v1/5a0f8584b7411c53d87b4eda/1643155269673-GED4VSN0N79Q2DY646E6/Tim.jpg?format=750w"
              />
            </Figure>
          </Col>

          <Col sm={6}>
            <p>
              Jessica Louie is a passionate learner and educator who thrives in
              helping individuals uncover their business potential and encourage
              their professional growth. 
              <br />
              <br />

              Jessica is an entrepreneur at heart.
              After graduating from the Sauder School of Business in Finance she
              completed her Diploma in Accounting Program in 2010. In 2014, she
              achieved her Chartered Professional Accountant designation with
              one of the top four accounting firms in Canada, Ernst & Young LLP.
              After three years at Ernst & Young, Jessica followed her calling
              to give back to small businesses and fellow entrepreneurs and
              founded her own practice in 2014, JWL Accounting & Business
              Services. Through her practice she focuses on the Film &
              Entertainment Industry, Non-Profit Organizations and Small
              Businesses.
              <br />
              <br />
              
              Forever the creative spirit, Jessica concurrently
              pursued a career in hair styling at John Casablanca Institute in
              2014. During her tenure, she was awarded Top Student and
              successfully ran a mobile hair styling business for three years.
              
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
