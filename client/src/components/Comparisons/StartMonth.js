import React, { useState } from "react";
import { useMonth } from "../../Providers/MonthProvider";
import { Doughnut } from "react-chartjs-2";
import { BarChart } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

function StartMonth() {
  const {
    monthStartBills,
    monthStartBudget,
    monthStartEntertainment,
    monthStartGroceries,
    monthStartOther,
  } = useMonth();

  const chartMaterials = [
    {
      category: "Entertainment",
      expense: monthStartEntertainment,
    },
    {
      category: "Groceries",
      expense: monthStartGroceries,
    },
    {
      category: "Bills",
      expense: monthStartBills,
    },
    {
      category: "Other",
      expense: monthStartOther,
    },
  ];

  const chartData = {
    labels: chartMaterials.map((item) => item.category),
    datasets: [
      {
        label: chartMaterials.map((item) => item.category),
        data: chartMaterials.map((item) => item.expense),
        backgroundColor: ["#FF8196", "#8FA9FF", "#A8FFD1", "#FBFF82"],
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default StartMonth;
