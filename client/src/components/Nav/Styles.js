import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;

  background: white;
  color: black;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;
`;

export const NavContainer = styled.button`
  height: 35%;
  position: relative;

  color: black;
  text-decoration: none;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
`;

export const NavBtn = styled(Link)`
  /* height: 35%;
  position: relative;

  color: #292929;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;

  @media all and (max-width: 900px) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: #292929;
    color: #292929;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
    color: #292929;
  }

  &:hover {
    color: #292929;
  } */

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
`;

export const NavShell = styled.button`
  height: 35%;
  position: relative;

  color: black;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  font-family: "Poppins", sans-serif;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: black;
    color: black;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
    color: black;
  }

  &:hover {
    color: black;
  }
`;

export const NavBtnRow = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 30px;

  padding-left: 10px;
  padding-right: 10px;

  @media all and (max-width: 970px) {
    display: none;
  }
`;

export const NavLogo = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  color: #292929;

  margin-left: 30px;

  font-family: "Poppins", sans-serif;

  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  border: none;
  color: #292929;

  background: transparent;

  font-size: 3rem;
  margin-right: 30px;

  z-index: 100;

  @media all and (max-width: 970px) {
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.3);
  }

  @media all and (max-width: 460px) {
    font-size: 1.5rem;
  }
`;

//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//

// const mobileNavAnimations = {
//   true: `translateX(0%)`,
//   false: `translateX(100%)`,
// };

export const MobileMenu = styled.div`
  height: 100%;
  width: 60%;

  background: white;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  margin-top: 90px;

  position: fixed;

  top: 0;
  right: 0;

  padding: 15px;

  box-shadow: -2px 10px 10px 0px rgba(0, 0, 0, 0.3);

  transition: transform 1s;
  transform: ${(props) => {
    if (props.status) {
      return `translateX(0%)`;
    } else {
      return `translateX(110%)`;
    }
  }};

  @media (min-width: 970px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  width: auto;
  height: auto;
  color: #292929;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-height: 650px) {
    display: none;
  }
`;

export const MobileMenuLinkContainer = styled.div`
  height: 50%;
  width: 70%;

  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media all and (max-height: 650px) {
    height: 75%;
  }
`;

export const MobileMenuLink = styled(Link)`
  height: 48px;
  width: 8rem;

  text-decoration: none;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: white;

  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #292929;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  transition: all 0.2s 0.05s ease-in-out;

  &:hover {
    background: white;
    color: #292929;
    border: 2px solid #292929;
    transform: scale(1.1);
    box-shadow: 4px 10px 10px 0px rgba(0, 0, 0, 0.2);
  }

  @media all and (max-height: 800px) {
    margin-bottom: 10px;
  }

  @media all and (max-height: 650px) {
    margin-bottom: 0px;
  }
`;

//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------//
