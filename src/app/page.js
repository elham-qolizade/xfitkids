"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BatchChartBox from "./_components/BatchChartBox";
import CounterBox from "./_components/CounterBox";
import Header from "./_components/Header";
import PerformerBox from "./_components/PerformerBox";
import RevenueChartBox from "./_components/RevenueChartBox";
import StatusBox from "./_components/StatusBox";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(true);

  const text = "Welcome To XFit-Kids";
  const letters = text.split("");

  const stagger = 0.2;
  const holdTime = 0.7;
  const exitStagger = 0.2;

  const totalTime = letters.length * stagger + holdTime + letters.length * exitStagger;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, (letters.length * stagger + holdTime) * 1000);
    return () => clearTimeout(timer);
  }, [letters.length, stagger, holdTime]);

  useEffect(() => {
    const finalTimer = setTimeout(() => {
      setIsLoading(false);
    }, totalTime * 1000);
    return () => clearTimeout(finalTimer);
  }, [totalTime]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <>
      {isLoading ? (
        <AnimatePresence>
          {showText && (
            <motion.div
              className="fixed inset-0 bg-gradient-to-l from-[#375DBE] to-[#102A6D] flex items-center justify-center z-50"
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 2, delay: 3 } }}
            >
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-[#E5E5E5] text-7xl font-black"
                  variants={letterVariant}
                  exit={{ opacity: 0, x: -20, transition: { delay: i * exitStagger } }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="w-full flex flex-col items-center px-10 gap-11">
          <Header />
          <CounterBox />
          <div className="w-full grid grid-cols-2 gap-8 mb-8">
            <StatusBox />
            <BatchChartBox />
            <RevenueChartBox />
            <PerformerBox />
          </div>
        </div>
      )}
    </>
  );
}
