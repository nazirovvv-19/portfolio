"use client";
import useMyStore from "@/store/store";
import { Button } from "antd";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { darkMode, toggleDarkMode, isOpenNavbar } = useMyStore();

  return (
    <div
      className={` py-3 relative ${
        darkMode ? "text-white bg-[#080e3a]" : "text-black"
      }`}
    >
      <div
        className={`flex justify-between items-center w-full px-7 py-1 ${
          isOpenNavbar ? "relative top-10" : "relative top-0"
        } ${darkMode ? "bg-[#080e3a]" : "bg-white"}`}
      >
        <ul className="flex gap-10">
          <Link href={"/"}>
            <li className="transition-transform duration-200 hover:scale-105">
              Home
            </li>
          </Link>
          <Link href={"/pages/about"}>
            <li className="transition-transform duration-200 hover:scale-105">
              About
            </li>
          </Link>
            {" "}
          <Link href={"/pages/skills"}>
            <li className="transition-transform duration-200 hover:scale-105">
              Skills
            </li>
          </Link>
          <Link href={"/pages/contact"}>
            <li className="transition-transform duration-200 hover:scale-105">
              Contact
            </li>
          </Link>
        </ul>
        <div>
          <Button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
