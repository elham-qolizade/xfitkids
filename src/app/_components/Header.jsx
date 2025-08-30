import NotificationIcon from "@/assets/icons/NotificationIcon";
import React from "react";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import userProfile from "../../../public/profile.png";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-white rounded-b-[20px] md:px-6 px-2 py-4 shadow-[0_5px_15px_rgba(0,0,0,0.04)]">
      <h2 className="md:text-[17px] text-[14px] PoppinsBold font-bold text-[#0F296D]">
        Welcome to xfitkids
      </h2>
      <div className="flex items-center md:gap-10 gap-2">
        <div className="flex items-center border border-[#CCCCCC] rounded-[10px] md:px-3 px-2 md:py-1.5 py-2 gap-2">
          <IoMdSearch size={19} className="text-[#CCCCCC]" />
          <input
            type="text"
            name=""
            id=""
            className="outline-none border-none pr-24 md:block hidden"
            placeholder="Search..."
          />
        </div>
        <NotificationIcon />
        <div className="flex items-center md:gap-3.5">
          <Image
            src={userProfile}
            alt="User Profile"
            width={40}
            height={40}
            className="rounded-[10px]"
          />
          <FaAngleDown className="text-[#CCCCCC] md:block hidden" />
        </div>
      </div>
    </div>
  );
}
