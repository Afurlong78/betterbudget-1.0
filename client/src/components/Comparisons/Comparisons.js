import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMonth } from "../../Providers/MonthProvider";
import StartMonth from "./StartMonth";
import EndMonth from "./EndMonth";
import { currencyFormatter } from "../../utils";
import { MdOutlineCompare } from "react-icons/md";
import {
  MainContainer,
  Row,
  RowEnd,
  ContentContainerStart,
  ContentContainerEnd,
  ColumnStart,
  ColumnEnd,
  ComparisonDropDown,
  GetMonthBtn,
  SectionHeaderText,
  MainColumn,
  ComparisonBoard,
  ComparisonBoardHeader,
  ComparisonColumnStart,
  ComparisonColumnEnd,
  ComparisonRow,
  ComparisonItem,
  ComparisonTotals,
  TotalsColumn,
  TotalsHeader,
  TotalsItem,
} from "./Styles";

function Comparisons() {
  const month_url = "http://localhost:5000/api/posts/month";
  const all_months_url = "http://localhost:5000/api/posts/all_months";
  const storedToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const {
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
    startMonth,
    endMonth,
    setMonthStartBills,
    setMonthStartBudget,
    setMonthStartEntertainment,
    setMonthStartGroceries,
    setMonthStartOther,
    setMonthEndBills,
    setMonthEndBudget,
    setMonthEndEntertainment,
    setMonthEndGroceries,
    setMonthEndOther,
    setStartMonth,
    setEndMonth,
  } = useMonth();

  useEffect(() => {
    axios
      .get(all_months_url, {
        headers: {
          ["Authorization"]: storedToken,
          ["user"]: user,
        },
      })
      .then((response) => {
        // console.log(response, "response from useEffect in component");
        setStartMonth(response.data.data.last.month);
        setMonthStartBudget(response.data.data.last.budget);
        setMonthStartEntertainment(response.data.data.last.entertainment);
        setMonthStartGroceries(response.data.data.last.groceries);
        setMonthStartBills(response.data.data.last.bills);
        setMonthStartOther(response.data.data.last.other);

        setEndMonth(response.data.data.secondToLast.month);
        setMonthEndBudget(response.data.data.secondToLast.budget);
        setMonthEndEntertainment(response.data.data.secondToLast.entertainment);
        setMonthEndGroceries(response.data.data.secondToLast.groceries);
        setMonthEndBills(response.data.data.secondToLast.bills);
        setMonthEndOther(response.data.data.secondToLast.other);
      })
      .catch((err) => {
        // console.log(err);
        setStartMonth("No month.");
        setMonthStartBudget(0);
        setMonthStartEntertainment(0);
        setMonthStartGroceries(0);
        setMonthStartBills(0);
        setMonthStartOther(0);

        setEndMonth("No month.");
        setMonthEndBudget(0);
        setMonthEndEntertainment(0);
        setMonthEndGroceries(0);
        setMonthEndBills(0);
        setMonthEndOther(0);
      });
  }, []);

  return (
    <MainColumn className="">
      <SectionHeaderText className="mb-3">
        Compare Monthly Expenses
      </SectionHeaderText>

      <MainContainer className="mt-4 ">
        <ComparisonBoard className="">
          <ComparisonBoardHeader>Lets Compare... </ComparisonBoardHeader>

          <ComparisonRow className="">
            <ComparisonColumnStart className="">
              <ComparisonItem>
                Month: <strong>{startMonth}</strong>
              </ComparisonItem>
              <ComparisonItem value={monthStartBudget}>
                Budget:{" "}
                <strong>{currencyFormatter.format(monthStartBudget)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Entertainment:{" "}
                <strong>
                  {currencyFormatter.format(monthStartEntertainment)}
                </strong>
              </ComparisonItem>
              <ComparisonItem>
                Groceries:{" "}
                <strong>{currencyFormatter.format(monthStartGroceries)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Bills:{" "}
                <strong>{currencyFormatter.format(monthStartBills)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Other:{" "}
                <strong>{currencyFormatter.format(monthStartOther)}</strong>
              </ComparisonItem>
            </ComparisonColumnStart>

            <ComparisonColumnEnd className="">
              <ComparisonItem>
                Month: <strong>{endMonth}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Budget:{" "}
                <strong>{currencyFormatter.format(monthEndBudget)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Entertainment:{" "}
                <strong>
                  {currencyFormatter.format(monthEndEntertainment)}
                </strong>
              </ComparisonItem>
              <ComparisonItem>
                Groceries:{" "}
                <strong>{currencyFormatter.format(monthEndGroceries)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Bills:{" "}
                <strong>{currencyFormatter.format(monthEndBills)}</strong>
              </ComparisonItem>
              <ComparisonItem>
                Other:{" "}
                <strong>{currencyFormatter.format(monthEndOther)}</strong>
              </ComparisonItem>
            </ComparisonColumnEnd>
            <TotalsColumn className="">
              <TotalsHeader>TOTALS</TotalsHeader>
              <TotalsItem>
                <strong>
                  {currencyFormatter.format(monthStartBudget - monthEndBudget)}
                </strong>
              </TotalsItem>
              <TotalsItem>
                <strong>
                  {currencyFormatter.format(
                    monthStartEntertainment - monthEndEntertainment
                  )}
                </strong>
              </TotalsItem>
              <TotalsItem>
                <strong>
                  {currencyFormatter.format(
                    monthStartGroceries - monthEndGroceries
                  )}
                </strong>
              </TotalsItem>
              <TotalsItem>
                <strong>
                  {currencyFormatter.format(monthStartBills - monthEndBills)}
                </strong>
              </TotalsItem>
              <TotalsItem>
                <strong>
                  {currencyFormatter.format(monthStartOther - monthEndOther)}
                </strong>
              </TotalsItem>
            </TotalsColumn>
          </ComparisonRow>
        </ComparisonBoard>
        
        <ColumnStart className="">
          <Row>
            <GetMonthBtn onClick={getMonthStart}>Start Month</GetMonthBtn>
            <ComparisonDropDown
              className=""
              onChange={(e) => setMonthStart(e.target.value)}
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
          </Row>
          <ContentContainerStart className="">
            <StartMonth />
          </ContentContainerStart>
        </ColumnStart>

        <ColumnEnd className="">
          <RowEnd>
            <GetMonthBtn onClick={getMonthEnd}>End Month</GetMonthBtn>
            <ComparisonDropDown
              className=""
              onChange={(e) => setMonthEnd(e.target.value)}
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
          </RowEnd>
          <ContentContainerEnd className="">
            <EndMonth />
          </ContentContainerEnd>
        </ColumnEnd>
      </MainContainer>
    </MainColumn>
  );
}

export default Comparisons;
