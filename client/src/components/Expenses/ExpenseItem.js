import React from "react";
import axios from "axios";
import { currencyFormatter } from "../../utils";

import {
  ExpenseItemContainer,
  ExpenseItemBtn,
  ExpenseItemStyle,
} from "./Style";

import { useExpense } from "../../Providers/ExpenseProvider";

function ExpenseItem({ item, expense, category, _id }) {
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //links and local storage
  const expense_url =
    "https://bb-server-production.up.railway.app/api/posts/expense";

  const { setExpenses, setSum } = useExpense();

  const deleteHandler = async (e) => {
    e.preventDefault();

    axios
      .delete(expense_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
        },
        data: {
          id: item._id,
        },
      })
      .then((response) => {
        let sum = 0;

        for (let i = 0; i < response.data.updatedExpense.length; i++) {
          sum += response.data.updatedExpense[i].expense;
        }

        setExpenses(response.data.updatedExpense);
        setSum(sum);
        // console.log(sum, "sum");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ExpenseItemContainer className="">
      <ExpenseItemStyle>{category}</ExpenseItemStyle>
      <ExpenseItemStyle>{currencyFormatter.format(expense)}</ExpenseItemStyle>

      <ExpenseItemBtn onClick={deleteHandler}>Delete </ExpenseItemBtn>
    </ExpenseItemContainer>
  );
}

export default ExpenseItem;
