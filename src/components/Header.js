import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../SVG/icon-hamburger.svg";
import "./Header.css";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      id="header"
      className={`primary-header ${showNav && "dark-layer"}`}
      onClick={() => showNav && setShowNav(false)}
    >
      <div className="container nav-wrapper">
        <Link to="/">Gamified Git</Link>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={showNav ? "true" : "false"}
          onClick={() => setShowNav(true)}
        >
          <Hamburger aria-hidden="true" />
          <span className="visually-hidden">Menu</span>
        </button>
        <nav
          className={`primary-nav ${showNav && "display-block"}`}
          id="primary-nav"
        >
          <ul className="nav-list" aria-label="Primary">
            <li>
              <Link to="/gitle">Gitle</Link>
            </li>
            <li>
              <Link to="/Quiz">Quiz</Link>
            </li>
            <li>
              <Link to="#">Prompt</Link>
            </li>
          </ul>
        </nav>
        <button className="button | display-none display-md-inline-flex">
          Go
        </button>
      </div>
    </header>
  );
}

export default Header;
