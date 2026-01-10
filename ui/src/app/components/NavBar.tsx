import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", link: "/" },
    { name: "About", link: "about" },
    { name: "Table Standings", link: "table-standings" },
    { name: "Dinner", link: "dinner" },
    { name: "Gallery", link: "gallery" },
    { name: "Dashboard", link: "admin-dashboard" },
  ];

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive ? "bg-violet-600 text-white shadow-md" : "text-gray-700 hover:bg-violet-100 hover:text-violet-700"
    } px-4 py-1.5 rounded-full font-medium transition-all duration-300`;

  return (
    <nav className="sticky top-0 z-50 px-6 sm:px-10 py-3 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
            <span className="text-white font-bold lowercase">rcl</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-3">
          {routes.map((route, i) => (
            <NavLink key={i} to={route.link} className={navItemClass}>
              {route.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden p-2 rounded-full hover:bg-gray-100 transition">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden mt-3 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-lg">
          {routes.map((route, i) => (
            <NavLink key={i} to={route.link} onClick={() => setIsOpen(false)} className={navItemClass}>
              {route.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
