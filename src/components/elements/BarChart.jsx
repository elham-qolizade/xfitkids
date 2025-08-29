"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BarChart = () => {
  const colors = ["#F1554C", "#0F296D", "#FFA5A0"];

  const [state] = React.useState({
    series: [
      {
        data: [90, 65, 35],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 4,
          left: 2,
          blur: 4,
          opacity: 0.2,
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          borderRadius: 6,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.9,
          opacityTo: 1,
          stops: [50, 100],
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default BarChart;
