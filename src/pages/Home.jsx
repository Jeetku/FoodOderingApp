import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
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
                <Col lg="4" md="4" key={index} className="mt-5">
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
                  <button className="all_btn foodBtnActive">All</button>
                  <button className="d-flex align-items-center gap-2">
                    <img src={foodCategoryImg01} alt="foodCategory01" />
                    Burger
                  </button>
                  <button className="d-flex align-items-center gap-2">
                    <img src={foodCategoryImg02} alt="foodCategory02" />
                    Pizza
                  </button>
                  <button className="d-flex align-items-center gap-2">
                    <img src={foodCategoryImg03} alt="foodCategory01" />
                    Bread
                  </button>
                </div>
              </Col>
              {products.map((item) => (
                <Col lg="3" md="4" key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
