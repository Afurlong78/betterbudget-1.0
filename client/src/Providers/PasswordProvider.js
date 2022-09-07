import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const PasswordContext = React.createContext();

export const usePassword = () => {
  return useContext(PasswordContext);
};

export function PasswordProvider({ children }) {
  const recover_url = "https://bb-server-production.up.railway.app/api/posts/password-recovery";

  const storedToken = localStorage.getItem("token");
  const [userEmail, setUserEmail] = useState("");
  const [clicked, setClicked] = useState(false);

  //generate password state
  const [passwordCharSet, setPasswordCharSet] = useState([
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
    "z", 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [scrambledCharSet, setScrambledCharSet] = useState([]);
  const [newPassword, setNewPassword] = useState();

  
  //password recovery error handling
  const [emailError, setEmailError] = useState();


  //loader animation state
  const [submitted, setSubmitted] = useState(false);


  function shuffle(array) {
    let shuffledArray = [];
    let usedIndexes = [];

    let i = 0;
    while (i < array.length) {
      let randomNumber = Math.floor(Math.random() * array.length);
      if (!usedIndexes.includes(randomNumber)) {
        shuffledArray.push(array[randomNumber]);
        usedIndexes.push(randomNumber);
        i++;
      }
    }
    setScrambledCharSet(shuffledArray);
    let spliced = shuffledArray.splice(0, 9);
    let joined = spliced.join("");
    setNewPassword(joined);
    usedIndexes = [];
    shuffledArray = [];
  }

  useEffect(() => {
    shuffle(passwordCharSet);
  }, [clicked]);

  const recoverHandler = (e) => {
    e.preventDefault();

    setClicked(!clicked);
    setSubmitted(true);

    const generatePassword = (arr) => {
      let min = 6;
      let max = 15;
      let pass = "";

      let passwordLength = Math.floor(Math.random() * (max - min) + min);

      for (let i = 0; i <= passwordLength; i++) {
        pass += arr[i];
      }
      setNewPassword(pass);
      // console.log(newPassword);
    };
    generatePassword(scrambledCharSet);

    axios
      .put(recover_url, {
        email: userEmail,
        password: newPassword,
      })
      .then((response) => {
        // console.log(response);
        setEmailError("");
        setSubmitted(false);
      })
      .catch((err) => {
        console.log(err);
        setEmailError(err.response.data.data);
        setSubmitted(false);
      });

    setUserEmail("");
  };

  const password_object = {
    recoverHandler,
    setUserEmail,
    userEmail,
    setEmailError,
    emailError, 
    setSubmitted,
    submitted
  };

  return (
    <PasswordContext.Provider value={password_object}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordProvider;
