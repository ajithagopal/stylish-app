import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
      <ul className={clicked ? "navbar nav-active" : "navbar"}>
        <NavLink to="/" className="nav-links">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/about-us" className="nav-links">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/services" className="nav-links">
          <li>SERVICES</li>
        </NavLink>
        <NavLink to="/bridal-makeup" className="nav-links">
          <li>BRIDAL MAKEUP</li>
        </NavLink>
        <NavLink to="/gallery" className="nav-links">
          <li>GALLERY</li>
        </NavLink>
        <NavLink to="/contact" className="nav-links">
          <li>CONTACT</li>
        </NavLink>
        <NavLink to="/courses" className="course-nav-links">
          <li className="course-nav">COURSE</li>
        </NavLink>
      </ul>
      <div className="mobile">
        <button
          type="button"
          className="btn-icons"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
