import { Button } from "react-bootstrap";
import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const Service = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-5 fw-bold">My Services</h1>
      <Container>
        <CardGroup className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              height={250}
              src="http://www.eparent.com/wp-content/uploads/2019/06/8-Simple-Ways-to-Market-Your-Small-Business-Online.jpg"
            />
            <Card.Body>
              <Card.Title>SMALL BUSINESSES</Card.Title>
              <Card.Text>
                Whether you need assistance with your regular bookkeeping, are
                required to prepare a Notice to Reader for your creditors or
                would like some general advice on your operation’s internal
                controls, contact me today with your small business needs.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
              <Button className="px-5" size="lg">
                Get This
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              height={250}
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201909/tax_rates_660x450_092319064408.jpg"
            />
            <Card.Body>
              <Card.Title>CORPORATE TAXES</Card.Title>
              <Card.Text>
                If you are a registered Corporation resident in Canada, whether
                inactive or tax-exempt, it is an annual requirement to file a T2
                corporation income tax return. Let me help you find the answers
                to any questions you may have about filing your return, or if
                assistance is needed in preparing and electronically filing your
                Corporation’s T2.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
              <Button className="px-5" size="lg">
                Get This
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              height={250}
              src="https://www.forbesindia.com/media/images/2019/Oct/img_122803_media_and_entertainment.jpg"
            />
            <Card.Body>
              <Card.Title>MEDIA AND ENTERTAINMENT</Card.Title>
              <Card.Text>
                If you are primarily in the business of film production you may
                be eligible for Federal and Provincial film production tax
                credits! Contact me to learn more about your production
                company’s eligibility for these tax credits and get started on
                your claim today.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-grid">
              <Button className="px-5" size="lg">
                Get This
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Service;
