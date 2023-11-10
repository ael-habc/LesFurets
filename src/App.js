import React, { useState } from "react";

//Assets (Images)
import logo from "./assests/images/logo2.png";
import img1 from "./assests/images/stopwatch.png";
import img2 from "./assests/images/touch.png";
import img3 from "./assests/images/analysis.png";


//CSS (Styles)
import "./App.css";
import "./components/Card.css";

//Json Files (Data)
import questions from "./assests/questions/questions.json";
import contenu from "./assests/contenu.json";

//Custom Components
import { Select } from "antd";
import TextField from "@mui/material/TextField";
import ProgressBar from "react-bootstrap/ProgressBar";

//Components
import Modal1 from "./components/Modal1";
import Modal2 from "./components/Modal2";
import Modal3 from "./components/Modal3";

import { Checkbox } from "antd";

import axios from "axios";

function App() {
  // useEffect(() => {
  //   getFournisseur();
  // }, []);

  const [number, setNumber] = useState(0);
  const [fournisseur, setFournisseur] = useState("Selectionner un fournisseur");
  const [email, setEmail] = useState("");
  const [addresse, setAddresse] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [fournisseurError, setFournisseurError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addresseError, setAddresseError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [check1Error, setCheck1Error] = useState("");
  const [check2Error, setCheck2Error] = useState("");

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [seccess, setSeccess] = useState(false);

  // async function getFournisseur() {
  //   const response = await axios.get("http://localhost:8000/users");
  //   console.log(response.data);
  // }

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

  const addresseValidation = (addresse) => {
    if (!addresse)
      return "L'adresse est obligatoire. Veuillez entrer une adresse valide.";
    else return true;
  };

  const hundleFournisseur = (value) => {
    setFournisseur(value);
    setFournisseurError("");
    setTimeout(() => {
      setNumber(number + 1);
    }, 600);
  };

  const handleChangeEmail = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };
  const handleChangeAddresse = (e) => {
    setAddresseError("");
    setAddresse(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhoneError("");
    setPhone(e.target.value);
  };
  const handleChangeName = (e) => {
    setNameError("");
    setName(e.target.value);
  };

  const handleChangeCheck1 = (e) => {
    setCheck1Error("");
    setCheck1(e.target.checked);
  };

  const handleChangeCheck2 = (e) => {
    setCheck2Error("");
    setCheck2(e.target.checked);
  };

  const handleSubmit = () => {
    if (number === 0) {
      if (fournisseur === "Selectionner un fournisseur") {
        setFournisseurError("Veuillez selectionner un fournisseur");
      } else {
        setFournisseurError("");
        setNumber(number + 1);
      }
    } else if (number === 1) {
      if (addresseValidation(addresse) !== true) {
        setAddresseError(addresseValidation(addresse));
      } else {
        setAddresseError("");
        setNumber(number + 1);
      }
    } else if (number === 2) {
      if (emailValidation(email) !== true) {
        setEmailError(emailValidation(email));
      } else if (phoneValidation(phone) !== true) {
        setPhoneError(phoneValidation(phone));
      } else {
        setEmailError("");
        setPhoneError("");
        setNumber(number + 1);
      }
    } else if (number === 3) {
      if (nameValidation(name) !== true) {
        setNameError(nameValidation(name));
      } else if (check1 === false) {
        setCheck1Error("Veuillez accepter les conditions d'utilisation");
      } else if (check2 === false) {
        setCheck2Error("Veuillez accepter les offres personnalisées");
      } else {
        setNameError("");
        const userData = {
          fournisseur: fournisseur,
          addresse: addresse,
          email: email,
          name: name,
          phone: phone,
        };

        axios
          .post("http://localhost:8000/users", userData)
          .then((response) => {
            console.log("User created successfully:", response.data);
            setSeccess(true);
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      }
    }
  };

  return (
    <>
      {!seccess && (
        <div className="flex w-screen flex-col items-center justify-center ">
          {/* NavBar */}
          <nav className="flex w-screen p-4 pl-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <a href="/" className="h-auto">
              <img src={logo} alt="logo" className="w-52" />
            </a>
          </nav>
          {/* Main div */}
          <div className="mt-5 flex w-2/4 flex-col items-center justify-center main">
            {/* progress bar div */}
            <div className="flex w-full justify-between gap-2">
              <ProgressBar
                now={100}
                style={{
                  width: `${((number + 1) / questions.question.length) * 100}%`,
                }}
              />
              <ProgressBar
                now={number * 100}
                style={{
                  width: `${((number + 1) / questions.question.length) * 100}%`,
                  transition: "width 0.5s ease-in-out",
                  alignSelf: "flex-start",
                }}
              />
              <ProgressBar
                now={(number - 1 <= 0 ? 0 : number) * 100}
                style={{
                  width: `${((number + 1) / questions.question.length) * 100}%`,
                  transition: "width 0.5s ease-in-out",
                  alignSelf: "flex-start",
                }}
              />
              <ProgressBar
                now={(number - 2 <= 0 ? 0 : number) * 100}
                style={{
                  width: `${((number + 1) / questions.question.length) * 100}%`,
                  transition: "width 0.5s ease-in-out",
                  alignSelf: "flex-start",
                  marginBottom: "20px",
                }}
              />
            </div>
            <div className="relative mx-auto w-full max-w-2xl mb-12 text-center text-2xl text-customGray ">
              {questions.question[number].title}
            </div>

            {number > 0 && (
              <a
                href="#_"
                style={{
                  alignSelf: "flex-start",
                }}
                onClick={() => setNumber(number - 1)}
                className="group relative mr-4 inline-flex items-center overflow-hidden rounded-[16px] border-2 border-blue-600 px-20 py-3 text-lg font-medium text-blue-600 hover:bg-gray-50 hover:text-white"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-blue-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
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
                <span className="relative">Retour</span>
              </a>
            )}
            <h1 className="py-4 text-2xl font-bold text-textBlue self-start">
              {questions.question[number].question}
            </h1>
            <div className="w-full flex justify-start">
              {number === 1 && (
                <div className="flex flex-col gap-4 w-4/4">
                  <p className="text-gray-600 text-xl">
                    {questions.question[number]?.hint}
                  </p>
                  <TextField
                    error={addresseError ? true : false}
                    id="adresse"
                    label="Adresse"
                    variant="outlined"
                    helperText={addresseError}
                    className="w-3/4"
                    value={addresse}
                    onChange={handleChangeAddresse}
                  />
                </div>
              )}
              {number === 0 && (
                <div className="w-5/6">
                  <Select
                    status={fournisseurError ? "error" : "valid"}
                    style={{
                      width: "100%",
                      height: "70px",
                      fontSize: "20px",
                    }}
                    options={questions.question[number].reponses.map(
                      (reponse, index) => ({ label: reponse, value: reponse })
                    )}
                    onChange={hundleFournisseur}
                    value={fournisseur}
                  />
                  <p className="text-red-500 text-sm">{fournisseurError}</p>
                </div>
              )}
              {number === 2 && (
                <div className="flex flex-col gap-4 w-full ">
                  <p className="text-gray-600 text-xl">
                    {questions.question[number]?.hint}
                  </p>
                  <TextField
                    error={emailError ? true : false}
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    helperText={emailError}
                    className="w-2/4"
                    onChange={(e) => handleChangeEmail(e)}
                  />
                  <TextField
                    error={phoneError ? true : false}
                    id="phone"
                    label="Téléphone"
                    variant="outlined"
                    value={phone}
                    helperText={phoneError}
                    className="w-2/4"
                    onChange={(e) => handleChangePhone(e)}
                  />
                </div>
              )}
              {number === 3 && (
                <div className="flex flex-col gap-4 w-full">
                  <p className="text-gray-600 text-xl">
                    {questions.question[number]?.hint}
                  </p>
                  <TextField
                    error={nameError ? true : false}
                    id="nom"
                    label="Nom et prenom"
                    variant="outlined"
                    helperText={nameError}
                    className="w-2/4"
                    value={name}
                    onChange={(e) => handleChangeName(e)}
                  />
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
                className="group relative inline-flex items-center overflow-hidden rounded-[16px] mt-4 border-2 border-blue-600 px-20 py-3 text-lg font-medium text-blue-600 hover:bg-gray-50 hover:text-white"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-blue-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
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
                <span className="relative">Suivant</span>
              </a>
            )}

            {number === questions.question.length - 1 && (
              <div>
                <br />
                <br />

                <Checkbox onChange={(e) => handleChangeCheck1(e)}>
                  J'accepte <Modal1 /> et d'être contacté par nos partenaires
                  Box Internet si je demande à être mis en relation pour faire
                  des économies.
                </Checkbox>
                <p className="text-red-500 text-sm justify-start mt-1">
                  {check1Error}
                </p>
                <br />
                <Checkbox
                  onChange={(e) => handleChangeCheck2(e)}
                  style={{ width: "100%" }}
                >
                  J'accepte de recevoir des offres personnalisées de
                  meilleurBox.
                </Checkbox>
                <p className="text-red-500 text-sm mt-1">{check2Error}</p>
                <button
                  onClick={() => handleSubmit()}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "20px",
                    width: "300px",
                    height: "80px",
                    fontSize: "20px",
                  }}
                  class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
                  <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      class="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      class="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Je compare les offres pour faire des économies
                  </span>
                </button>
              </div>
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="cardsMain">
            <div className="cards">
              <img src={img1} alt="chrono" className="w-10" />
              <div>
                <h1>{contenu.cards[0].title}</h1>
                <p>{contenu.cards[0].description}</p>
              </div>
            </div>
            <div className="cards">
              <img src={img2} alt="choose" className="w-10" />
              <div>
                <h1>{contenu.cards[1].title}</h1>
                <p>{contenu.cards[1].description}</p>
              </div>
            </div>
            <div className="cards">
              <img src={img3} alt="analyse" className="w-10" />
              <div>
                <h1>{contenu.cards[2].title}</h1>
                <p>{contenu.cards[2].description}</p>
              </div>
            </div>
          </div>
          <footer className="flex w-screen mt-5 bg-slate-200 h-auto px-3 py-3 gap-10 justify-center foot">
            <Modal1 />
            <Modal2 />
            <Modal3 />
          </footer>
        </div>
      )}
      {seccess && (
        <div class="flex items-center justify-center h-screen">
          <div class="w-2/4 h-2/4 p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
            <div class=" h-full flex flex-col items-center p-4 gap-2 space-y-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-600 w-28 h-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 class="text-4xl font-bold  text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Votre demande de comparaison a été enregistrée.
              </h1>
              <p className="text-center text-xl" >
                Un de nos conseillers vous contactera bientôt avec la meilleure
                offre correspondant à vos besoins et votre budget.
              </p>
              <p class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </p>
            </div>
          </div>
          {
            setTimeout(() => {
              window.location.reload();
              setSeccess(false);
            }, 6000)
          }
        </div>
      )}
    </>
  );
}

export default App;
