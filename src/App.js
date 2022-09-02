import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <article>
          <h2 className="fs-big">Colors Legend</h2>
          <ul className="fs-medium">
            <li>
              <span className="color-square bg-primary-orange"></span> Primary
              Orange &cong; correct, right
            </li>
            <li>
              <span className="color-square bg-primary-dark"></span> Primary
              Dark &cong; wrong, mistake
            </li>
            <li>
              <span className="color-square bg-neutral"></span> Neutral Grey
              &cong;
            </li>
            <li>
              <span className="color-square bg-secondary"></span> Secondary Blue
              &cong; almost, swapped
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
