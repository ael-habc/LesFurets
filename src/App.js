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

//Icons (UI)
import { BiLeftArrowAlt } from "react-icons/bi";

function App() {
  const [number, setNumber] = useState(0);
  const [end, setEnd] = useState(false);

  // const [progressbar1, setProgressbar1] = useState(0);
  // const [progressbar2, setProgressbar2] = useState(progressbar1 - 100);
  // const [progressbar3, setProgressbar3] = useState(progressbar2 - 100);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <nav className="flex p-5 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 w-screen">
        <a href="/" className="h-auto">
          <img src={logo} alt="logo" className="w-52" />
        </a>
      </nav>
      <div className="flex flex-col w-2/3 mt-5 justify-center items-center">
        <div className=" flex w-full justify-between">
          <Progress
            value={100}
            color="blue"
            className="h-3 w-1/3 rounded-full mb-5"
            style={{
              width: `${((number + 1) / questions.question.length) * 100}%`,
              transition: "width 0.5s ease-in-out",
              alignSelf: "flex-start",
            }}
          />
         
        </div>
        <div className="w-full max-w-2xl mx-auto pt-4 text-center text-customGray text-lg relative">
          {questions.question[number].title}
        </div>
        {number > 0 && (
          <button
            className="flex text-buttonGray items-center justify-center border-buttonGray border-2 rounded-lg w-32 h-14 mt-5 self-start gap-2 font-medium hover:shadow-lg mb-11"
            onClick={() => setNumber(number - 1)}
          >
            <BiLeftArrowAlt/> Previous
          </button>
        )}
        

        <Question question={questions.question[number]} />
        <hr />
        <div className="flex justify-between">
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
      </div>
    </div>
  );
}

export default App;
