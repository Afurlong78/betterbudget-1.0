import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderText = styled.h1`
  color: black;
  font-size: 2.5rem;

  margin: 0 auto;
  margin-top: 10px;

  font-family: "Poppins", sans-serif;
`;

export const InputBtnRow = styled.div`
  width: 90%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Poppins", sans-serif;
`;

export const LoginRow = styled.div`
  width: 90%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
`;

export const InputBtn = styled.button`
  height: 100%;
  width: 3rem;
  background: black;
  color: white;

  border-radius: 10px;
  border: 2px solid black;
  margin-right: 10px;

  &:hover {
    background: white;
    color: black;
  }
`;

export const SubmitBtn = styled.button`
  height: 3rem;
  width: 10rem;

  background: black;
  color: white;

  border: 2px solid black;
  border-radius: 10px;

  &:hover {
    background: white;
    color: black;
  }
`;

export const Error = styled.p`
  color: red;
  font-family: "Poppins", sans-serif;

  width: 50%;

  font-size: 0.7rem;
`;

export const LoginSuccessful = styled.p`
  color: #7ccc94;
  font-family: "Poppins", sans-serif;

  height: 1rem;

  font-size: 1rem;
`;

export const LoginErrorContainer = styled.div`
  height: 100px;
  width: 100%;

  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginErrorMessage = styled.div`
  color: red;

  font-family: "Poppins", sans-serif;

  font-size: 1rem;
`;

export const ForgotPasswordAnchor = styled(Link)`
  color: #373737;
  width: auto;
  position: relative;
  height: 2.2rem;

  text-decoration: none;

  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.8px;

  cursor: pointer;

  font-family: "Poppins", sans-serif;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: #373737;
    color: #373737;

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
    color: #373737;
  }

  &:hover {
    color: #373737;
  }

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

export const FormTextContainer = styled.div`
  height: 3rem;
  width: 6rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;
