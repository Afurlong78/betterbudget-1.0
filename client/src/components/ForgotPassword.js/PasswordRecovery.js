import React, { useState, useEffect } from "react";
import Styled from "../Global/GlobalStyles";
import WallPaper from "../Global/WallPaper";
import { usePassword } from "../../Providers/PasswordProvider";
import { BsPatchQuestionFill } from "react-icons/bs";
import {
  FormBtnRow,
  AnnoyingTextContainer,
  LoadingContainer,
  SpinnerContainer,
  RedSpinner,
  BlueSpinner,
  GreenSpinner,
} from "./Styles";

function PasswordRecovery() {
  const { recoverHandler, setUserEmail, userEmail, emailError, submitted } =
    usePassword();

  return (
    <Styled.Canvas>
      <WallPaper />
      <Styled.FormContainer className="shadow">
        <Styled.FormIconColumn>
          <Styled.FormIcon>
            <BsPatchQuestionFill
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
            <Styled.FormHeaderText>Forgot Password?</Styled.FormHeaderText>
          </Styled.FormHeaderTextContainer>
          <Styled.FormInputContainer className="">
            {!submitted ? (
              <AnnoyingTextContainer className="">
                Please enter your email below and a new password wil sent to
                you. Once you get your new password and login, use the
                navigatation tool to locate the Update link to create a new
                password for yourself.
              </AnnoyingTextContainer>
            ) : (
              <SpinnerContainer>
                Loading...
                <RedSpinner />
                <BlueSpinner />
                <GreenSpinner />
              </SpinnerContainer>
            )}

            <Styled.Column className="">
              <Styled.InputRow className="">
                <strong>Email :</strong>
                <Styled.Input
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  placeholder="Enter Your Email..."
                />
              </Styled.InputRow>
              {!emailError ? (
                <Styled.Error></Styled.Error>
              ) : (
                <Styled.Error>{emailError}</Styled.Error>
              )}
            </Styled.Column>
          </Styled.FormInputContainer>

          <FormBtnRow className="">
            <Styled.FormBtn onClick={recoverHandler} className="">
              <strong>Recover</strong>
            </Styled.FormBtn>
          </FormBtnRow>
        </Styled.FormInputColumn>
      </Styled.FormContainer>
    </Styled.Canvas>
  );
}

export default PasswordRecovery;
