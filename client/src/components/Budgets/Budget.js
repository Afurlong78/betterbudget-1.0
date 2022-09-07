import React, { useEffect } from "react";
import Styled from "../Global/GlobalStyles";
import axios from "axios";
import ExpenseList from "../Expenses/ExpenseList";
import { currencyFormatter } from "../../utils";
import Comparisons from "../Comparisons/Comparisons";
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
  const budget_url =
    "https://bb-server-production.up.railway.app/api/posts/budget";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //links and local storage
  const expense_url =
    "https://bb-server-production.up.railway.app/api/posts/expense";

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
    expensesInput,
    sum,
    expenseHandler,
    setExpensesInput,
    setExpenses,
    setExpenseCategory,
    setSum,
    submitExpenseError,
  } = useExpense();

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
      .catch((err) => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    axios
      .get(expense_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
        },
      })
      .then((response) => {
        let sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          sum += response.data[i].expense;
        }

        setExpenses(response.data);
        setSum(sum);
      })
      .catch((err) => {
        console.log(err)
      });
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
            <Styled.ErrorStart></Styled.ErrorStart>
          ) : (
            <Styled.ErrorStart>{updateBudgetError}</Styled.ErrorStart>
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
            <Styled.ErrorEnd></Styled.ErrorEnd>
          ) : (
            <Styled.ErrorEnd>{submitExpenseError}</Styled.ErrorEnd>
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
