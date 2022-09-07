import React, { useState } from "react";
import { useMonth } from "../../Providers/MonthProvider";
import { Doughnut } from "react-chartjs-2";
import { BarChart } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

function EndMonth() {
  const {
    monthEndBills,
    monthEndEntertainment,
    monthEndGroceries,
    monthEndOther,
  } = useMonth();

  const chartMaterials = [
    {
      category: "Entertainment",
      expense: monthEndEntertainment,
    },
    {
      category: "Groceries",
      expense: monthEndGroceries,
    },
    {
      category: "Bills",
      expense: monthEndBills,
    },
    {
      category: "Other",
      expense: monthEndOther,
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

export default EndMonth;
