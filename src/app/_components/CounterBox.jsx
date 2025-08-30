"use client";

import CounterCoachIcon from "@/assets/icons/CounterCoachIcon";
import CounterKidsIcon from "@/assets/icons/CounterKidsIcon";
import CounterRevenueIcon from "@/assets/icons/CounterRevenueIcon";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function CounterBox() {
  const data = [
    {
      icon: <CounterCoachIcon />,
      count: 534,
      label: "Coaches",
    },
    {
      icon: <CounterKidsIcon />,
      count: 9700,
      label: "Kids",
      format: "k",
    },
    {
      icon: <CounterRevenueIcon />,
      count: 50000000,
      label: "Revenue",
      format: "M",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-3.5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="w-full flex items-center justify-evenly bg-white rounded-[25px] py-7 shadow-[0_5px_15px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center justify-center bg-gradient-to-bl from-[#375DBE] to-[#102A6D] rounded-[20px] px-3.5 shadow-[0_5px_15px_rgba(0,0,0,0.19)]">
            {item.icon}
          </div>
          <span className="w-[1.5px] h-20 bg-[#E5E5E5] rounded-full"></span>
          <div className="flex flex-col items-start gap-1">
            <span className="text-3xl PoppinsExtra font-extrabold text-black">
              <CountUp
                start={0}
                end={item.count}
                duration={3.5}
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
            <span className="text-sm PoppinsBold font-semibold text-[#00000066]">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
