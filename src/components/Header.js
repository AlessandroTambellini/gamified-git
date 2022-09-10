import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../SVG/bars-solid.svg";
import styles from "./Header.module.css";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={`${styles["primary-header"]} ${
        showNav && styles["dark-layer"]
      }`}
      onClick={() => showNav && setShowNav(false)}
    >
      <div className={`${styles["nav-wrapper"]} container`}>
        <Link to="/">Gamified Git</Link>
        <button
          className={`${styles["icon-button"]} icon-button`}
          aria-controls="primary-nav"
          aria-expanded={showNav ? "true" : "false"}
          onClick={() => setShowNav(true)}
        >
          <Hamburger className="icon-medium" aria-hidden="true" />
          <span className="sr-only">Menu</span>
        </button>
        <nav
          className={`${styles["primary-nav"]} ${showNav && "display-block"}`}
          id="primary-nav"
        >
          <ul className={`${styles["nav-list"]}`} aria-label="Primary">
            <li>
              <Link to="/gitle">Gitle</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/prompt">Prompt</Link>
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
