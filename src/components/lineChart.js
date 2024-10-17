"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  // Transform data into the format required by Chart.js
  const chartData = {
    labels: data ? data.map((item) => item.date) : ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Impressions',
        data: data ? data.map((item) => item.impressions) : [1500, 2000, 1800, 2200, 2400, 2600],
        backgroundColor: '#000',
        borderColor: '#a16207',
        borderWidth: 3,
        pointBackgroundColor: '#000',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Line Chart - Facebook Ad Impressions',
        font: { size: 18, color: '#000' },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
