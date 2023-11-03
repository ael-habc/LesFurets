import React from "react";
import "./Question.css";
import { Select, Option } from "@material-tailwind/react";

export default function Question(props) {
  const question = props.question;
  let type = question.question_type;

  return (
    <div className="">
      {type === "text" && (
        <div>
          <h1>{question.question}</h1>
          <p>{question.hint}</p>
          <input type="text" />
        </div>
      )}
      {type === "select" && (
        <div>
          <h1 className="text-textBlue text-xl">{question.question}</h1>
          <Select label="Select Version">
            {question.reponses.map((reponse, index) => (
              <Option key={index} value={reponse}>
                {reponse}
              </Option>
            ))}
          </Select>
          <button className="rounded-xl bg-gradient-to-br from-[#FFC837] to-[#FF6108] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#FFC837]/50">
            Button 9
          </button>
        </div>
      )}
      {type === "email" && (
        <div>
          <h1 className="text-xl">{question.question}</h1>
          <p>{question.hint}</p>
          <input type="email" />
        </div>
      )}
      {type === "groupe" && (
        <div>
          <h1>{question.question}</h1>
          <p>{question.hint}</p>
          {question.questions.map((nestedQuestion, index) => (
            <Question key={index} question={nestedQuestion} />
          ))}
        </div>
      )}
    </div>
  );
}
