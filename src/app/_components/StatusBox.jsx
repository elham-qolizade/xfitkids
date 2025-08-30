"use client";

import React from "react";
import CountUp from "react-countup";

export default function StatusBox() {
  const data = [
    {
      count: 8700,
      label: "Total Present",
      format: "k",
    },
    {
      count: 99,
      label: "Registrations",
    },
    {
      count: 33,
      label: "Totals  Session",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-start rounded-[25px] p-10 gap-8 shadow-[0_5px_15px_rgba(0,0,0,0.14)]">
      <span className="text-[17px] PoppinsBold font-semibold text-[#393D54]">
        Today’s Status
      </span>
      <div className="w-full grid grid-cols-3 gap-7">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-2 bg-[#F9F9F9] rounded-[9px] py-8"
          >
            <span className="text-[20px] PoppinsExtra font-extrabold text-[#0F296D]">
              <CountUp
                start={0}
                end={item.count}
                duration={3}
                decimals={item.decimals || 1}
                formattingFn={(val) => {
                  if (item.format) {
                    if (item.format === "k")
                      return (val / 1000).toFixed(1) + "k";
                    if (item.format === "M")
                      return (val / 1000000).toFixed(0) + "M";
                  }
                  return val;
                }}
              />
            </span>
            <span className="text-xs font-semibold text-[#393D54]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-evenly bg-[#F9F9F9] rounded-[9px] relative overflow-hidden py-6">
        <div className="w-[20px] h-full absolute left-0 top-0 bottom-0 bg-[#F1554C]"></div>
        <span className="text-[17px] PoppinsBold font-semibold text-[#393D54]">
          Today’s WOD
        </span>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[20px] PoppinsExtra font-extrabold text-[#0F296D]">
            Filthy Fifty
          </span>
          <span className="text-xs font-semibold text-[#393D54]">Mecton</span>
        </div>
      </div>
    </div>
  );
}
