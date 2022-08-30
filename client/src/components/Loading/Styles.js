import styled from "styled-components";
import { keyframes } from "styled-components";

export const SpinnerContainer = styled.div`
  height: 150px;
  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  background:red;

  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 700;

  overflow: hidden;

  position: relative;

  mix-blend-mode: overlay;
`;

const redSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const RedSpinner = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-left-color: #ff8196;

  animation: ${redSpinnerAnimation} 3s ease-in-out infinite;

  z-index: 11;
`;

const blueSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const BlueSpinner = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-top-color: #8fa9ff;

  animation: ${blueSpinnerAnimation} 2s ease-out infinite;
`;

const greenSpinnerAnimation = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const GreenSpinner = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid transparent;

  border-right-color: #a8ffd1;

  animation: ${greenSpinnerAnimation} 1.5s ease-in infinite;
`;
