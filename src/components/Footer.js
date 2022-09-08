import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} bg-neutral`}>
      <div className={`container ${styles["even-columns"]}`}>
        <ul className={`${styles["social-list"]}`} aria-label="social links">
          <li>
            <a
              aria-label="Codewars"
              href="https://www.codewars.com/users/AlessandroTambellini"
            >
              Codewars
            </a>
          </li>
          <li>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/alessandro-tambellini-3739321b9/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub"
              href="https://github.com/AlessandroTambellini"
            >
              GitHub
            </a>
          </li>
          <li>
            <a aria-label="Twitter" href="https://twitter.com/Alessan78667092">
              Twitter
            </a>
          </li>
        </ul>

        <a
          className={`${styles["justify-self-end"]}`}
          href="https://github.com/AlessandroTambellini/gamified-git/blob/main/LICENSE"
        >
          LICENSE
        </a>
      </div>
    </footer>
  );
}

export default Footer;
