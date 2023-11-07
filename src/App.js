import React, { useEffect, useState } from "react";

//Assets (Images)
import logo from "./assests/images/logo2.png";

import "./components/Card.css";
import img1 from "./assests/images/stopwatch.png";
import img2 from "./assests/images/touch.png";
import img3 from "./assests/images/analysis.png";

//Json Files (Data)
import questions from "./assests/questions/questions.json";
import contenu from "./assests/contenu.json";

//Material Tailwind (UI)
import { Progress } from "@material-tailwind/react";

//Styles (UI)
import "./App.css";
import { Select } from "antd";
import TextField from "@mui/material/TextField";

import { Toaster, toast } from "react-hot-toast";

import axios from "axios";

function App() {
  useEffect(() => {
    getFournisseur();
  }, []);

  const [number, setNumber] = useState(0);
  const [fournisseur, setFournisseur] = useState("Selectionner un fournisseur");
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");

  async function getFournisseur() {
    const response = await axios.get("http://localhost:8000/users");
    console.log(response.data);
  }

  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email)
      return "L'adresse e-mail est obligatoire. Veuillez entrer une adresse e-mail valide.";
    else if (!regex.test(email))
      return "Format d'adresse e-mail invalide. Veuillez entrer une adresse e-mail valide.";
    else return true;
  };
  const phoneValidation = (phone) => {
    const regex = /^(\+33|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
    if (!phone)
      return "Le numéro de téléphone est obligatoire. Veuillez entrer un numéro de téléphone valide.";
    else if (!regex.test(phone))
      return "Format de numéro de téléphone invalide. Veuillez entrer un numéro de téléphone valide.";
    else return true;
  };
  const nameValidation = (name) => {
    const regex = /^[a-zA-Z]+$/;
    if (!name) return "Le nom est obligatoire. Veuillez entrer un nom valide.";
    else if (!regex.test(name))
      return "Format de nom invalide. Veuillez entrer un nom valide.";
    else return true;
  };
  const prenomValidation = (prenom) => {
    const regex = /^[a-zA-Z]+$/;
    if (!prenom)
      return "Le prénom est obligatoire. Veuillez entrer un prénom valide.";
    else if (!regex.test(prenom))
      return "Format de prénom invalide. Veuillez entrer un prénom valide.";
    else return true;
  };
  const addresseValidation = (addresse) => {
    if (!addresse)
      return "L'adresse est obligatoire. Veuillez entrer une adresse valide.";
    else return true;
  };

  const hundleFournisseur = (value) => {
    setFournisseur(value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeAddresse = (e) => {
    setAddresse(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleSubmit = () => {
    if (number === 0) {
      if (fournisseur === "Selectionner un fournisseur") {
        toast.error("Veuillez selectionner un fournisseur");
      } else {
        setNumber(number + 1);
      }
    } else if (number === 1) {
      if (addresseValidation(addresse) !== true) {
        toast.error(addresseValidation(addresse));
      } else {
        setNumber(number + 1);
      }
    } else if (number === 2) {
      if (emailValidation(email) !== true) {
        toast.error(emailValidation(email));
      } else {
        setNumber(number + 1);
      }
    } else if (number === 3) {
      if (nameValidation(name) !== true) {
        toast.error(nameValidation(name));
      } else if (prenomValidation(prenom) !== true) {
        toast.error(prenomValidation(prenom));
      } else if (phoneValidation(phone) !== true) {
        toast.error(phoneValidation(phone));
      } else {
        console.log("ok");
        const userData = {
          fournisseur: fournisseur,
          addresse: addresse,
          email: email,
          name: name,
          prenom: prenom,
          phone: phone,
        };

        axios
          .post("http://localhost:8000/users", userData)
          .then((response) => {
            console.log("User created successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      }
    }
  };

  return (
    <div className="flex w-screen flex-col items-center justify-center main">
      <Toaster />
      <nav className="flex w-screen p-5 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <a href="/" className="h-auto">
          <img src={logo} alt="logo" className="w-52" />
        </a>
      </nav>
      <div className="mt-5 flex w-2/4 flex-col items-center justify-center main">
        <div className=" flex gap-4 w-full justify-between">
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
        <div className="relative mx-auto w-full max-w-2xl mb-12 mt-7 text-center text-4xl text-customGray ">
          {questions.question[number].title}
        </div>

        {number > 0 && (
          <a
            href="#_"
            style={{
              alignSelf: "flex-start",
            }}
            onClick={() => setNumber(number - 1)}
            className="group relative mr-4 inline-flex items-center overflow-hidden rounded-[16px] border-2 border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
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
        <h1 className="py-4 text-2xl md:text-xl text-textBlue self-start">
          {questions.question[number].question}
        </h1>

        {/* <Question question={questions.question[number]} /> */}
        <div className="w-full flex justify-start">
          {number === 1 && (
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <p className="text-">{questions.question[number]?.hint}</p>
              <TextField
                id="adresse"
                label="adresse"
                variant="outlined"
                value={addresse}
                onChange={handleChangeAddresse}
              />
            </div>
          )}
          {number === 0 && (
            <div className="w-96 mb-11 ">
              <Select
                style={{
                  width: "100%",
                  height: "60px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                options={questions.question[number].reponses.map(
                  (reponse, index) => ({ label: reponse, value: reponse })
                )}
                onChange={hundleFournisseur}
                value={fournisseur}
              />
            </div>
          )}
          {number === 2 && (
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <p>{questions.question[number]?.hint}</p>
              <TextField
                id="email"
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
              />
            </div>
          )}
          {number === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>{questions.question[number]?.hint}</p>
                <h1 className="py-4 text-lg md:text-xl text-textBlue">
                  {questions.question[number].questions[0].question}
                </h1>
                <TextField
                  id="nom"
                  label="nom"
                  variant="outlined"
                  value={name}
                  onChange={(e) => handleChangeName(e)}
                />
              </div>
              <div>
                <h1 className="py-4 text-xl md:text-xl text-textBlue">
                  {questions.question[number].questions[1].question}
                </h1>
                <TextField
                  id="prenom"
                  label="prenom"
                  variant="outlined"
                  value={prenom}
                  onChange={(e) => handleChangePrenom(e)}
                />
              </div>
              <div>
                <h1 className="py-4 text-xl md:text-xl text-textBlue">
                  {questions.question[number].questions[2].question}
                </h1>
                <TextField
                  id="phone"
                  label="phone"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => handleChangePhone(e)}
                />
              </div>
            </div>
          )}
        </div>
        <hr />

        {number < questions.question.length - 1 && (
          <a
            href="#_"
            onClick={() => handleSubmit()}
            style={{
              alignSelf: "flex-start",
            }}
            className="group relative inline-flex items-center overflow-hidden rounded-[16px] mt-4 border-2 border-indigo-600 px-12 py-3 text-lg font-medium text-indigo-600 hover:bg-gray-50 hover:text-white"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-indigo-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
              <svg
                className="h-5 w-5"
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
            <span className="relative">
              &nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </a>
        )}

        {number === questions.question.length - 1 && (
          <a
            href="#_"
            onClick={() => handleSubmit()}
            style={{
              alignSelf: "flex-end",
            }}
            class="mt-5 w-40 flex items-center justify-center rounded px-6 py-3 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-10 h-40 mt-16 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative text-center text-lg">Envoyer</span>
          </a>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="card m-auto">
        <img src={img1} alt="image" className="w-10" />
        <div>
          <h1>{contenu.cards[0].title}</h1>
          <p>{contenu.cards[0].description}</p>
        </div>
      </div>
      <div className="card">
        <img src={img2} alt="image" className="w-10" />
        <div>
          <h1>{contenu.cards[1].title}</h1>
          <p>{contenu.cards[1].description}</p>
        </div>
      </div>
      <div className="card">
        <img src={img3} alt="image" className="w-10" />
        <div>
          <h1>{contenu.cards[2].title}</h1>
          <p>{contenu.cards[2].description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
