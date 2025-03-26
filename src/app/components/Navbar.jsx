"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const menuLinks = [
  { title: "Home", path: "/" },
  { title: "Menu", path: "/menu" },
  { title: "About Us", path: "/about" },
  { title: "Location", path: "/location" },
  { title: "Party Info", path: "/party" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname(); // ✅ Ambil path saat ini
  const user = true;

  const logout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-pink-700 py-3 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:animate-bounce"
          >
            <span className="text-3xl">🍮</span>
            <span className="text-2xl font-bold text-white font-comic">
              Lush<span className="text-yellow-300">Jelly</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-white/20 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-full transition-all ${
                  pathname === item.path
                    ? "bg-white text-pink-600 shadow-md"
                    : "text-white hover:bg-white/30 hover:shadow-sm"
                }`}
              >
                {item.title}
              </Link>
            ))}

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className="px-4 py-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all"
                >
                  My Account
                </button>
                {openMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-3 text-gray-700 hover:bg-pink-100 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 bg-yellow-300 rounded-full text-pink-700 font-medium hover:bg-yellow-400 hover:shadow-md transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
            <ul className="py-2">
              {menuLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-3 ${
                      pathname === item.path
                        ? "bg-pink-100 text-pink-600"
                        : "text-gray-700 hover:bg-pink-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="border-t border-gray-100">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-3 text-gray-700 hover:bg-pink-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-pink-50"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
