import GreatDumbbell from "@/assets/icons/GreatDumbbell";
import Image from "next/image";
import React from "react";
import user1 from "../../../public/user-1.jpg";
import user2 from "../../../public/user-2.jpg";
import user3 from "../../../public/user-3.jpg";

export default function PerformerBox() {
  const data = [
    {
      profile: user1,
      userName: "Nivaan",
      performerName: "Jr. Knights",
      color: "bg-[#F1554C]",
      rate: "90% ",
      btn: "Blue Badge",
    },
    {
      profile: user2,
      userName: "Navya",
      performerName: "Gladiators",
      color: "bg-[#0D276BFC]",
      rate: "80%",
      btn: "Pink Badge",
    },
    {
      profile: user3,
      userName: "Anugrah",
      performerName: "Spartans",
      color: "bg-[#FFA5A0]",
      rate: "70% ",
      btn: "Orange Badge",
    },
  ];

  return (
    <div className="w-full bg-white rounded-[25px] flex flex-col items-start p-10 gap-9 shadow-[0_5px_15px_rgba(0,0,0,0.14)]">
      <div className="w-full flex items-center justify-between">
        <span className="text-[17px] font-semibold text-[#393D54]">
          Top Performer
        </span>
        <select
          name=""
          id=""
          className="text-[#c4c4c4c6] p-2 border border-[#c4c4c4c7] rounded-[10px]"
        >
          <option value="">june - july</option>
          <option value="">empty :(</option>
        </select>
      </div>
      <div className="w-full grid grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full relative ${item.color} text-white flex flex-col items-center gap-2 p-3.5 rounded-[20px]`}
          >
            <GreatDumbbell costumClass="absolute -top-2 -right-2 z-10" />
            <Image
              src={item.profile}
              alt={item.userName}
              width={41}
              height={41}
              className="w-[41px] h-[41px] rounded-full"
            />
            <span className="text-[15px] font-bold">{item.userName}</span>
            <span className="text-[10px] font-medium">
              {item.performerName}
            </span>
            <span className="text-[17px] font-bold">{item.rate}</span>
            <span className="text-[10px] font-medium">Attendance</span>
            <button className="w-full bg-[#FFFFFF87] py-2.5 text-sm font-bold rounded-[11px]">
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
