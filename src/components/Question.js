import React from "react";
import "./Question.css";

export default function Question(props) {
  const question = props.question;
  let type = question.question_type;

  return (
    <div className="border m-6">
      {type === "text" && (
        <div>
          <h1>{question.question}</h1>
          <p>{question.hint}</p>
          <input type="text" />
        </div>
      )}
      {type === "select" && (
        <div>
          <h1>{question.question}</h1>
          {console.log(question)}
          <select>
            {question.reponses.map((reponse, index) => (
              <option key={index} value={reponse}>
                {reponse}
              </option>
            ))}
          </select>
        </div>
      )}
      {type === "email" && (
        <div>
          <h1>{question.question}</h1>
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
