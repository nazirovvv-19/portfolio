"use client";
import useMyStore from "@/store/store";
import { Button } from "antd";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const { darkMode, toggleDarkMode } = useMyStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full py-3 z-50 transition-all duration-300 ${
        darkMode
          ? "text-white bg-gray-900"
          : "text-gray-800 bg-white"
      } ${
        scrolled ? "shadow-lg py-2" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold hover:opacity-80 transition-opacity">
              LOGO
            </h1>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            <Link href={"/"}>
              <li className="hover:text-blue-500 transition-colors duration-200 py-2 px-1 font-medium">
                Home
              </li>
            </Link>
            <Link href={"/pages/about"}>
              <li className="hover:text-blue-500 transition-colors duration-200 py-2 px-1 font-medium">
                About
              </li>
            </Link>
            <Link href={"/pages/skills"}>
              <li className="hover:text-blue-500 transition-colors duration-200 py-2 px-1 font-medium">
                Skills
              </li>
            </Link>
            <Link href={"/pages/contact"}>
              <li className="hover:text-blue-500 transition-colors duration-200 py-2 px-1 font-medium">
                Contact
              </li>
            </Link>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              onClick={toggleDarkMode}
              type="text"
              className="flex items-center justify-center"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="text-xl    text-white" />
              ) : (
                <FaMoon className="text-xl  text-black" />
              )}
            </Button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close menu"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          <ul className="flex flex-col gap-6">
            <Link href={"/"} onClick={closeMobileMenu}>
              <li className="py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
                Home
              </li>
            </Link>
            <Link href={"/pages/about"} onClick={closeMobileMenu}>
              <li className="py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
                About
              </li>
            </Link>
            <Link href={"/pages/skills"} onClick={closeMobileMenu}>
              <li className="py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
                Skills
              </li>
            </Link>
            <Link href={"/pages/contact"} onClick={closeMobileMenu}>
              <li className="py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;