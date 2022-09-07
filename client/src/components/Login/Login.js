import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styled from "../Global/GlobalStyles";
import axios from "axios";
import { useSignIn } from "../../Providers/SignInProvider";
import WallPaper from "../Global/WallPaper";
import {
  LoginErrorContainer,
  ForgotPasswordAnchor,
  LoginErrorMessage,
  FormTextContainer,
} from "./Styles";
import { BiLockOpen } from "react-icons/bi";

function Login() {
  const url = "https://bb-server-production.up.railway.app/api/user/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { loginStatus, setLoginStatus, logOutHandler } = useSignIn();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.id);
        if (response.data.success === true) {
          setLoginStatus(true);
          navigate("/protected");
        }
      })
      .catch(function (error) {
        setLoading(false);
        setError(
          "Email or Password does not match. Please make sure that you have registered your account and that you have entered the proper credentials."
        );
        console.log(error, "error message");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <Styled.Canvas>
      <WallPaper />
      <Styled.SuccessfulRegistryContainer status={loading}>
        <Styled.SpinnerContainer>
          Logging in...
          <Styled.RedSpinner />
          <Styled.BlueSpinner />
          <Styled.GreenSpinner />
        </Styled.SpinnerContainer>
      </Styled.SuccessfulRegistryContainer>
      <Styled.FormContainer className="shadow" onSubmit={submitHandler}>
        <Styled.FormIconColumn>
          <Styled.FormIcon>
            <BiLockOpen
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </Styled.FormIcon>
        </Styled.FormIconColumn>
        <Styled.FormInputColumn>
          <Styled.FormHeaderTextContainer className="">
            <Styled.FormHeaderText>Log In</Styled.FormHeaderText>
          </Styled.FormHeaderTextContainer>
          <Styled.FormInputContainer className="">
            <LoginErrorContainer className="">
              {!error ? (
                <LoginErrorContainer></LoginErrorContainer>
              ) : (
                <LoginErrorMessage className="">{error}</LoginErrorMessage>
              )}
              {/* {!emailError ? <Error></Error> : <Error>Incorrect Email</Error>}
              {!passwordError ? (
                <Error></Error>
              ) : (
                <Error>Incorrect Password</Error>
              )} */}
            </LoginErrorContainer>
            <Styled.Column>
              <Styled.InputRow className="mb-5">
                <FormTextContainer>
                  <strong>Email :</strong>
                </FormTextContainer>
                <Styled.Input
                  placeholder="Enter Your Email..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Styled.InputRow>
            </Styled.Column>
            <Styled.Column>
              <Styled.InputRow className="mb-3">
                <FormTextContainer>
                  <strong>Password :</strong>
                </FormTextContainer>
                <Styled.Input
                  placeholder="Enter Your Password..."
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                />
              </Styled.InputRow>
            </Styled.Column>
          </Styled.FormInputContainer>
          <Styled.FormBtnRow>
            <Styled.FormBtn onClick={submitHandler}>
              <strong>Log In</strong>
            </Styled.FormBtn>
            <ForgotPasswordAnchor to="/password-recovery">
              Forgot Password?
            </ForgotPasswordAnchor>
          </Styled.FormBtnRow>
        </Styled.FormInputColumn>
      </Styled.FormContainer>
    </Styled.Canvas>
  );
}

export default Login;
