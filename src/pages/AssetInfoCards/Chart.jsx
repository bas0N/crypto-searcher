import React, { useEffect, useContext, useState } from "react";
import CryptoContext from "../../context/CryptoContext";

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
import { getHistoricalPrices } from "../../context/CryptoActions";
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

export function ChartEx() {
  const { dispatch, historicalPrices, asset } = useContext(CryptoContext);
  let pricesArray;
  let labelsArray;
  const historicalPricesReversed = [...historicalPrices].reverse();
  console.log(historicalPrices);
  console.log(historicalPricesReversed);
  pricesArray = historicalPricesReversed.map((a) => Number(a.priceUsd));
  labelsArray = historicalPricesReversed.map((a) => a.date);
  const data = {
    labels: labelsArray,
    datasets: [
      {
        label: `Prices of ${asset.name}`,
        data: pricesArray,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
