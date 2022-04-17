import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://charlesaris.com/wp-content/uploads/2021/06/FA-offer-report-carousel-banner-2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>SMALL BUSINESSES</h3>
            <p>Whether you need assistance with your regular bookkeeping, are required to prepare a Notice to Reader for your creditors or would like some general advice on your operation’s internal controls, contact me today with your small business needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://charlesaris.com/wp-content/uploads/2021/04/Former-Consult-Study-Website-Carousel.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>CORPORATE TAXES</h3>
            <p>If you are a registered Corporation resident in Canada, whether inactive or tax-exempt, it is an annual requirement to file a T2 corporation income tax return. Let me help you find the answers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://charlesaris.com/wp-content/uploads/2021/06/FA-offer-report-carousel-banner-1.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>MEDIA AND ENTERTAINMENT</h3>
            <p>
            If you are primarily in the business of film production you may be eligible for Federal and Provincial film production tax credits!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
