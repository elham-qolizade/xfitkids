"use client";

import React from "react";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import AttendanceIcon from "@/assets/icons/AttendanceIcon";
import SessionsIcon from "@/assets/icons/SessionsIcon";
import CoachesIcon from "@/assets/icons/CoachesIcon";
import ExercisePlanIcon from "@/assets/icons/ExercisePlanIcon";
import RegistrationsIcon from "@/assets/icons/RegistrationsIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import Logo from "../../../public/Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HideMenu({ isOpenMenu }) {
  const pathname = usePathname();

  // Links are disabled!! //
  const links = [
    { href: "/", label: "Dashboard", icon: DashboardIcon },
    { href: "/", label: "Attendance", icon: AttendanceIcon },
    { href: "/", label: "Sessions", icon: SessionsIcon },
    { href: "/", label: "Coaches", icon: CoachesIcon },
    { href: "/", label: "Exercises", icon: ExercisePlanIcon },
    { href: "/", label: "Registration", icon: RegistrationsIcon },
    { href: "/", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <div
      className={`w-[260px] h-full absolute ${
        isOpenMenu ? "left-0" : "-left-[260px]"
      } top-0 z-30 transition-all duration-200 bg-[#0F296D] md:hidden flex flex-col items-center gap-8 pt-5`}
    >
      <div className="w-full flex items-end justify-center gap-2">
        <Image src={Logo} alt="Logo" width={40} height={40} className="" />
        <h2 className="text-[#F3F5FB] PoppinsExtra text-2xl">XFIT KIDS</h2>
      </div>

      <div className="w-full flex flex-col items-center gap-2 px-4">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={index}
              href={link.href}
              className={`w-full rounded-[25px] flex items-center justify-center gap-2 py-5 ${
                isActive
                  ? "text-[#0F296D] bg-[#F3F5FB]"
                  : "text-white bg-[#0F296D]"
              }
              `}
            >
              <Icon color={isActive ? "#0F296D" : "#FFFFFF"} size={20} />
              <span className="text-[15px] PoppinsBold font-bold">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
