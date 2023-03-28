import styles from "./LineChart.module.css";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const [chartData, setchartData] = useState({
    datasets: [],
  });

  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setchartData({
      labels: ["Canada (map)", "Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Canadian Mortgage",
          data: [5.75, 5.88, 5.89, 5.86, 5.81],
          borderColor: "rgba(53, 163, 163, 235)",
          backgroundColor: "rgba(53, 163, 235, 0.4)",
          fill: false,
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
          text: "Canada Mortgage and Housing Corporation, conventional mortgage lending rate, 5-year term",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Line data={chartData} options={chartOptions} />
      </main>
    </>
  );
}
