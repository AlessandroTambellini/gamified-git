import styles from "./Footer.module.css";
import { ReactComponent as Twitter } from "../SVG/twitter.svg";
import { ReactComponent as LinkedIn } from "../SVG/linkedin.svg";
import { ReactComponent as GitHub } from "../SVG/github.svg";

function Footer() {
  return (
    <footer className={`${styles.footer} bg-neutral`}>
      <div className={`container ${styles["even-columns"]}`}>
        <ul className={`${styles["social-list"]}`} aria-label="social links">
          {/*           <li>
            <a
              aria-label="Codewars"
              href="https://www.codewars.com/users/AlessandroTambellini"
            >
              Codewars
            </a>
          </li>
           */}
          <li>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/alessandro-tambellini-3739321b9/"
            >
              <LinkedIn className="secondary-icon icon-medium" />
            </a>
          </li>
          <li>
            <a
              aria-label="GitHub"
              href="https://github.com/AlessandroTambellini"
            >
              <GitHub className="secondary-icon icon-medium" />
            </a>
          </li>
          <li>
            <a aria-label="Twitter" href="https://twitter.com/Alessan78667092">
              <Twitter className="secondary-icon icon-medium" />
            </a>
          </li>
        </ul>

        <a
          className={`secondary-link ${styles["justify-self-end"]}`}
          href="https://github.com/AlessandroTambellini/gamified-git/blob/main/LICENSE"
        >
          LICENSE
        </a>
      </div>
    </footer>
  );
}

export default Footer;
