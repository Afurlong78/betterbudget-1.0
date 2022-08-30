import React, { useEffect, useState } from "react";
import Styled from "../Global/GlobalStyles";
import axios from "axios";
import ExpenseList from "../Expenses/ExpenseList";
import { currencyFormatter } from "../../utils";
import Comparisons from "../Comparisons/Comparisons";
import Chart from "../DoughnutChart/Chart";
import { useBudget } from "../../Providers/BudgetProvider";
import { useExpense } from "../../Providers/ExpenseProvider";

import {
  BudgetContainer,
  BudgetRow,
  YourBudget,
  RemainingBudget,
  Spent,
  SetBudgetBtn,
  SetBudgetRow,
  BudgetInput,
  ExpensesRow,
  SetExpensesBtn,
  ExpensesInput,
  ExpenseCategory,
  EditBudgetBtn,
  BtnRow,
  NumberDiv,
} from "./Styles";

function Budget() {
  //links and local storage
  const budget_url = "http://localhost:5000/api/posts/budget";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //links and local storage
  const expense_url = "http://localhost:5000/api/posts/expense";

  const {
    budget,
    budgetInput,
    budgetHandler,
    editBudgetHandler,
    setBudget,
    setBudgetInput,
    updateBudgetError,
  } = useBudget();

  const {
    expenses,
    expensesInput,
    expenseCategory,
    sum,
    expenseHandler,
    setExpensesInput,
    setExpenses,
    setExpenseCategory,
    setSum,
    deleteHandler,
    submitExpenseError,
  } = useExpense();

  //getting budget data on page load
  useEffect(() => {
    axios
      .get(budget_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
        },
      })
      .then((response) => {
        if (response.data.success === false) {
          setBudget(0);
        } else {
          setBudget(response.data.budget);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //getting expense data on page load
  useEffect(() => {
    axios
      .get(expense_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
        },
      })
      .then((response) => {
        //sum expenses
        let sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          sum += response.data[i].expense;
        }

        setExpenses(response.data);
        setSum(sum);
      })
      .catch((err) => console.log(err));
  }, []);

  let remainder = budget - sum;

  return (
    <BudgetContainer className="">
      <BudgetRow className="">
        <YourBudget className="">
          <strong>Budget:</strong>
          <NumberDiv className="">{currencyFormatter.format(budget)}</NumberDiv>
        </YourBudget>

        <RemainingBudget>
          <strong>Remaining:</strong>
          <NumberDiv className="">
            {currencyFormatter.format(remainder)}
          </NumberDiv>
        </RemainingBudget>

        <Spent className="">
          <strong>Spent: </strong>
          <NumberDiv className="">{currencyFormatter.format(sum)}</NumberDiv>
        </Spent>
      </BudgetRow>

      <SetBudgetRow className="mt-5">
        <Styled.Column>
          {!updateBudgetError ? (
            <Styled.Error></Styled.Error>
          ) : (
            <Styled.Error>{updateBudgetError}</Styled.Error>
          )}
          <Styled.RowStart className="">
            <BudgetInput
              className=""
              placeholder="Set your budget"
              onChange={(e) => setBudgetInput(e.target.value)}
              value={budgetInput}
            />
            <BtnRow>
              <SetBudgetBtn className="" onClick={budgetHandler}>
                Submit
              </SetBudgetBtn>
              <EditBudgetBtn className="" onClick={editBudgetHandler}>
                Update
              </EditBudgetBtn>
            </BtnRow>
          </Styled.RowStart>
        </Styled.Column>

        <Styled.Column>
          {!submitExpenseError ? (
            <Styled.Error></Styled.Error>
          ) : (
            <Styled.Error>{submitExpenseError}</Styled.Error>
          )}
          <Styled.RowEnd className="">
            <ExpensesInput
              className=""
              placeholder="Submit your expenses"
              onChange={(e) => setExpensesInput(e.target.value)}
              value={expensesInput}
            />
            <BtnRow>
              <SetExpensesBtn className="" onClick={expenseHandler}>
                Submit
              </SetExpensesBtn>
              <ExpenseCategory
                className=""
                onChange={(e) => {
                  setExpenseCategory(e.target.value);
                }}
              >
                <option value="Entertainment">Entertainment</option>
                <option value="Groceries">Groceries</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </ExpenseCategory>
            </BtnRow>
          </Styled.RowEnd>
        </Styled.Column>
      </SetBudgetRow>

      <ExpensesRow className="">
        <ExpenseList className="" />
      </ExpensesRow>

      <Comparisons />
    </BudgetContainer>
  );
}

export default Budget;
