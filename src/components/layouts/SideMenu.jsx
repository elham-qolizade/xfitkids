"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/Logo.png";
import Dumbbell from "../../../public/Dumbbell.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import AttendanceIcon from "@/assets/icons/AttendanceIcon";
import SessionsIcon from "@/assets/icons/SessionsIcon";
import CoachesIcon from "@/assets/icons/CoachesIcon";
import ExercisePlanIcon from "@/assets/icons/ExercisePlanIcon";
import RegistrationsIcon from "@/assets/icons/RegistrationsIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import { FiMoreVertical } from "react-icons/fi";

export default function SideMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/", label: "Dashboard", icon: DashboardIcon },
    { href: "/attendance", label: "Attendance", icon: AttendanceIcon },
    { href: "/sessions", label: "Sessions", icon: SessionsIcon },
    { href: "/coaches", label: "Coaches", icon: CoachesIcon },
    { href: "/exerciseplan", label: "Exercises", icon: ExercisePlanIcon },
    { href: "/registrations", label: "Registration", icon: RegistrationsIcon },
    { href: "/settings", label: "Settings", icon: SettingsIcon },
  ];

  const activeIndex = links.findIndex((l) => l.href === pathname);

  return (
    <div className="w-[250px] h-full sticky left-0 top-0 bg-[#0F296D] md:flex hidden flex-col items-center gap-6 pl-8">
      <div className="w-full flex items-end justify-center gap-2">
        <Image src={Logo} alt="Logo" width={40} height={40} className="mt-5" />
        <h2 className="font-extrabold PoppinsExtra text-[#F3F5FB]">
          XFIT KIDS
        </h2>
      </div>
      <div className="w-full flex flex-col items-start bg-[#F3F5FB] relative">
        <div
          className={`w-full h-[30px] bg-[#0F296D] ${
            activeIndex === 0 ? "rounded-br-[30px]" : "rounded-br-0px"
          }`}
        ></div>
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          const isPrev = index === activeIndex - 1;
          const isNext = index === activeIndex + 1;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full z-10 flex items-center gap-2 pl-5 py-5 ${
                isActive
                  ? "text-[#0F296D] bg-[#F3F5FB] rounded-l-[30px]"
                  : "text-white bg-[#0F296D] rounded-l-0px"
              }
              ${isPrev ? "rounded-br-[30px]" : ""}
              ${isNext ? "rounded-tr-[30px]" : ""}
              `}
            >
              <Icon color={isActive ? "#0F296D" : "#FFFFFF"} size={20} />
              <span className="text-[15px] PoppinsBold font-bold">
                {link.label}
              </span>
            </Link>
          );
        })}
        <div className="absolute top-0 left-0 bottom-0 bg-[#0F296D] w-7 z-0"></div>
        <div
          className={`w-full h-[30px] bg-[#0F296D] ${
            activeIndex === links.length - 1
              ? "rounded-tr-[30px]"
              : "rounded-tr-0px"
          }`}
        ></div>
      </div>

      <div className="w-fit flex flex-col items-center rounded-[28px] bg-white mt-7 mb-5 px-9 py-4 gap-3">
        <div className="w-full flex justify-end">
          <FiMoreVertical className="text-[#393D54]" size={21} />
        </div>
        <Image src={Dumbbell} alt="Logo" width={120} height={125} />
        <span className="text-xs font-semibold text-[#393D54]">
          Schedule an event
        </span>
      </div>
    </div>
  );
}
