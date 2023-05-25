import { Link, NavLink } from "react-router-dom";
import { Frontpage } from "../pages/Frontpage.jsx";
import { Aboutpage } from "../pages/Aboutpage.jsx";
import { Beerpage } from "../pages/Productpage.jsx";
import { Contactpage } from "../pages/Contactpage.jsx";
import "../style/Header.css";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../media/logo/pvlogo.png";
import { useRef } from "react";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <NavLink to="/" class="flex items-center">
        <img
          src={Logo}
          class=" sm:h-16 sm:mr-10  md:h-20  md:mr-16 lg:h-24 lg:mr-20 "
          alt="Petit Verre Logo"
        />
      </NavLink>
      <nav ref={navRef}>
        <ul className="menu-list">
          <li>
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="nav-link"
              activeClassName="active-link"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/beertasting"
              className="nav-link"
              activeClassName="active-link"
            >
              Beer Tasting
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              {" "}
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="navbtn navCloseBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="navbtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
