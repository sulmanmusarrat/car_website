"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);

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

  return (
    <header className="bg-black h-14 w-full flex items-center px-6">
      <nav className="flex justify-between items-center w-full">
        <h1 className="text-white font-bold text-lg">velocity</h1>
        <ul className="flex space-x-5 items-center text-white">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/model">MODEL</Link></li>
          <li><Link href="/electric">ELECTRIC</Link></li>
          <li><Link href="/suv">SUVS</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>

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
              ${showSearch ? "w-40 px-2 py-1 opacity-100" : "w-0 px-0 py-0 opacity-0"} `}
              style={{ pointerEvents: showSearch ? "auto" : "none" }} // clickable only when visible
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
        </ul>
      </nav>
    </header>
  );
}
