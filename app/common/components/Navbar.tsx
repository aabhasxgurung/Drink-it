import React from "react";
import { NavBar } from "../constant/navbar";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-4">
        <Link href={"/"}>
          <Image
            src="/home/logo.png"
            width={60}
            height={10}
            alt=""
            className="w-[200px] h-[60px]"
          />
        </Link>
        <ul className="flex gap-6 items-center font-league">
          {NavBar.map((nav) => (
            <Link
              href={nav.url || ""}
              key={nav.id}
              className="text-xl text-[#7B0323] font-league"
            >
              {nav.name}
            </Link>
          ))}
          <button className="border-[#7B0323] text-xl border-2 py-2 px-4 rounded-lg text-[#7B0323] hover:bg-[#7B0323] hover:text-white transition-all delay-100 duration-300 ">
            Contact Us
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
