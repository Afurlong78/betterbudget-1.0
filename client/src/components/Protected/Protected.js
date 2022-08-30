import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "../Global/GlobalStyles";
import Budget from "../Budgets/Budget";
import { LockedBG, Container, Shade, TextContainer } from "./Styles";
import WallPaper from "../Global/WallPaper";

function Protected() {
  const url = "http://localhost:5000/api/posts";

  const storedToken = localStorage.getItem("token");

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
        <Budget />
      )}
    </Container>
  );
}

export default Protected;
