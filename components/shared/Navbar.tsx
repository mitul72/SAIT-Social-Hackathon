import React from "react";
import Logo from "@/assets/logo-sait-vertical-downloadable.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="p-5 bg-neutral-500 bg-opacity-5 rounded-xl">
      <ul className="flex justify-between items-center mx-6">
        <li className="text-blue-500 font-bold text-4xl">
          SAIT<span className="text-red-500">FACE</span>
        </li>
        <li className="w-10">
          <Image src={Logo} alt="SAIT logo" />
        </li>
      </ul>
    </nav>
  );
}
