import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Team = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Team</h2>
        <div className="d-flex justify-content-center gap-4 mb-5 text-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://mms.businesswire.com/media/20220222005335/en/1366158/4/Marcelo.jpg" />
            <Card.Body>
              <Card.Title>Mukesh</Card.Title>
              <Card.Text>
              some general advice on your operation’s internal controls, contact me today with your small business needs.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" height={190} src="https://chiefexecutive.net/wp-content/uploads/2021/10/HASSAN-FRED.jpg" />
            <Card.Body>
              <Card.Title>Shuvro</Card.Title>
              <Card.Text>
              if assistance is needed in preparing and electronically filing your Corporation’s T2.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://s.wsj.net/public/resources/images/B3-CW861_BARNET_GR_20190114184237.jpg" />
            <Card.Body>
              <Card.Title>Olex</Card.Title>
              <Card.Text>
              company’s eligibility for these tax credits and get started on your claim today.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Team;
