'use client';
import dynamic from 'next/dynamic'; // Import dynamic for SSR disabling
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


// Register the necessary ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Bar chart component
const BarChart = () => {


  // Chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [300, 400, 350, 500, 600, 700],
        backgroundColor: "#a16207",
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
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
        text: "Bar Chart - Monthly Sales",
        font: { size: 18, color: '#fff' },
      },
    },
    maintainAspectRatio: false,
  };

  // Dynamically import the Bar component from react-chartjs-2
  const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), { ssr: false });

  return <Bar data={data} options={options} />;
};

export default BarChart;
