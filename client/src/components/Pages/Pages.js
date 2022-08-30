import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import NavBar from "../Nav/NavBar";

const MainContent = styled.div`
  height: 100%;
  width: 100%;
`;

const OutletContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Pages() {
  return (
    <MainContent>
      <NavBar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </MainContent>
  );
}

export default Pages;
