import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-neutral">
      <div className="container even-columns">
        <ul className="social-list" aria-label="social links">
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

        <a className="justify-self-end" href="../LICENSE">
          LICENSE
        </a>
      </div>
    </footer>
  );
}

export default Footer;
