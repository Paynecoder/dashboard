import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      <main>
        <BarChart />
        <LineChart />
        <PieChart />
      </main>
    </>
  );
}
