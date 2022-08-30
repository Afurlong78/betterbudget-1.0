import styled from "styled-components";

export const BudgetContainer = styled.div`
  width: 90%;
  height: 100%;

  background: white;
  color: black;

  margin: auto;
  margin-top: 140px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BudgetHeaderTextContainer = styled.div`
  width: 100%;

  margin-top: 190px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const BudgetHeaderText = styled.h1`
  color: black;

  font-family: "Poppins", sans-serif;
`;

//----------------------------------------------------------------------------------//
//--------------------------------------set budget--------------------------------------------//
//----------------------------------------------------------------------------------//

export const SetBudgetRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media all and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BudgetInput = styled.input`
  width: 50%;
  height: 3rem;

  font-family: "Poppins", sans-serif;

  border: 2px solid #9f9f9f;
  border-radius: 5px;

  color: black;

  padding: 10px;

  @media all and (max-width: 1024px) {
    width: 90%;

    margin-bottom: 10px;
  }

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

export const SetBudgetBtn = styled.button`
  height: 3rem;
  width: auto;

  color: #292929;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  padding: 10px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  margin-left: 15px;

  &:hover {
    transform: scale(1.1);
    background: white;
  }

  @media all and (max-width: 1024px) {
    margin-left: 0px;
  }

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
    width: 4.5rem;
  }
`;

export const EditBudgetBtn = styled.button`
  height: 3rem;
  width: auto;

  color: #292929;
  background: #e5e5e5;

  border: 2px solid #cecece;
  border-radius: 5px;

  padding: 10px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  margin-left: 15px;

  &:hover {
    transform: scale(1.1);
    background: white;
  }

  @media all and (max-width: 1024px) {
    margin-left: 0px;
  }

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
    width: 4.5rem;
  }
`;

export const BtnRow = styled.div`
  height: auto;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1024px) {
    width: 90%;
    justify-content: space-between;
  }

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

//----------------------------------------------------------------------------------//
//-----------------------------------budget display-------------------------------------------//
//----------------------------------------------------------------------------------//

export const BudgetRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;

export const NumberDiv = styled.div`
  margin-left: 10px;

  @media all and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const YourBudget = styled.div`
  background: #e5e5e5;
  height: 4rem;
  width: 30%;

  color: #292929;

  font-family: "Poppins", sans-serif;

  border-radius: 5px;
  padding: 10px;

  display: flex;
  justify-content: start;
  align-items: center;

  @media all and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  @media all and (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const RemainingBudget = styled.div`
  background: #a8ffd1;
  height: 4rem;
  width: 30%;

  font-family: "Poppins", sans-serif;

  border-radius: 5px;
  padding: 10px;

  display: flex;
  justify-content: start;
  align-items: center;

  color: #374e37;

  @media all and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  @media all and (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const Spent = styled.div`
  background: #8fa9ff;

  height: 4rem;
  width: 30%;

  font-family: "Poppins", sans-serif;

  border-radius: 5px;
  padding: 10px;

  display: flex;
  justify-content: start;
  align-items: center;

  color: #303e51;

  @media all and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  @media all and (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

//----------------------------------------------------------------------------------//
//----------------------------------set expenses-----------------------------------------//
//----------------------------------------------------------------------------------//

export const ExpensesRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 65px;
  margin-bottom: 50px;
`;

export const ExpensesInput = styled.input`
  width: 50%;
  height: 3rem;

  font-family: "Poppins", sans-serif;

  border: 2px solid #9f9f9f;
  border-radius: 5px;

  color: black;

  padding: 10px;

  @media all and (max-width: 1024px) {
    width: 90%;
    margin-bottom: 10px;
  }

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

export const SetExpensesBtn = styled.button`
  height: 3rem;
  width: 5rem;

  color: #2a314a;
  background: #8fa9ff;

  border: 2px solid #303e51;
  border-radius: 5px;

  font-family: "Poppins", sans-serif;

  transition: all 0.2s;

  margin-left: 15px;

  &:hover {
    transform: scale(1.1);
    background: white;
  }

  @media all and (max-width: 1024px) {
    margin-left: 0px;
  }

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
    width: 4.5rem;
  }
`;

export const ExpenseCategory = styled.select`
  height: 3rem;
  width: 10rem;

  border-radius: 5px;

  color: #292929;

  border: 2px solid #9f9f9f;

  font-family: "Poppins", sans-serif;

  padding: 10px;

  margin-left: 15px;

  @media all and (max-width: 1024px) {
    margin-left: 0px;
  }

  @media all and (max-width: 460px) {
    font-size: 0.9rem;
    width: 8rem;
  }
`;

//----------------------------------------------------------------------------------//
//----------------------------------expenses display-------------------------------//
//----------------------------------------------------------------------------------//

export const ExpensesDisplay = styled.div`
  height: 500px;
  height: 100%;
  width: 95%;

  border-radius: 5px;
  border: 2px solid #9f9f9f;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//----------------------------------------------------------------------------------//
//----------------------------------chart display-------------------------------//
//----------------------------------------------------------------------------------//

export const ChartContainer = styled.div`
  height: 500px;
  width: 500px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
