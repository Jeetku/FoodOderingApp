import React from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import "../../styles/Header.css";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Checkout",
    path: "/checkout",
  },
];

const Header = () => {
  return (
    <>
      <Container>
        <div className="header">
          <div className="nav_wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <h5>Taste Maker</h5>
            </div>
            {/* =======Menu======== */}
            <div className="navigation">
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <NavLink to={item.path} key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            {/*========= nav right icons ============ */}

            <div className="nav_right">
              <span className="cart_icon">
                <i class="ri-shopping-basket-line"></i>

                <span className="cart_badge">2</span>

                <span className="user">
                  <Link to="/login">
                    <i class="ri-user-line"></i>
                  </Link>
                </span>
                <span className="mobile_menu">
                  <i class="ri-menu-line"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
