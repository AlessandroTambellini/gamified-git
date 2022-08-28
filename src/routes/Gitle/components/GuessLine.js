import React from "react";
import "./GuessLine.css";

function GuessLine({ guess, solution, isColored }) {
  return (
    <div className="line">
      {guess.split("").map((char, i) => {
        let className = "tile";
        if (isColored) {
          if (char === solution[i]) {
            className += " correct";
          } else if (solution.includes(char)) {
            className += " close";
          } else {
            className += " incorrect";
          }
        }
        return (
          <div key={i} className={className}>
            {char}
          </div>
        );
      })}
    </div>
  );
}

export default GuessLine;
