import React, { useState } from "react";

import logo from "./assests/images/logo2.png";

import questions from "./assests/questions/questions.json";

import Question from "./components/Question";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [end, setEnd] = useState(false);

  return (
    <>
      <nav className="flex p-5 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <a href="/" className="h-auto">
          <img src={logo} alt="logo" className="w-52" />
        </a>
      </nav>
      <Question question={questions.question[number]} />

      <hr />

      <div className="flex justify-between">
        {number > 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setNumber(number - 1)}
          >
            Previous
          </button>
        )}
        {number < questions.question.length - 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setNumber(number + 1)}
          >
            Next
          </button>
        )}
      </div>
      {end && (
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default App;
