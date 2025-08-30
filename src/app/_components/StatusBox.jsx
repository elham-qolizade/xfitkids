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
    <div className="w-full bg-white flex flex-col items-start rounded-[25px] md:p-10 p-6 gap-8 shadow-[0_5px_15px_rgba(0,0,0,0.14)]">
      <span className="text-[17px] PoppinsBold font-semibold text-[#393D54]">
        Today’s Status
      </span>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-3.5">
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
      <div className="w-full flex md:flex-row flex-col items-center md:justify-evenly justify-normal bg-[#F9F9F9] md:gap-0 gap-2.5 rounded-[9px] relative overflow-hidden py-6">
        <div className="md:w-[20px] w-full md:h-full h-[20px] absolute left-0 top-0 md:bottom-0 bg-[#F1554C]"></div>
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
