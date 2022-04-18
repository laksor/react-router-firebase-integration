import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="mt-5">
      <Container>
        <h1 className="text-center fw-bold mb-5 text-success">My Blogs</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Difference between authorization and authentication
            </Accordion.Header>
            <Accordion.Body>
              the most common way of checking and affirming representatives' ID
              and passwords in an association is called authentication, yet
              figuring out which worker approaches which floor is called
              authorization..
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase Authentication makes it easier to get your users
              signed-in without having to understand the complexities behind
              implementing your own authentication system.
              <br />
              <br />
              The list below reviews some common authentication methods used to
              secure modern systems. Password-based authentication. Passwords
              are the most common methods of authentication. ... Multi-factor
              authentication. ... Certificate-based authentication. ...
              Biometric authentication. ... Token-based authentication.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What other services does firebase provide other than
              authentication
            </Accordion.Header>
            <Accordion.Body>
              What are different services that Firebase provide to use? There
              are many services which Firebase provides, Most useful of them
              are: Cloud Firestore. Cloud Functions. Authentication. Hosting.
              Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Blog;
