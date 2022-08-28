import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>Welcome to Gamified Git!</h1>
      <nav>
        <Link to="/gitle">Gitle</Link>
      </nav>
    </main>
  );
}

export default App;
