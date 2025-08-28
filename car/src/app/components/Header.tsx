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
    <header
      className="
        w-full flex items-center px-6 h-16 relative transition-colors duration-300
        bg-white dark:bg-black/20 backdrop-blur-xl
        border-b border-white/30 dark:border-white/10
        shadow-lg shadow-blue-500/10
      "
    >
      <nav className="flex justify-between items-center w-full">
        {/* Logo */}
        <h1 className="text-gray-900 dark:text-white font-extrabold text-xl tracking-wide">
          velocity
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-900 dark:text-gray-100 transition-colors">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                  hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]
                  transition-all duration-300
                "
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Search */}
          <li className="flex items-center relative">
            <button
              onClick={() => setShowSearch(true)}
              className="
                text-gray-900 dark:text-gray-100
                hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]
                transition-all
              "
            >
              <FaSearch className="text-xl" />
            </button>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className={`
                ml-2 rounded-md outline-none transition-all duration-300 ease-in-out
                bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/30 dark:border-white/10
                text-gray-900 dark:text-white placeholder-gray-400
                ${showSearch ? "w-40 px-2 py-1 opacity-100" : "w-0 px-0 py-0 opacity-0"}
              `}
              style={{ pointerEvents: showSearch ? "auto" : "none" }}
              autoFocus={showSearch}
            />
          </li>

          {/* Login/Profile */}
          <li>
            {isLoggedIn ? (
              profilePic ? (
                <Image
                  src={profilePic}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-white/40 cursor-pointer hover:shadow-[0_0_12px_#3b82f6]"
                />
              ) : (
                <FaUserCircle className="text-3xl cursor-pointer hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]" />
              )
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setProfilePic("https://i.pravatar.cc/100");
                }}
                className="
                  font-semibold hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]
                  transition-all
                "
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
            className="hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]"
          >
            <FaSearch className="text-xl" />
          </button>
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="
            md:hidden absolute top-16 left-0 w-full flex flex-col items-start py-4 px-4 space-y-4 z-50
            bg-white/20 dark:bg-black/20 backdrop-blur-xl border-t border-white/20 dark:border-white/10
          "
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                text-lg transition-all
                hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Login/Profile */}
          {isLoggedIn ? (
            profilePic ? (
              <Image
                src={profilePic}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-white/40 cursor-pointer hover:shadow-[0_0_12px_#3b82f6]"
              />
            ) : (
              <FaUserCircle className="text-3xl cursor-pointer hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6]" />
            )
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setProfilePic("https://i.pravatar.cc/100");
              }}
              className="hover:text-blue-400 hover:drop-shadow-[0_0_10px_#3b82f6] transition-all"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}
