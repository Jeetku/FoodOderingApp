import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImage from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/Category/Category";
import "../styles/Home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/Product-Card/ProductCard";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlide from "../components/UI/silder/TestimonialSlide";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = filteredPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      <Helmet title="Home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <h5 className="mb-3 mt-4">Easy way to make an order</h5>
                  <h1 className="mb-4 hero_title">
                    <span>HUNGRY?</span>
                    Just wait <br /> Food at <span>your door</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos adipisci accusantium, eos non natus repudiandae!
                  </p>

                  <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                    <button className="order_btn d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all_foods-btn ">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>
                  <div className="hero_service d-flex align-items-center gap-5 mt-5">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping_icon">
                        <i className="ri-car-line"></i>
                      </span>
                      No shipping charge.
                    </p>

                    <p className="d-flex align-items-center gap-2">
                      <span className=" shipping_icon">
                        <i className="ri-shield-check-line"></i>
                      </span>
                      100% secure checkout.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_image">
                  <img src={heroImage} alt="Hero" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pt-0">
          <Category></Category>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h5 className="feature_subtitle mb-4"> What we serve</h5>
                <h2 className="feature_title">Just sit back at home</h2>
                <h2 className="feature_title">
                  we wiil <span>take care</span>
                </h2>
                <p className="mb-1 mt-4 feature_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, iste.
                </p>
                <p className="feature_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, exercitationem?
                </p>
              </Col>
              {featureData.map((item, index) => (
                <Col lg="4" md="4" sm="6" key={index} className="mt-5">
                  <div className="feature_item text-center px-3 py-3">
                    <img
                      src={item.imgUrl}
                      alt="feature_image"
                      className="w-25 mb-3"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Popular Foods</h2>
              </Col>

              <Col lg="12">
                <div className="food_category d-flex align-items-center justify-content-center gap-5">
                  <button
                    className={`all_btn ${
                      category === "ALL" ? "foodBtnActive" : ""
                    }`}
                    onClick={() => {
                      setCategory("ALL");
                    }}
                  >
                    All
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "BURGER" ? "foodBtnActive" : ""
                    }`}
                    onClick={() => {
                      setCategory("BURGER");
                    }}
                  >
                    <img src={foodCategoryImg01} alt="foodCategory01" />
                    Burger
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "PIZZA" ? "foodBtnActive" : ""
                    }`}
                    onClick={() => {
                      setCategory("PIZZA");
                    }}
                  >
                    <img src={foodCategoryImg02} alt="foodCategory02" />
                    Pizza
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "BREAD" ? "foodBtnActive" : ""
                    }`}
                    onClick={() => {
                      setCategory("BREAD");
                    }}
                  >
                    <img src={foodCategoryImg03} alt="foodCategory01" />
                    Bread
                  </button>
                </div>
              </Col>
              {allProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={whyImg} alt="location_img" className="w-100" />
              </Col>
              <Col lg="6" md="6">
                <div className="why_tasty-treat">
                  <h2 className="tasty_treat-title mb-4">
                    Why <span>Taste Maker?</span>
                  </h2>
                  <p className="tasty_treat-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus at neque similique. Amet sunt distinctio, dicta
                    facere possimus nostrum quo?
                  </p>
                  <ListGroup className="mt-5">
                    <ListGroupItem className="border-0 ps-0">
                      <p className=" choose_us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>Fresh and tasty
                        foods
                      </p>
                      <p className="tasty_treat-desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatum, accusantium?
                      </p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                      <p className=" choose_us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>Quality support
                        foods
                      </p>
                      <p className="tasty_treat-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, accusantium?
                      </p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                      <p className=" choose_us-title d-flex align-items-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Order from any location
                      </p>
                      <p className="tasty_treat-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatum, accusantium?
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2>Hot Pizza</h2>
              </Col>
              {hotPizza.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="testimonial mb-5">
                  <h5 className="testinomial_subtitle mb-4">Testinomial</h5>
                  <h2 className="testinomial_title mb-4">
                    What our <span>customers</span> are saying
                  </h2>
                  <p className="testinomial_desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit sunt, consequuntur saepe praesentium sint nostrum
                    pariatur? Incidunt repellat sequi dolor!
                  </p>
                  <TestimonialSlide></TestimonialSlide>
                </div>
              </Col>
              <Col lg="6" md="6">
                <img src={networkImg} alt="network_image" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
