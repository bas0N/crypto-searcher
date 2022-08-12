import React from "react";
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
import { Line } from "react-chartjs-2";
import { priceData } from "../../assets/priceData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Prices",
    },
  },
};

const labels = priceData.map((a) => Date(a.date));
const labes
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: priceData.map((a) => Number(a.priceUsd)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function ChartEx() {
  return <Line options={options} data={data} />;
}
