import React, { useState, useEffect } from "react";
import GuessLine from "./components/GuessLine";
import { ReactComponent as OpenInNewTab } from "../../SVG/arrow-up-right-from-square-solid.svg";

const NUM_GUESSES = 6;
const WORD_LENGTH = 5;
const SOLUTION = "stash";

function Gitle() {
  const [guesses, setGuesses] = useState(Array(NUM_GUESSES).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    const onPressKey = (event) => {
      if (guesses[NUM_GUESSES - 1] != null || guesses.includes(SOLUTION))
        return;

      const charCode = event.key.toLowerCase().charCodeAt(0);
      const isLetter =
        event.key.length === 1 &&
        charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0);

      setCurrentGuess((prevGuess) => {
        if (event.key === "Backspace") return prevGuess.slice(0, -1);

        if (event.key === "Enter" && prevGuess.length === WORD_LENGTH) {
          const currentGuessIndex = guesses.findIndex((guess) => guess == null);
          const guessesClone = [...guesses];
          guessesClone[currentGuessIndex] = prevGuess;
          setGuesses(guessesClone);
          return "";
        }
        if (prevGuess.length < WORD_LENGTH && isLetter)
          return prevGuess + event.key.toLowerCase();

        return prevGuess;
      });
    };
    window.addEventListener("keydown", onPressKey);

    return () => window.removeEventListener("keydown", onPressKey);
  }, [guesses]);

  const currentGuessIndex = guesses.findIndex((guess) => guess == null);

  return (
    <>
      <h1 className="display-none">Gitle</h1>
      <main className="container text-center">
        {guesses.map((guess, i) => {
          return (
            <GuessLine
              key={i}
              guess={(i === currentGuessIndex
                ? currentGuess
                : guess ?? ""
              ).padEnd(WORD_LENGTH)}
              solution={SOLUTION}
              isColored={currentGuessIndex > i || currentGuessIndex === -1}
            />
          );
        })}

        {guesses[NUM_GUESSES - 1] != null && !guesses.includes(SOLUTION) && (
          <button
            onClick={() => {
              setCurrentGuess("");
              setGuesses(Array(NUM_GUESSES).fill(null));
            }}
            className="icon-button fs-huge text-primary-dark"
          >
            &#10226;<span className="sr-only">Try again</span>
          </button>
        )}

        {guesses.includes(SOLUTION) && (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://git-scm.com/docs/git-${SOLUTION}`}
          >
            {SOLUTION} <OpenInNewTab className="icon-medium" />
          </a>
        )}
      </main>
    </>
  );
}

export default Gitle;
