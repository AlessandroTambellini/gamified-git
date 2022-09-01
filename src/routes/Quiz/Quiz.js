import React, { useState, useEffect } from "react";
import "./Quiz.css";

const QUIZ_API_BASE_URL = [
  {
    question: "What Git stands for?",
    answers: [
      "Global information tracker",
      "unpleasant person",
      "Goddamn idiotic truckload of sh*t",
      "Just three random letters",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is an untracked file?",
    answers: [
      "file in your working directory that was not in your last snapshot and is not in your staging area",
      "file that Git knows about",
      "file in a remote repo",
      "file without content",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is not a git log option?",
    answers: ["--oneline", "--graph", "--short", "--pretty=oneline"],
    correctAnswer: 2,
  },
];

export default function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      /* 
      const response = await fetch(QUIZ_API_BASE_URL);
      const jsonResponse = await response.json(); */
      setQuestions(QUIZ_API_BASE_URL);
    };

    fetchData();
  }, []);

  if (!questions) return null; // no questions fetched from API

  const currQuestion = questions[currQuestionIdx];
  const isFirstQuestion = currQuestionIdx === 0;
  const isLastQuestion = currQuestionIdx === questions.length - 1;

  return (
    <>
      <h1 className="display-none">Quiz</h1>
      <div id="quiz-container" className="container">
        <button
          className="button"
          data-type="inverted"
          disabled={isFirstQuestion}
          onClick={() => setCurrQuestionIdx(currQuestionIdx - 1)}
        >
          &laquo;
        </button>

        <main>
          <h2 className="fs-big fw-semi-bold">{currQuestion.question}</h2>
          <ul className="fs-medium">
            {currQuestion.answers.map((answer, answerIdx) => {
              const selectedAnswer = selectedAnswers[currQuestionIdx];

              let className = "";
              if (selectedAnswer === answerIdx) {
                className =
                  currQuestion.correctAnswer === selectedAnswer
                    ? "correct"
                    : "incorrect";
              }

              return (
                <li
                  key={answerIdx}
                  className={className}
                  onClick={() => {
                    if (!selectedAnswer)
                      setSelectedAnswers([...selectedAnswers, answerIdx]);
                  }}
                >
                  <span className="fw-bold">$</span> {answer}
                </li>
              );
            })}
          </ul>
        </main>
        <button
          className="button"
          data-type="inverted"
          disabled={isLastQuestion || selectedAnswers[currQuestionIdx] == null}
          onClick={() => setCurrQuestionIdx(currQuestionIdx + 1)}
        >
          &raquo;
        </button>
      </div>
    </>
  );
}
