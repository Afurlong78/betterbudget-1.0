import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const SignInContext = React.createContext();

export const useSignIn = () => {
  return useContext(SignInContext);
};

export function SignInProvider({ children }) {
  const url = "http://localhost:5000/api/user/login";
  let token = localStorage.getItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  const logOutHandler = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoginStatus(false);
    console.log("clicked");
  };

  const sign_in = {
    logOutHandler,
    loginStatus,
    setLoginStatus,
  };

  return (
    <SignInContext.Provider value={sign_in}>{children}</SignInContext.Provider>
  );
}

export default SignInProvider;
