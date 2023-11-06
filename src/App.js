import React, { useState } from "react";

//Assets (Images)
import logo from "./assests/images/logo2.png";

//Json Files (Data)
import questions from "./assests/questions/questions.json";

//Components (UI)
import Question from "./components/Question";

//Material Tailwind (UI)
import { Progress } from "@material-tailwind/react";

//Styles (UI)
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [end, setEnd] = useState(false);

  // const [progressbar1, setProgressbar1] = useState(0);
  // const [progressbar2, setProgressbar2] = useState(progressbar1 - 100);
  // const [progressbar3, setProgressbar3] = useState(progressbar2 - 100);

  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <nav className="flex w-screen p-5 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <a href="/" className="h-auto">
          <img src={logo} alt="logo" className="w-52" />
        </a>
      </nav>
      <div className="mt-5 flex w-2/4 flex-col items-center justify-center">
        <div className=" flex w-full justify-between">
          <Progress
            value={100}
            color="blue"
            className="mb-5 h-3 w-1/3 rounded-full"
            style={{
              width: `${((number + 1) / questions.question.length) * 100}%`,
              transition: "width 0.5s ease-in-out",
              alignSelf: "flex-start",
            }}
          />
        </div>
        <div className="relative mx-auto w-full max-w-2xl pt-4 text-center text-xxl text-customGray">
          {questions.question[number].title}
        </div>
        {number > 0 && (
          <a
            href="#_"
            style={{
              alignSelf: "flex-start",
            }}
            onClick={() => setNumber(number - 1)}
            className="group relative mr-4 inline-flex items-center overflow-hidden rounded-full border-2 border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-indigo-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute left-0 flex h-10 w-10 -translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-4">
              <svg
                className="h-5 w-5 rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Previous</span>
          </a>
        )}

        <Question question={questions.question[number]} />
        <hr />

        {number < questions.question.length - 1 && (
          <a
            href="#_"
            onClick={() => setNumber(number + 1)}
            style={{
              alignSelf: "flex-start",
            }}
            class="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
          >
            <span class="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-indigo-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span class="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </a>
        )}

        {end && (
          <div className="flex justify-center">
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
