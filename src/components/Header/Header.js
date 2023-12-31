import React, { useRef, useEffect } from "react";
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
];

const Header = () => {
  const menuRef = useRef(null);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    return () => window.removeEventListener("scroll", null);

    //
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav_wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} alt="Logo" className="w-25" />
              <h5>Taste Maker</h5>
            </div>
            {/* =======Menu======== */}
            <div className="navigation" ref={menuRef}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <NavLink
                    onClick={toggleMenu}
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            {/*========= nav right icons ============ */}

            <div className="nav_right ">
              <span className="cart_icon ">
                <i class="ri-shopping-basket-line"></i>

                <span className="cart_badge">2</span>

                <span className="user">
                  <Link to="/login">
                    <i class="ri-user-line"></i>
                  </Link>
                </span>
                <span className="mobile_menu" onClick={toggleMenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
