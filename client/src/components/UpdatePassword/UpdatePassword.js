import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "../Global/GlobalStyles";
import WallPaper from "../Global/WallPaper";
import { usePassword } from "../../Providers/PasswordProvider";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import {
  FormBtn,
  FormBtnRow,
  FormTextContainer,
  LockedBG,
  Container,
  Shade,
  TextContainer,
} from "./Styles";
import { BiErrorCircle } from "react-icons/bi";

function UpdatePassword() {
  const storedToken = localStorage.getItem("token");
  const update_url =
    "https://bb-server-production.up.railway.app/api/posts/update";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //error handling state
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  //success confirmation state
  const [successfulRegistry, setSuccessfulResgistry] = useState(false);

  const closeRegistry = () => {
    setSuccessfulResgistry(false);
  };

  const updateHandler = (e) => {
    e.preventDefault();

    if (userPassword === confirmPassword) {
      axios
        .put(
          update_url,
          {
            email: userEmail,
            password: userPassword,
          },
          {
            headers: {
              ["Authorization"]: storedToken,
            },
          }
        )
        .then((response) => {
          // console.log(response);
          setUserPassword("");
          setConfirmPassword("");
          setUserEmail("");
          setSuccessfulResgistry(true);
        })
        .catch((error) => {
          console.log(error);

          setUserPassword("");
          setConfirmPassword("");
          setUserEmail("");

          if (error.response.data.data === "User does not exist.") {
            setEmailError(error.response.data.data);
          }

          let err = error.response.data;

          if (err?.includes("email")) {
            setEmailError(err);
            setPasswordError("");
            setConfirmPasswordError("");
          }

          if (err?.includes("password")) {
            // console.log("the password is the erorr.");
            setPasswordError(err);
            setConfirmPasswordError(err);
            setEmailError("");
          }
        });
    } else {
      setConfirmPasswordError("passwords do not match.");
      setPasswordError("passwords do not match.");
    }
  };

  const {} = usePassword();

  return (
    <Container>
      {!storedToken ? (
        <LockedBG>
          <Shade>
            <WallPaper />
            <TextContainer>
              <strong>
                "You do not have permission to view this page, please log in."
              </strong>
            </TextContainer>
          </Shade>
        </LockedBG>
      ) : (
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
              You have successfully updated your account password!
            </Styled.SuccessTextContainer>
          </Styled.SuccessfulRegistryContainer>

          <Styled.FormContainer className="shadow">
            <Styled.FormIconColumn>
              <Styled.FormIcon>
                <BsShieldFillCheck
                  style={{
                    height: "100%",
                    width: "100%",
                    color: "white",
                  }}
                />
              </Styled.FormIcon>
            </Styled.FormIconColumn>
            <Styled.FormInputColumn>
              <Styled.FormHeaderTextContainer className="">
                <Styled.FormHeaderText>Update Password</Styled.FormHeaderText>
              </Styled.FormHeaderTextContainer>
              <Styled.FormInputContainer className="">
                <Styled.Column>
                  <Styled.InputRow className="">
                    <FormTextContainer>
                      <strong>Email :</strong>
                    </FormTextContainer>
                    <Styled.Input
                      placeholder="Enter Your Email..."
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
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
                      <strong>New Password :</strong>
                    </FormTextContainer>
                    <Styled.Input
                      placeholder="Enter Your New Password..."
                      onChange={(e) => setUserPassword(e.target.value)}
                      value={userPassword}
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
                      placeholder="Confirm Your New Password..."
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
                <Styled.FormBtn onClick={updateHandler}>
                  <strong>Update</strong>
                </Styled.FormBtn>
              </FormBtnRow>
            </Styled.FormInputColumn>
          </Styled.FormContainer>
        </Styled.Canvas>
      )}
    </Container>
  );
}

export default UpdatePassword;
