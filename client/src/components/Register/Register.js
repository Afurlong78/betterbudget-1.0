import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "../Global/GlobalStyles";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import WallPaper from "../Global/WallPaper";
import { FormBtnRow, FormTextContainer } from "./Styles";

function Register() {
  const url = "https://bb-server-production.up.railway.app/api/user/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [successfulRegistry, setSuccessfulResgistry] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const closeRegistry = () => {
    setSuccessfulResgistry(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password === confirmPassword) {
      axios
        .post(url, {
          email: email,
          password: password,
        })
        .then(function (response) {
          // console.log(response);
          // navigate("/login");
          setLoading(false);
          setSuccessfulResgistry(true);

          setEmailError("");
          setPasswordError("");
        })
        .catch(function (error) {
          console.log(error, "error");
          setLoading(false);

          let err = error.response.data;
          console.log(err);

          if (err.includes("email")) {
            // console.log("the email is the error.");
            setEmailError(err);
            setPasswordError("");
          }
          if (err.includes("password")) {
            // console.log("the password is the erorr.");
            setPasswordError(err);
            setEmailError("");
          }
        });
    } else {
      setConfirmPasswordError("Your passwords must match.");
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Styled.Canvas>
      <WallPaper />
      <Styled.SuccessfulRegistryContainer status={successfulRegistry}>
        <Styled.CloseSuccessfulRegistry onClick={closeRegistry}>
          <AiFillCloseCircle style={{ height: "100%", width: "100%" }} />
        </Styled.CloseSuccessfulRegistry>
        <Styled.SuccessTextContainer>
          <Styled.SuccessHeaderText>
            Congratulations! <GiPartyPopper className="ms-3" />
          </Styled.SuccessHeaderText>
          You have successfully registered an account with BetterBudget. You
          should be recieving an email to confirm that you have registered.
          Please click the link provieded in the email to confirm your account
          email and begin budgeting!
        </Styled.SuccessTextContainer>
      </Styled.SuccessfulRegistryContainer>

      <Styled.SuccessfulRegistryContainer status={loading}>
        <Styled.SpinnerContainer>
          Registering...
          <Styled.RedSpinner />
          <Styled.BlueSpinner />
          <Styled.GreenSpinner />
        </Styled.SpinnerContainer>
      </Styled.SuccessfulRegistryContainer>
      <Styled.FormContainer className="shadow" onSubmit={submitHandler}>
        <Styled.FormIconColumn>
          <Styled.FormIcon>
            <FaPencilAlt
              style={{
                height: "100%",
                width: "100%",
                transform: "rotateY(180deg)",
              }}
            />
          </Styled.FormIcon>
        </Styled.FormIconColumn>
        <Styled.FormInputColumn>
          <Styled.FormHeaderTextContainer className="">
            <Styled.FormHeaderText>Register</Styled.FormHeaderText>
          </Styled.FormHeaderTextContainer>
          <Styled.FormInputContainer className="">
            <Styled.Column>
              <Styled.InputRow className="">
                <FormTextContainer>
                  <strong>Email :</strong>
                </FormTextContainer>
                <Styled.Input
                  placeholder="Enter Your Email..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Styled.InputRow>
              {!emailError ? (
                <Styled.Error></Styled.Error>
              ) : (
                <Styled.Error>{emailError}</Styled.Error>
              )}
            </Styled.Column>
            <Styled.Column>
              <Styled.InputRow className="">
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
              {!passwordError ? (
                <Styled.Error></Styled.Error>
              ) : (
                <Styled.Error>{passwordError}</Styled.Error>
              )}
            </Styled.Column>
            <Styled.Column>
              <Styled.InputRow className="">
                <FormTextContainer>
                  <strong>Confirm Password :</strong>
                </FormTextContainer>
                <Styled.Input
                  placeholder="Confirm Your Password..."
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                />
              </Styled.InputRow>
              {!confirmPasswordError ? (
                <Styled.Error></Styled.Error>
              ) : (
                <Styled.Error>{confirmPasswordError}</Styled.Error>
              )}
            </Styled.Column>
          </Styled.FormInputContainer>
          <FormBtnRow>
            <Styled.FormBtn onClick={submitHandler}>
              <strong>Register</strong>
            </Styled.FormBtn>
          </FormBtnRow>
        </Styled.FormInputColumn>
      </Styled.FormContainer>
    </Styled.Canvas>
  );
}

export default Register;
