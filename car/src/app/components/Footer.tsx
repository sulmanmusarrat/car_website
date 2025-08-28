import React from "react";
import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react"; // icons

export default function Footer() {
  return (
    <footer
      className="
        relative w-full px-6 sm:px-8 py-10
        bg-white dark:bg-black/30 backdrop-blur-md
        border-t border-white/20 dark:border-white/10
      "
    >
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 blur-sm opacity-70"></div>

      <ul className="text-black dark:text-white text-sm sm:text-base flex flex-col items-center gap-6">
        
        {/* Line 1 */}
        <li>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {["About", "Career", "Newsroom", "Investor Relations", "SUSTAINABILITY"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Line 2 */}
        <li>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
            {["Legal", "Privacy Policy", "Contact Us"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-blue-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* Line 3: Social Media */}
        <li>
          <ul className="flex justify-center gap-6 sm:gap-8">
            <li>
              <a
                href="https://wa.me/+92349578998"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/sulmanmusarrat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/sulmanmusarrat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-300 hover:text-pink-500 drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]" />
              </a>
            </li>
          </ul>
        </li>

        {/* Line 4: Copyright */}
        <li className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center px-2">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-500">Velocity</span>. All rights reserved.
        </li>
      </ul>
    </footer>
  );
}
