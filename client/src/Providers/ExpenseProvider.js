import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const ExpenseContext = React.createContext();

export const useExpense = () => {
  return useContext(ExpenseContext);
};

export function ExpenseProvider({ children }) {
  //links and local storage
  const expense_url = "http://localhost:5000/api/posts/expense";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //state
  const [expenses, setExpenses] = useState([]);
  const [expensesInput, setExpensesInput] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("Entertainment");
  const [sum, setSum] = useState(0);

  //chartData
  const [entertainmentSum, setEntertainmentSum] = useState(0);
  const [groceriesSum, setGroceriesSum] = useState(0);
  const [otherSum, setOtherSum] = useState(0);
  const [billsSum, setBillsSum] = useState(0);

  //error handling
  const [submitExpenseError, setSubmitExpenseError] = useState("");

  //getting data on page load
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

        let entertainment_sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].category === "Entertainment") {
            entertainment_sum += response.data[i].expense;
          }
        }

        let groceries_sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].category === "Groceries") {
            groceries_sum += response.data[i].expense;
          }
        }

        let other_sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].category === "Other") {
            other_sum += response.data[i].expense;
          }
        }

        let bills_sum = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].category === "Bills") {
            bills_sum += response.data[i].expense;
          }
        }

        setExpenses(response.data);
        setSum(sum);
        setEntertainmentSum(entertainment_sum);
        setGroceriesSum(groceries_sum);
        setOtherSum(other_sum);
        setBillsSum(bills_sum);
      })
      .catch((err) => console.log(err));
  }, [sum]);

  //expense functionality
  const expenseHandler = async (e) => {
    e.preventDefault();

    axios
      .post(
        expense_url,
        {
          expense: expensesInput,
          category: expenseCategory,
          user: user,
        },
        {
          headers: {
            ["Authorization"]: storedToken,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        let expenseItem = response.data.expense;

        let sum = 0;

        for (let i = 0; i < response.data.userExpenses.length; i++) {
          sum += response.data.userExpenses[i].expense;
        }

        setExpenses([
          ...expenses,
          {
            _id: expenseItem._id,
            expense: expenseItem.expense,
            category: expenseItem.category,
            user: expenseItem.user,
            date: expenseItem.date,
          },
        ]);
        setSubmitExpenseError("");
        setSum(sum);
      })
      .catch((err) => {
        console.log(err, "error");
        setSubmitExpenseError("Expense must only be a number.");
      });

    setExpensesInput("");
  };

  //context object
  const expense_state = {
    expenses,
    expensesInput,
    expenseCategory,
    sum,
    expenseHandler,
    setExpensesInput,
    setExpenses,
    setExpenseCategory,
    setSum,
    entertainmentSum,
    groceriesSum,
    otherSum,
    billsSum,
    submitExpenseError,
  };

  return (
    <ExpenseContext.Provider value={expense_state}>
      {children}
    </ExpenseContext.Provider>
  );
}
