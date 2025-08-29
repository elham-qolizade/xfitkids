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

  return (
    <div className="w-[250px] h-full sticky left-0 top-0 bg-[#0F296D] flex flex-col items-center gap-14">
      <div className="w-full flex items-end justify-center gap-2">
        <Image src={Logo} alt="Logo" width={40} height={40} className="mt-5" />
        <h2 className="font-extrabold text-[#F3F5FB]">XFIT KIDS</h2>
      </div>

      <div className="w-full flex flex-col items-start pl-8 gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full flex items-center gap-2 pl-5 py-5 rounded-l-[30px] ${
                isActive
                  ? "text-[#0F296D] bg-[#F3F5FB]"
                  : "text-white bg-transparent"
              }`}
            >
              <Icon color={isActive ? "#0F296D" : "#FFFFFF"} size={20} />
              <span className="text-[15px] font-bold">{link.label}</span>
            </Link>
          );
        })}
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
