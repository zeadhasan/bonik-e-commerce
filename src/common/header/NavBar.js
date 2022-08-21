import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="container d_flex">
        <div className="categories d_flex">
          <span className="fa-solid fa-border-all"></span>
          <h4>
            Categories <i className="fa fa-chevron-down"></i>
          </h4>
        </div>

        {/* navBar Links className */}

        <div className="navlink">
          <ul className="nav">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/pages">pages</Link>
            </li>
            <li>
              <Link to="/user">user account</Link>
            </li>
            <li>
              <Link to="/vendor">vendor account</Link>
            </li>
            <li>
              <Link to="/track">track my order</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open "></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
