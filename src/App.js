import { Link } from "react-router-dom";
import "./App.css";
// ul>li*2
function App() {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <Link to="/">Gamified Git</Link>
          <nav className="primary-navigation">
            <ul role="list" aria-label="Primary">
              <li>
                <Link to="/gitle">Gitle</Link>
              </li>
              <li></li>
            </ul>
          </nav>
          <button className="button">Go</button>
        </div>
      </header>
      <main className="App">
        <h1 className="fs-huge fw-bold">Learn Git with Fun</h1>
      </main>
      <footer className="bg-neutral text-secondary">
        <div className="container">
          <ul role="list" aria-label="social links">
            <li>
              <a aria-label="Codewars" href="#"></a>
            </li>
            <li>
              <a aria-label="LinkedIn" href="#"></a>
            </li>
            <li>
              <a aria-label="GitHub" href="#"></a>
            </li>
            <li>
              <a aria-label="Twitter" href="#"></a>
            </li>
          </ul>
        </div>
        <div className="container">
          <p>Copyright</p>
        </div>
      </footer>
    </>
  );
}

export default App;
