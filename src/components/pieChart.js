'use client'
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales Distribution",
        data: [55, 25, 20],
        backgroundColor: ["#a16207", "#2563eb", "#500724"],
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: "Pie Chart - Sales Distribution",
        font: { size: 18, color: '#fff' },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
