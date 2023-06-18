import React from "react";
import { Container, Row, Col } from "reactstrap";

import CategoryImg01 from "../../../assets/images/category-01.png";
import CategoryImg02 from "../../../assets/images/category-02.png";
import CategoryImg03 from "../../../assets/images/category-03.png";
import CategoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/Category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgURl: CategoryImg01,
  },
  {
    display: "Pizza",
    imgURl: CategoryImg02,
  },
  {
    display: "Asian Food",
    imgURl: CategoryImg03,
  },
  {
    display: "Raw Meat",
    imgURl: CategoryImg04,
  },
];

const Category = () => {
  return (
    <>
      <Container>
        <Row>
          {categoryData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <div className="category_item d-flex align-items-center gap-3">
                <div className="category_image">
                  <img src={item.imgURl} alt="Category_item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Category;
