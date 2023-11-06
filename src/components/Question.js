import React from "react";
import "./Question.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem } from "@mui/material";
import { useState } from "react";

export default function Question(props) {
  const question = props.question;
  let type = question.question_type;

  const [fournisseur,setFournisseur] = useState('');

  return (
    <div className="">
      {type === "text" && (
        <div>
          <h1 className="py-4 text-xl text-textBlue">{question.question}</h1>
          <p>{question?.hint}</p>
          <input type="text" />
        </div>
      )}
      {type === "select" && (
        <div>
          <h1 className="py-4 text-xl text-textBlue">{question.question}</h1>
          {/* <select class="transform rounded border-2 border-blue-500 bg-white p-4 text-blue-500 transition-transform hover:scale-105 focus:border-blue-700">
            {question.reponses.map((reponse, index) => (
              <option key={index} value={reponse}>
                {reponse}
              </option>
            ))}
          </select> */}
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={question.reponses[0]}
            label={question.question}
            onChange={handleChange}

          >
            {question.reponses.map((reponse, index) => (
              <MenuItem key={index} value={reponse}>
                {reponse}
              </MenuItem>
            ))}
          </Select>
        </div>
      )}
      {type === "email" && (
        <div>
          <h1 className="py-4 text-xl text-textBlue">{question.question}</h1>
          <p>{question?.hint}</p>
          <input type="email" />
        </div>
      )}
      {type === "groupe" && (
        <div>
          <p>{question?.hint}</p>
          {question.questions.map((nestedQuestion, index) => (
            <Question key={index} question={nestedQuestion} />
          ))}
        </div>
      )}
    </div>
  );
}
