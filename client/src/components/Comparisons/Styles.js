import styled from "styled-components";

export const MainColumn = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  margin-bottom: 100px;
`;

export const MainContainer = styled.div`
  height: 520px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  @media all and (max-width: 1600px) {
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
  }

  @media all and (max-width: 1090px) {
    justify-content: center;
  }
`;

export const ComparisonDropDown = styled.select`
  height: 3rem;
  width: 10rem;

  border-radius: 5px;
  font-size: 1rem;

  border: 2px solid #9f9f9f;

  font-family: "Poppins", sans-serif;

  padding: 10px;
`;

export const SectionHeaderText = styled.h1`
  width: 100%;

  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.8px;
  color: #292929;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//------------------------------------------------//
//----------------------start---------------------//
//------------------------------------------------//

export const ColumnStart = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Row = styled.div`
  height: 50px;
  width: 450px;

  font-size: 1rem;

  font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 650px) {
    height: auto;
    width: 100%;
  }
`;

export const ContentContainerStart = styled.div`
  height: 450px;
  width: 450px;

  @media all and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`;

//------------------------------------------------//
//----------------------end---------------------//
//------------------------------------------------//

export const ContentContainerEnd = styled.div`
  height: 450px;
  width: 450px;

  @media all and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`;

export const ColumnEnd = styled.div`
  height: 100%;
  width: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  @media all and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const RowEnd = styled.h2`
  height: 50px;

  color: black;
  font-size: 1rem;

  font-family: "Poppins", sans-serif;

  width: 450px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`;

export const GetMonthBtn = styled.button`
  height: 3rem;
  width: auto;

  color: #292929;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  padding: 10px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #e5e5e5;
    background: white;
    color: #292929;
  }
`;

//------------------------------------------------//
//----------------------Comparison Borad---------------------//
//------------------------------------------------//

export const ComparisonBoard = styled.div`
  height: 100%;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  position: relative;

  background: white;

  border: 2px solid #cecece;
  border-radius: 5px;

  transition: all 300ms;

  @media all and (max-width: 1600px) {
    height: 500px;
  }

  @media all and (max-width: 1000px) {
    flex-wrap: nowrap;
  }
`;

export const ComparisonBoardHeader = styled.h3`
  width: 100%;
  height: 55px;
  font-size: 1.5rem;

  color: #292929;
  letter-spacing: 0.8px;

  font-family: "Poppins", sans-serif;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid #cecece;

  background: #e5e5e5;
`;

export const ComparisonColumnStart = styled.div`
  width: 250px;
  height: 445px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-right: 1px solid #cecece;

  @media all and (max-width: 580px) {
    width: 50%;
  }
`;
export const ComparisonColumnEnd = styled.div`
  width: 250px;
  height: 445px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-left: 1px solid #cecece;
  border-right: 2px solid #cecece;

  @media all and (max-width: 580px) {
    width: 50%;
    border-right: none;
  }
`;

export const TotalsColumn = styled.div`
  width: 100px;
  height: 445px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  @media all and (max-width: 580px) {
    display: none;
  }
`;

export const ComparisonRow = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  position: absolute;
  top: 65px;
`;

export const ComparisonItem = styled.div`
  width: 100%;

  letter-spacing: 0.8px;
  font-size: 0.9rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;

  color: #292929;

  @media all and (max-width: 580px) {
    font-size: 0.8rem;
  }
`;

export const TotalsItem = styled.div`
  width: 100%;

  letter-spacing: 0.8px;
  font-size: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;

  color: #292929;
`;

export const TotalsHeader = styled.div`
  width: 100%;

  letter-spacing: 0.8px;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 700;

  color: #292929;
`;

export const ComparisonTotals = styled.div`
  width: 100%;
  height: 4rem;

  color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
