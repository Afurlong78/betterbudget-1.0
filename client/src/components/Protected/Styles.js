import styled from "styled-components";
import { keyframes } from "styled-components";

export const LockedBG = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;

  font-size: 2.5rem;

  letter-spacing: 0.8px;
`;

export const textAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const TextContainer = styled.div`
  color: white;

  margin-top: 90px;

  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  letter-spacing: 0.8px;

  padding: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  z-index: 1;

  transition: all 300ms;
  animation: 300ms ease-out 0s 1 ${textAnimation};
`;

export const Shade = styled.div`
  height: 100vh;
  width: 100%;

  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;
