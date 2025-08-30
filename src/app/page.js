"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BatchChartBox from "./_components/BatchChartBox";
import CounterBox from "./_components/CounterBox";
import Header from "./_components/Header";
import PerformerBox from "./_components/PerformerBox";
import RevenueChartBox from "./_components/RevenueChartBox";
import StatusBox from "./_components/StatusBox";
import { RiArrowRightWideLine } from "react-icons/ri";
import HideMenu from "@/components/layouts/HideMenu";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);


  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpenMenu(false),
    onSwipedRight: () => setIsOpenMenu(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
                  className="text-[#E5E5E5] PoppinsExtra md:text-7xl text-2xl font-black"
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
        <div className="w-full flex flex-col items-center md:px-10 px-2.5 md:gap-11 gap-6 relative">
          <Header />
          <CounterBox />
          <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 mb-8">
            <StatusBox />
            <BatchChartBox />
            <RevenueChartBox />
            <PerformerBox />
          </div>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)} className={`absolute ${isOpenMenu ? "left-[255px]" : "left-[-10px]"} animate-pulse transition-all duration-200 top-[67px] bg-white md:hidden flex items-center justify-center py-1 rounded-r-full border-solid border-[#0F296D] border-2 text-[#0F296D] z-10`}>
            <RiArrowRightWideLine size={28} className={isOpenMenu ? "rotate-180" : ""} />
          </button>
          <div {...handlers} onClick={() => setIsOpenMenu(false)}>
            <HideMenu isOpenMenu={isOpenMenu} onClose={() => setIsOpenMenu(false)} onOpen={() => setIsOpenMenu(true)} />
          </div>
        </div>
      )}
    </>
  );
}
