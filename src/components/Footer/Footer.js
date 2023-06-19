import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";

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
              <h5 className="footer_title">Delivery Time</h5>
              <ListGroup className="delivery_time-list">
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
            <Col lg="3" md="4" sm="6">
              <h5 className="footer_title">Contact</h5>
              <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <p>
                    <span>Location: </span>
                    Near Post Office Brahmpura Muzaffarpur Bihar-843108
                  </p>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Phone:+91 5685985000</span>
                </ListGroupItem>

                <ListGroupItem className=" delivery_time-item border-0 ps-0">
                  <span>Email: tastemaker@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="6" sm="6">
              <h5 className="footer_title">News Letter</h5>
              <p>Subscribe our news Letter</p>
              <div className="newsLetter">
                <input type="email" placeholder="Enter your Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="6" md="6">
              <p className="copyright_text">
                {" "}
                &#169;copyright-2023, website developed by{" "}
                <h5>Jeetesh Kumar.</h5> All Rights Reserved.
              </p>
            </Col>
            <Col lg="6" md="6">
              <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                <p className="m-0 ">Follow:</p>
                <span>
                  <Link to="https://www.facebook.com/profile.php?id=100092334761360">
                    <i class="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://github.com/Jeetku">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://twitter.com/Jeetesh91263095">
                    <i class="ri-twitter-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://www.linkedin.com/in/jeetesh-kumar-064719220/">
                    <i class="ri-linkedin-box-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="https://www.instagram.com/jeetesh_singh_/">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
