import BarChart from "@/components/elements/BarChart";
import React from "react";

export default function BatchChartBox() {
  const data = [
    {
      color: "#F1554C",
      name: "Jr. Knights",
    },
    {
      color: "#0F296D",
      name: "Gladiators",
    },
    {
      color: "#FFA5A0",
      name: "Spartans",
    },
  ];

  return (
    <div className="w-full bg-white rounded-[25px] flex flex-col items-center p-10 gap-8 shadow-[0_5px_15px_rgba(0,0,0,0.14)]">
      <div className="w-full flex items-center justify-between">
        <span className="text-[17px] font-semibold text-[#393D54]">
          Batch Performance
        </span>
        <span className="text-[14px] font-medium text-[#999999]">
          All information in percentage(%)
        </span>
      </div>
      <div className="w-full flex items-center">
        <div className="flex flex-col items-start gap-12 pr-5">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span
                className={`w-5 h-5 rounded-[4px]`}
                style={{ backgroundColor: item.color }}
              ></span>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[15px] font-medium text-[#393D54] text-nowrap">
                  {item.name}
                </span>
                <span className="text-xs font-medium text-[#BFBFBF]">
                  Performance
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <BarChart />
        </div>
      </div>
    </div>
  );
}
