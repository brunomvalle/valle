"use client";
import { Box } from "@chakra-ui/react";
import "chart.js/auto";
import { ChartData, ChartDataset } from "chart.js/auto";
import { Line } from "react-chartjs-2";

type LineChartData = {
  data: tableRowInterface[];
};

type tableRowInterface = {
  mes: number;
  juros: number;
  totalInvestido: number;
  totalJuros: number;
  totalAcumulado: number;
};

export default function LineChart({ data }: LineChartData) {
  const datasets: ChartDataset<"line", number[]>[] = [
    {
      data: data.map((d) => d.totalAcumulado),
      label: "Total Acumulado",
      pointStyle: false,
      borderColor: "dodgerblue",
      backgroundColor: "dodgerblue",
    },
    {
      data: data.map((d) => d.totalInvestido),
      label: "Total Investido",
      pointStyle: false,
      borderColor: "tomato",
      backgroundColor: "tomato",
    },
    {
      data: data.map((d) => d.totalJuros),
      label: "Total Juros",
      pointStyle: false,
      borderColor: "mediumseagreen",
      backgroundColor: "mediumseagreen",
    },
  ];
  const labels = data.map((d) => d.mes);
  const windowWidth = window.innerWidth;
  return (
    <Box my={10} w="100%">
      <Line
        data={{
          datasets,
          labels,
        }}
        options={{
          scales: {
            y: {
              display: windowWidth > 640,
            },
          },
        }}
      />
    </Box>
  );
}
