import { Link } from "react-router-dom";
import { Frontpage } from "../pages/Frontpage.jsx";
import { Aboutpage } from "../pages/Aboutpage.jsx";
import { Beerpage } from "../pages/Beerpage.jsx";
import { Contactpage } from "../pages/Contactpage.jsx";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Frontpage</Link>
          </li>

          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
