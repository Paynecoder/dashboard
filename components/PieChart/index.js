import styles from "./PieChart.module.css";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function PieChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Road assets",
        "Bridge and tunnel assets",
        "Public transit assets",
        "Active Transportation",
        "Potable water assets",
        "Wastewater assets",
        "Stormwater assets",
        "Solid waste assets",
        "Culture, recreation and sports facilities",
      ],
      datasets: [
        {
          label: "Financial value of assets",
          data: [
            894162.7, 244691.8, 83829.7, 30622.3, 270126.5, 304935.9, 196781.8,
            10830.4, 117628.3,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
          ],
        },
      ],
    });

    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Estimated replacement value of core public infrastructure assets, by physical condition rating",
        },
        legend: {
          position: "top",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Pie data={chartData} options={chartOptions} />
      </main>
    </>
  );
}
