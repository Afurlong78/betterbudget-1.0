import React from "react";
import {
  SpinnerContainer,
  RedSpinner,
  BlueSpinner,
  GreenSpinner,
} from "./Styles";

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      Loading...
      <RedSpinner />
      <BlueSpinner />
      <GreenSpinner />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
