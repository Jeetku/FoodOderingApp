import React from "react";
// import Header from "../Header/Header";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";

const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
