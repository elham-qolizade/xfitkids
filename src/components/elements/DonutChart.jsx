"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DonutChart = ({
  series = [40, 30, 20, 10],
  colors = ["#F1554C", "#0F296D", "#FFA5A0", "#CFCFCF"],
}) => {
  const [state] = React.useState({
    series: series,
    options: {
      chart: {
        type: "donut",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={200}
      />
    </div>
  );
};

export default DonutChart;
