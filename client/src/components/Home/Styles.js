import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";
import bannerImg from "./assets/bannerimg.jpg";
import { Link } from "react-router-dom";

export const Banner = styled.div`
  width: 100%;

  background-size: cover;
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.75), rgba(0, 0, 0, 0.75)),
    url(${bannerImg});
  /* background-attachtment: fixed; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;

  transition: all 1s;
`;

const headerAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const BannerHeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 700;
  letter-spacing: 0.8px;

  width: 85%;
  margin-top: 125px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease-in-out;

  animation: ${headerAnimation} 700ms;
`;

export const BannerSubHeaderText = styled.h2`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 500;
  letter-spacing: 0.8px;
  width: 85%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease-in-out;

  animation: ${headerAnimation} 800ms;
`;

export const BannerSubHeaderText2 = styled.h3`
  font-family: "Poppins", sans-serif;
  color: white;
  font-weight: 300;
  letter-spacing: 0.8px;

  margin-bottom: 40px;

  transition: all ease-in-out;

  animation: ${headerAnimation} 900ms;
`;

export const BannerBtnRow = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 125px;

  transition: all ease-in-out;

  animation: ${headerAnimation} 900ms;
`;

export const BannerBtn = styled(Link)`
  height: 4rem;
  width: 12rem;

  background: transparent;
  color: white;
  text-decoration: none;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid white;
  border-radius: 8px;

  margin-left: 20px;

  transition: all 0.2s;

  background-image: linear-gradient(to right, transparent 50%, white 50%);
  background-size: 200%;
  background-position: 0%;

  &:hover {
    background-position: 100%;
    color: #292929;
    border: 2px solid white;
  }

  @media all and (max-width: 460px) {
    width: 9rem;
    height: 4rem;

    font-size: 1rem;
  }
`;
export const BannerAnchor = styled.a`
  height: 4rem;
  width: 12rem;

  background: transparent;
  color: white;

  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid white;
  border-radius: 8px;

  text-decoration: none;

  margin-right: 20px;

  transition: all 0.2s;

  background-image: linear-gradient(to right, transparent 50%, white 50%);
  background-size: 200%;
  background-position: 0%;

  &:hover {
    background-position: 100%;
    color: #292929;
    border: 2px solid white;
  }

  @media all and (max-width: 460px) {
    width: 9rem;
    height: 4rem;

    font-size: 1rem;
  }
`;
//------------------------------------------------------------------------------//
//-------------------------------------ABOUT-----------------------------------------//
//-------------------------------------ABOUT-----------------------------------------//
//------------------------------------------------------------------------------//

export const AboutBetterBudget = styled.div`
  width: 85%;

  margin: auto;

  z-index: -1;

  background: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutBetterBudgetHeader = styled.h1`
  color: black;
  width: 100%;

  letter-spacing: 0.8px;
  border-bottom: 2px solid black;

  padding-bottom: 10px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const AboutBetterBudgetText = styled.p`
  color: black;
  width: 100%;

  letter-spacing: 0.8px;
  padding-top: 10px;
  text-indent: 40px;

  font-size: 1rem;

  line-height: 2rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;

//-----------------------------------HOW IT WORKS SECTION-------------------------------------------//
//-----------------------------------HOW IT WORKS SECTION-------------------------------------------//
//-----------------------------------HOW IT WORKS SECTION-------------------------------------------//
//-----------------------------------HOW IT WORKS SECTION-------------------------------------------//

export const HowItWorksContainer = styled.div`
  height: 100%;
  width: 100%;

  // background: #d5d5d5;
  background-image: linear-gradient(white, #d5d5d5);
  letter-spacing: 0.8px;

  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;

  @media all and (max-width: 1580px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HowItWorksHeaderText = styled.h2`
  height: 20rem;
  width: 20rem;

  margin-left: 50px;

  gap: 1rem;

  display: flex;
  justify-content: start;
  align-items: center;

  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  @media all and (max-width: 1580px) {
    margin-left: 0px;
    margin-bottom: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 5rem;
    width: 20rem;
  }
`;

export const HowItWorksCard1 = styled.div`
  height: 20rem;
  width: 20rem;

  margin-top: 55px;
  margin-bottom: 55px;

  color: black;
  background: white;

  border-radius: 10px;
  border: 10px solid #8fa9ff;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 500ms;

  opacity: ${(props) => {
    if (props.status) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  transform: ${(props) => {
    if (props.status) {
      return `translateX(0px)`;
    } else {
      return `translateX(20px)`;
    }
  }};

  @media all and (max-width: 1020px) {
    margin-bottom: 20px;
  }
`;
export const HowItWorksCard2 = styled.div`
  height: 20rem;
  width: 20rem;

  margin-top: 55px;
  margin-bottom: 55px;

  color: black;
  background: white;

  border-radius: 10px;
  border: 10px solid #a8ffd1;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 500ms;

  opacity: ${(props) => {
    if (props.status) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  transform: ${(props) => {
    if (props.status) {
      return `translateX(0px)`;
    } else {
      return `translateX(20px)`;
    }
  }};

  @media all and (max-width: 1020px) {
    margin-bottom: 20px;
  }
`;
export const HowItWorksCardEnd = styled.div`
  height: 20rem;
  width: 20rem;

  margin-top: 55px;
  margin-bottom: 55px;

  color: black;
  background: white;

  border-radius: 10px;
  border: 10px solid #fbff82;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 500ms;

  opacity: ${(props) => {
    if (props.status) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  transform: ${(props) => {
    if (props.status) {
      return `translateX(0px)`;
    } else {
      return `translateX(20px)`;
    }
  }};

  @media all and (max-width: 1020px) {
    margin-bottom: 60px;
  }
`;

export const HowItWorksCardHeaderText = styled.h3`
  margin-top: 30px;

  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

//-----------------------------------FOOTER-------------------------------------------//
//-----------------------------------FOOTER-------------------------------------------//
//-----------------------------------FOOTER-------------------------------------------//
//-----------------------------------FOOTER-------------------------------------------//

export const FooterContainer = styled.div`
  width: 100%;

  padding: 20px;

  background: white;

  font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: black;

  /* border-right: 8px solid #d5d5d5;
  border-left: 8px solid #d5d5d5; */
  border-bottom: 10px solid #d5d5d5;

  @media all and (max-width: 720px) {
    justify-content: center;
  }
`;

export const ForgotPasswordAnchor = styled(Link)`
  color: #373737;
  width: auto;
  position: relative;
  height: auto;

  padding: 8px;

  text-decoration: none;

  font-size: 1rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 60px;

  letter-spacing: 0.8px;

  border: 2px solid transparent;
  border-radius: 8px;

  cursor: pointer;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid #373737;
    transform: scale(1.1);
    color: #373737;
    box-shadow: 4px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }

  @media all and (max-width: 720px) {
    margin-right: 0px;
  }
`;

export const Thanks = styled.div`
  color: #373737;
  width: auto;
  position: relative;
  height: auto;

  padding: 8px;

  text-decoration: none;

  font-size: 1rem;
  font-weight: 500;

  margin-left: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.8px;

  font-family: "Poppins", sans-serif;

  border: 2px solid transparent;
  border-radius: 8px;

  transition: all 0.2s ease-in-out;

  @media all and (max-width: 720px) {
    display: none;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1220px;
  height: auto;

  gap: 5rem;

  transition: all 1s;

  @media all and (max-width: 1350px) {
    gap: 1rem;
  }

  @media all and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    gap: 0rem;
  }
`;
