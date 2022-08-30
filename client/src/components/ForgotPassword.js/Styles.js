import styled from "styled-components";
import { keyframes } from "styled-components";

export const FormBtnRow = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnnoyingTextContainer = styled.p`
  height: 50%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;

  color: #373737;

  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.8px;
  /* font-weight: 300; */
`;

export const FormBtnTextContainer = styled.div``;

export const LoadingContainer = styled.div`
  height: auto;
  width: auto;

  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;

//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//
//-------------------------------------------------------------------//

export const SpinnerContainer = styled.div`
  height: 200px;
  width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;

  overflow: hidden;

  position: relative;
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
        transform: rotate(-360deg);
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
