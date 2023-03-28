import styles from "./BarChart.module.css";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setchartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setchartData({
      labels: ["Homeowner", "Rental", "Condo", "Co-op", "Other market type"],
      datasets: [
        {
          label: "Total units",
          data: [5816, 8013, 5506, 169, 0],
          borderColor: "rgba(53, 163, 163, 235)",
          backgroundColor: "rgba(53, 163, 235, 0.4)",
        },
        {
          label: "Units",
          data: [5961, 6415, 7130, 0, 0],
          borderColor: "rgba(255, 206, 86, 235)",
          backgroundColor: "rgba(255, 206, 86, 0.4)",
        },
        {
          label: "Other units",
          data: [4397, 5686, 6754, 93, 0],
          borderColor: "rgba(75, 192, 192, 235)",
          backgroundColor: "rgba(75, 192, 192, 0.4)",
        },
        {
          label: "Other units 2",
          data: [3084, 4223, 5083, 0, 0],
          borderColor: "rgba(153, 102, 255, 235)",
          backgroundColor: "rgba(153, 102, 255, 0.4)",
        },
        {
          label: "Other units 3",
          data: [3788, 6252, 4909, 40, 0],
          borderColor: "rgba(255, 159, 64, 235)",
          backgroundColor: "rgba(255, 159, 64, 0.4)",
        },
      ],
    });

    setchartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Canada Mortgage and Housing Corporation, housing starts, by type of dwelling unit and market type in all centres of 50,000 and over for Canada and provinces",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Bar data={chartData} options={chartOptions} />
      </main>
    </>
  );
}
