import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className=" footer_logo text-start">
                <img src={logo} alt="Logo" />
                <h5>Taste Maker</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora eaque neque animi
                </p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5>Delivery Time</h5>
              <ListGroup>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Sunday-Thursday</span>
                  <p>10:00am-11:00pm</p>
                </ListGroupItem>

                <ListGroupItem className=" delivery_time-item border-0 ps-0">
                  <span>Friday-Saturday</span>
                  <p>Off Day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6"></Col>
            <Col lg="3" md="4" sm="6"></Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
