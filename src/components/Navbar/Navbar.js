import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/MH-logo.png";
import contactbuttonimg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="#">
        <img src={logo} alt="logo" className="desktop-logo" />
      </a>
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={true}
          smooth={-50}
          duration={500}
          className="desktop-menu-list-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Contact
        </Link>
      </div>
      <a href="https://wa.me/923322467774">
        <button className="desktop-menu-btn">
          <img
            src={contactbuttonimg}
            alt="button-img"
            className="desktop-menu-img"
          />
          Contact Me
        </button>
      </a>

      {/* Mobile Menu */}
      <a href="#" className="mob_menu">
        <img
          src={menu}
          alt="Menu"
          className="mob-menu"
          onClick={() => setShowMenu(!showMenu)}
        />
      </a>
      <div className="nav-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={true}
          smooth={-50}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={true}
          smooth={-100}
          duration={500}
          className="list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
