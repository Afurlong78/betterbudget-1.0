import React, { useState } from "react";
import { useExpense } from "../../Providers/ExpenseProvider";
import { Doughnut } from "react-chartjs-2";


function Chart() {
  const { expenses, entertainmentSum, groceriesSum, otherSum, billsSum } =
    useExpense();

  const chartMaterials = [
    {
      category: "Entertainment",
      expense: entertainmentSum,
    },
    {
      category: "Groceries",
      expense: groceriesSum,
    },
    {
      category: "Bills",
      expense: billsSum,
    },
    {
      category: "Other",
      expense: otherSum,
    },
  ];

  const chartData = {
    labels: chartMaterials.map((item) => item.category),
    datasets: [
      {
        label: expenses.map((item) => item.category),
        data: chartMaterials.map((item) => item.expense),
        backgroundColor: ["#FF8196", "#8FA9FF", "#A8FFD1", "#FBFF82"],
      },
    ],
  };

  return <Doughnut data={chartData} />;
}

export default Chart;
