import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const MonthContext = React.createContext();

export const useMonth = () => {
  return useContext(MonthContext);
};

export function MonthProvider({ children }) {
  const month_url =
    "https://bb-server-production.up.railway.app/api/posts/month";
  // const all_months_url = "https://bb-server-production.up.railway.app/api/posts/all_months";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [monthStart, setMonthStart] = useState("January");
  const [monthEnd, setMonthEnd] = useState("January");

  //error handling
  const [monthError, setMonthError] = useState("");
  const [monthStartError, setMonthStartError] = useState("");
  const [monthEndError, setMonthEndError] = useState("");

  //state for charts - start
  const [startMonth, setStartMonth] = useState("");
  const [monthStartBudget, setMonthStartBudget] = useState(0);
  const [monthStartEntertainment, setMonthStartEntertainment] = useState(0);
  const [monthStartBills, setMonthStartBills] = useState(0);
  const [monthStartGroceries, setMonthStartGroceries] = useState(0);
  const [monthStartOther, setMonthStartOther] = useState(0);

  //state for charts - start
  const [endMonth, setEndMonth] = useState("");
  const [monthEndBudget, setMonthEndBudget] = useState(0);
  const [monthEndEntertainment, setMonthEndEntertainment] = useState(0);
  const [monthEndBills, setMonthEndBills] = useState(0);
  const [monthEndGroceries, setMonthEndGroceries] = useState(0);
  const [monthEndOther, setMonthEndOther] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(all_months_url, {
  //       headers: {
  //         ["Authorization"]: storedToken,
  //         ["user"]: user,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log(response, "response from useEffect in component");
  //       setStartMonth(response.data.data.last.month);
  //       setMonthStartBudget(response.data.data.last.budget);
  //       setMonthStartEntertainment(response.data.data.last.entertainment);
  //       setMonthStartGroceries(response.data.data.last.groceries);
  //       setMonthStartBills(response.data.data.last.bills);
  //       setMonthStartOther(response.data.data.last.other);

  //       setEndMonth(response.data.data.secondToLast.month);
  //       setMonthEndBudget(response.data.data.secondToLast.budget);
  //       setMonthEndEntertainment(response.data.data.secondToLast.entertainment);
  //       setMonthEndGroceries(response.data.data.secondToLast.groceries);
  //       setMonthEndBills(response.data.data.secondToLast.bills);
  //       setMonthEndOther(response.data.data.secondToLast.other);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //       setStartMonth("No month.");
  //       setMonthStartBudget(0);
  //       setMonthStartEntertainment(0);
  //       setMonthStartGroceries(0);
  //       setMonthStartBills(0);
  //       setMonthStartOther(0);

  //       setEndMonth("No month.");
  //       setMonthEndBudget(0);
  //       setMonthEndEntertainment(0);
  //       setMonthEndGroceries(0);
  //       setMonthEndBills(0);
  //       setMonthEndOther(0);
  //     });
  // }, []);

  const getMonthStart = async (e) => {
    e.preventDefault();

    axios
      .get(month_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
          ["month"]: monthStart,
        },
      })
      .then((response) => {
        // console.log(response);
        setMonthStartError("");
        setStartMonth(response.data.data.month);
        setMonthStartBudget(response.data.data.budget);
        setMonthStartEntertainment(response.data.data.entertainment);
        setMonthStartBills(response.data.data.bills);
        setMonthStartGroceries(response.data.data.groceries);
        setMonthStartOther(response.data.data.other);
      })
      .catch((err) => {
        console.log(err);
        setMonthStartError(err.response.data.message);
      });
  };

  const getMonthEnd = async (e) => {
    e.preventDefault();
    axios
      .get(month_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
          ["month"]: monthEnd,
        },
      })
      .then((response) => {
        // console.log(response);
        setMonthEndError("");
        setEndMonth(response.data.data.month);
        setMonthEndBudget(response.data.data.budget);
        setMonthEndEntertainment(response.data.data.entertainment);
        setMonthEndBills(response.data.data.bills);
        setMonthEndGroceries(response.data.data.groceries);
        setMonthEndOther(response.data.data.other);
      })
      .catch((err) => {
        console.log(err);
        setMonthEndError(err.response.data.message);
      });
  };

  const month_state = {
    getMonthEnd,
    getMonthStart,
    setMonthStart,
    setMonthEnd,
    monthStart,
    monthEnd,
    monthStartBills,
    monthStartBudget,
    monthStartEntertainment,
    monthStartGroceries,
    monthStartOther,
    monthEndBills,
    monthEndBudget,
    monthEndEntertainment,
    monthEndGroceries,
    monthEndOther,
    monthError,
    setMonthError,
    startMonth,
    endMonth,
    setMonthStartBills,
    setMonthStartEntertainment,
    setMonthStartGroceries,
    setMonthStartOther,
    setMonthEndBills,
    setMonthEndEntertainment,
    setMonthEndGroceries,
    setMonthEndOther,
    setMonthStartBudget,
    setMonthEndBudget,
    setStartMonth,
    setEndMonth,
    monthEndError,
    monthStartError,
  };
  return (
    <MonthContext.Provider value={month_state}>
      {children}
    </MonthContext.Provider>
  );
}
