import React, { useState, useEffect } from "react";
import axios from "axios";
import { useBudget } from "../../Providers/BudgetProvider";
import { useExpense } from "../../Providers/ExpenseProvider";
import { useMonth } from "../../Providers/MonthProvider";
import ExpenseItem from "./ExpenseItem";
import Chart from "../DoughnutChart/Chart";
import { currencyFormatter } from "../../utils";
import {
  ExpenseContainer,
  ExpenseDisplay,
  ExpenseHeaderText,
  ChartDisplay,
  ChartContainer,
  ExpensesListed,
  SaveComparisonBtn,
  ComparisonDropDown,
  GraphDisplay,
  GraphDisplayHeaderText,
  GraphDisplayColumn,
  GraphValueDisplay,
  EntertainmentDisplayItem,
  GroceriesDisplayItem,
  BillsDisplayItem,
  OtherDisplayItem,
  ExpenseBtnRow,
} from "./Style";
import Styled from "../Global/GlobalStyles";

function Expenses() {
  const month_url =
    "https://bb-server-production.up.railway.app/api/posts/month";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const [monthCategory, setMonthCategory] = useState("January");
  const [error, setError] = useState(false);

  const { budget } = useBudget();

  const { expenses, entertainmentSum, groceriesSum, otherSum, billsSum } =
    useExpense();

  const { monthError, setMonthError } = useMonth();

  const saveHandler = async (e) => {
    e.preventDefault();

    axios
      .post(
        month_url,
        {
          budget: budget,
          entertainment: entertainmentSum,
          bills: billsSum,
          groceries: groceriesSum,
          other: otherSum,
          month: monthCategory,
          user: user,
        },
        {
          headers: {
            ["Authorization"]: storedToken,
          },
        }
      )
      .then((response) => {
        setMonthError("");
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setMonthError(err.response.data.data);
      });
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    axios
      .put(
        month_url,
        {
          budget: budget,
          entertainment: entertainmentSum,
          bills: billsSum,
          groceries: groceriesSum,
          other: otherSum,
          month: monthCategory,
          user: user,
        },
        {
          headers: {
            ["Authorization"]: storedToken,
          },
        }
      )
      .then((response) => {
        setMonthError("");
        // console.log(response);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <ExpenseContainer className="">
      <ExpenseDisplay className="">
        <Styled.Column>
          <ExpenseHeaderText className="">
            Your Expenses
            <ExpenseBtnRow>
              <SaveComparisonBtn className="" onClick={saveHandler}>
                Save
              </SaveComparisonBtn>
              <SaveComparisonBtn className="" onClick={updateHandler}>
                Update
              </SaveComparisonBtn>
              <ComparisonDropDown
                className=""
                onChange={(e) => setMonthCategory(e.target.value)}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </ComparisonDropDown>
            </ExpenseBtnRow>
          </ExpenseHeaderText>
          {!monthError ? (
            <Styled.ErrorStart></Styled.ErrorStart>
          ) : (
            <Styled.ErrorStart>{monthError}</Styled.ErrorStart>
          )}
        </Styled.Column>
        <ExpensesListed className="">
          {expenses.map((item) => (
            <ExpenseItem
              item={item}
              key={item._id}
              expense={item.expense}
              category={item.category}
              id={item._id}
            />
          ))}
        </ExpensesListed>
      </ExpenseDisplay>
      <ChartContainer className="">
        <ChartDisplay className="">
          <Chart />
        </ChartDisplay>
        <GraphDisplay>
          <GraphDisplayHeaderText>{monthCategory}</GraphDisplayHeaderText>
          <GraphDisplayColumn>
            <EntertainmentDisplayItem className="">
              Entertainment :
              <GraphValueDisplay>
                {currencyFormatter.format(entertainmentSum)}
              </GraphValueDisplay>
            </EntertainmentDisplayItem>
            <GroceriesDisplayItem className="">
              Groceries :
              <GraphValueDisplay>
                {currencyFormatter.format(groceriesSum)}
              </GraphValueDisplay>
            </GroceriesDisplayItem>
            <BillsDisplayItem className="">
              Bills :
              <GraphValueDisplay>
                {currencyFormatter.format(billsSum)}
              </GraphValueDisplay>
            </BillsDisplayItem>
            <OtherDisplayItem className="">
              Other:
              <GraphValueDisplay>
                {currencyFormatter.format(otherSum)}
              </GraphValueDisplay>
            </OtherDisplayItem>
          </GraphDisplayColumn>
        </GraphDisplay>
      </ChartContainer>
    </ExpenseContainer>
  );
}

export default Expenses;
