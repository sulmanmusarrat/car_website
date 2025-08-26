"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "MODEL", href: "/model" },
    { name: "ELECTRIC", href: "/electric" },
    { name: "SUVS", href: "/suv" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="bg-black w-full flex items-center px-6 h-14 relative">
      <nav className="flex justify-between items-center w-full">
        <h1 className="text-white font-bold text-lg">velocity</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 items-center text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}

          {/* Expandable Search */}
          <li className="flex items-center relative">
            <button
              onClick={() => setShowSearch(true)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaSearch className="text-xl" />
            </button>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className={`ml-2 bg-gray-800 text-white placeholder-gray-400 rounded-md outline-none transition-all duration-300 ease-in-out 
              ${showSearch ? "w-40 px-2 py-1 opacity-100" : "w-0 px-0 py-0 opacity-0"}`}
              style={{ pointerEvents: showSearch ? "auto" : "none" }}
              autoFocus={showSearch}
            />
          </li>

          {/* Login / Profile */}
          <li>
            {isLoggedIn ? (
              profilePic ? (
                <Image
                  src={profilePic}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-white cursor-pointer"
                />
              ) : (
                <FaUserCircle className="text-white text-3xl cursor-pointer" />
              )
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setProfilePic("https://i.pravatar.cc/100");
                }}
                className="text-white font-semibold hover:underline"
              >
                Login
              </button>
            )}
          </li>
          <ModeToggle />
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-gray-300 hover:text-white"
          >
            <FaSearch className="text-xl" />
          </button>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 text-white z-50">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:underline text-lg"
            >
              {item.name}
            </Link>
          ))}

          {/* Login / Profile */}
          {isLoggedIn ? (
            profilePic ? (
              <Image
                src={profilePic}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-white cursor-pointer"
              />
            ) : (
              <FaUserCircle className="text-white text-3xl cursor-pointer" />
            )
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setProfilePic("https://i.pravatar.cc/100");
              }}
              className="text-white font-semibold hover:underline"
            >
              Login
            </button>
          )}
          <ModeToggle />
        </div>
      )}

      {/* Mobile Search Input */}
      {showSearch && (
        <div className="md:hidden absolute top-14 right-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white placeholder-gray-400 rounded-md px-2 py-1 outline-none w-48"
            autoFocus
          />
        </div>
      )}
    </header>
  );
}
