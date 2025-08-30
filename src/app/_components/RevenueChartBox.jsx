import DonutChart from "@/components/elements/DonutChart";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function RevenueChartBox() {
  const data = [
    {
      color: "#F1554C",
      mode: "Online",
      percent: "50%",
    },
    {
      color: "#0F296D",
      mode: "Offline",
      percent: "30%",
    },
    {
      color: "#FFA5A0",
      mode: "Events",
      percent: "20%",
    },
  ];

  return (
    <div className="w-full relative md:rotate-[-9deg] md:translate-x-11 md:-translate-y-9 z-10 bg-white rounded-[25px] flex flex-col items-start md:p-10 p-6 gap-9 shadow-[0_5px_15px_rgba(0,0,0,0.19)]">
      <span className="text-[17px] PoppinsBold font-semibold text-[#393D54]">
        Revenue Generated
      </span>
      <div className="w-full flex md:flex-row flex-col items-center relative">
        <div className="flex flex-col items-start gap-8 pr-5">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span
                className={`w-5 h-5 rounded-[4px]`}
                style={{ backgroundColor: item.color }}
              ></span>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[15px] font-medium text-[#393D54] text-nowrap">
                  {item.mode}
                </span>
                <span className="text-xs text-nowrap font-medium text-[#BFBFBF]">
                  {item.percent} of total revenue
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2.5 left-28 z-10 py-3 px-4 gap-1 bg-white rounded-[7px] flex flex-col items-start shadow-[0_5px_15px_rgba(0,0,0,0.24)]">
          <span className="text-[20px] PoppinsExtra font-extrabold text-[#0F296D]">25M</span>
          <span className="text-[10px] font-semibold text-[#393D54]">
            Offline
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-[#CFCFCF]">
              50 running batches
            </span>
            <FaAngleRight size={14} className="text-[#F1554C]" />
          </div>
        </div>
        <div className="w-full">
          <DonutChart />
        </div>
      </div>
    </div>
  );
}
