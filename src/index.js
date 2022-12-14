import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Intro from "./routes/Intro";
import Gitle from "./routes/Gitle/Gitle";
import Quiz from "./routes/Quiz/Quiz";
import Prompt from "./routes/Prompt";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Intro />} />
          <Route path="gitle" element={<Gitle />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="prompt" element={<Prompt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
