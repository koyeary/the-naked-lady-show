import React from "react";
import Navbar from "react-bootstrap/Navbar";

const MainNav = () => {
  return (
    <Navbar expand="lg" className="shadow main-navbar fixed-top justify-content-center">
      <div className="brand">The Naked Lady Show!</div>
    </Navbar>
  );
};

export default MainNav;