import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const BudgetContext = React.createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export function BudgetProvider({ children }) {
  //links and local storage
  const budget_url = "http://localhost:5000/api/posts/budget";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //state
  const [budget, setBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState("");

  //error handling
  const [updateBudgetError, setUpdateBudgetError] = useState("");

  //getting data on page load
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
        console.log(err);
      });
  }, []);

  //budget functionality
  const budgetHandler = async (e) => {
    e.preventDefault();

    //creating budget
    axios
      .post(
        budget_url,
        {
          budget: budgetInput,
          user: user,
        },
        {
          headers: {
            ["Authorization"]: storedToken,
          },
        }
      )
      .then(function (response) {
        setBudget(response.data.budget);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error, "error");
        setUpdateBudgetError(error.response.data.data);
        // alert(error.response.data.data);
      });

    setBudgetInput("");
  };

  //update budget
  const editBudgetHandler = async (e) => {
    e.preventDefault();

    axios
      .put(
        budget_url,
        {
          budget: budgetInput,
          user: user,
        },
        {
          headers: {
            ["Authorization"]: storedToken,
          },
        }
      )
      .then((response) => {
        setBudget(response.data.budget);
        setUpdateBudgetError("");
      })
      .catch((err) => {
        console.log(err);
        setUpdateBudgetError("Budget must only be a number.");
      });

    setBudgetInput("");
  };

  //context object (state)
  const budget_state = {
    budget,
    budgetInput,
    updateBudgetError,
    budgetHandler,
    editBudgetHandler,
    setBudget,
    setBudgetInput,
  };

  return (
    <BudgetContext.Provider value={budget_state}>
      {children}
    </BudgetContext.Provider>
  );
}
