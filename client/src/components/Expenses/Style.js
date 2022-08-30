import styled from "styled-components";
import { keyframes } from "styled-components";

export const ExpenseContainer = styled.div`
  height: 500px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10px;
  gap: 1rem;

  @media all and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const ExpenseDisplay = styled.div`
  height: 500px;
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media all and (max-width: 1600px) {
    width: 100%;
  }
`;

export const ChartDisplay = styled.div`
  height: 500px;
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 550px) {
    height: auto;
    width: 95%;
  }
`;

export const ChartContainer = styled.div`
  width: auto;

  display: flex;
  justify-content: end;
  align-items: center;

  @media all and (max-width: 1600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 20px;
  }

  @media all and (max-width: 900px) {
    flex-direction: column;
  }
`;

//---------------------------------------------------------------------------------------//
//----------------------------------------data display for graph----------------------------//
//---------------------------------------------------------------------------------------//

export const GraphDisplay = styled.div`
  height: 500px;
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;

  background: white;

  border: 2px solid #cecece;
  border-radius: 8px;

  @media all and (max-width: 900px) {
    margin-top: 15px;
  }
`;

export const GraphDisplayHeaderText = styled.h1`
  width: 100%;
  height: 55px;
  font-size: 1.5rem;

  color: black;
  letter-spacing: 0.8px;

  font-family: "Poppins", sans-serif;

  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 0;

  border-radius: 4px 4px 0px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid #cecece;

  background: #e5e5e5;
`;

export const GraphDisplayColumn = styled.div`
  height: 445px;
  width: 100%;

  color: black;

  position: absolute;

  top: 55px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 5px;
`;

export const GraphDisplayItem = styled.div`
  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 5px;
  margin-top: 5px;

  border-radius: 8px 0px 8px 0px;

  color: black;
`;

export const BudgetDisplayItem = styled.div`
  background: #e5e5e5;

  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 10px;
  margin-top: 5px;

  border-radius: 8px 0px 8px 0px;

  color: black;
`;

export const EntertainmentDisplayItem = styled.div`
  background: #ff8196;

  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 10px;
  margin-top: 5px;

  border-radius: 8px;

  color: black;
`;
export const GroceriesDisplayItem = styled.div`
  background: #8fa9ff;

  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 10px;
  margin-top: 5px;

  border-radius: 8px;

  color: black;
`;
export const BillsDisplayItem = styled.div`
  background: #a8ffd1;

  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 10px;
  margin-top: 5px;

  border-radius: 8px;

  color: black;
`;
export const OtherDisplayItem = styled.div`
  background: #fbff82;

  width: 100%;
  height: 100%;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  margin-bottom: 10px;
  margin-top: 5px;

  border-radius: 8px;

  color: black;
`;

export const GraphValueDisplay = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center; ;
`;

export const GraphSumContainer = styled.div`
  width: 100%;
  height: 55px;
  font-size: 1.5rem;

  color: black;
  letter-spacing: 0.8px;

  font-family: "Poppins", sans-serif;

  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//---------------------------------------------------------------------------------------//
//----------------------------------------data display for graph----------------------------//
//---------------------------------------------------------------------------------------//

export const ExpenseHeaderText = styled.h3`
  height: 100px;
  width: 100%;
  font-family: "Poppins", sans-serif;

  color: #292929;

  font-size: 2.5rem;
  letter-spacing: 0.8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: auto;
  }
`;

export const ExpenseBtnRow = styled.div`
  width: 22rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 800px) {
    margin-top: 10px;
    margin-bottom: 10px;

    width: 95%;
  }
`;

export const ExpensesListed = styled.div`
  height: 400px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  overflow-y: scroll;

  transition: all 1s ease-in-out;

  ::-webkit-scrollbar {
    width: 0.7em;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: #9f9f9f;
    border-radius: 10px;
  }
`;

//---------------------------------------------------------------------------------------//
//----------------------------------------comparison----------------------------//
//---------------------------------------------------------------------------------------//

export const SaveComparisonBtn = styled.button`
  height: 3rem;
  width: 5rem;

  font-size: 1rem;

  background: #e5e5e5;
  border: 2px solid #cecece;
  border-radius: 5px;

  color: #292929;
  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #e5e5e5;
    background: white;
    color: black;
  }

  @media all and (max-width: 460px){
    font-size: 0.9rem;
    width: 4.5rem;
  }
`;

export const ComparisonDropDown = styled.select`
  height: 3rem;
  width: 10rem;

  border-radius: 5px;
  font-size: 1rem;

  color: #292929;

  border: 2px solid #9f9f9f;

  font-family: "Poppins", sans-serif;

  padding: 10px;

  @media all and (max-width: 460px){
    font-size: 0.9rem;
    width: 8rem;
  }
`;

//---------------------------------------------------------------------------------------//
//----------------------------------------expense item styles----------------------------//
//---------------------------------------------------------------------------------------//

export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ExpenseItemContainer = styled.div`
  width: 100%;
  height: 50px;

  // border-top: 2px solid grey;
  border-bottom: 1px solid #e5e5e5;

  padding: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;

  margin-bottom: 5px;

  transition: all 500ms ease-in-out;

  animation: 500ms ease-out 0s 1 ${slideInFromLeft};

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

export const ExpenseItemStyle = styled.div`
  font-family: "Poppins", sans-serif;

  height: 50px;
  width: 8rem;
  color: black;

  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ExpenseItemBtn = styled.button`
  height: 100%;
  width: auto;

  font-size: 1rem;

  background: #e5e5e5;
  border-radius: 5px;

  color: #292929;
  border: 2px solid #e5e5e5;
  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    border: 2px solid #e5e5e5;
    background: white;
    color: #292929;
  }

  @media all and (max-width: 460px){
    font-size: 0.9rem;
  }
`;
