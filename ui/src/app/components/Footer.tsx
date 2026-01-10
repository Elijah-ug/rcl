import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 sm:px-10 pt-12 pb-6">
      <div className="grid gap-10 sm:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold lowercase">rcl</span>
            </div>
            <span className="text-white font-semibold">Rubanda Corporate League</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing teams together through competition, sportsmanship, and corporate excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Dinner", link: "/dinner" },
              { name: "Gallery", link: "/gallery" },
              { name: "Games", link: "/games" },
              { name: "Table Standings", link: "/table-standings" },
            ].map((item, i) => (
              <li key={i}>
                <Link to={item.link} className="hover:text-amber-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            {[
              { Icon: Twitter, link: "#" },
              { Icon: Send, link: "#" }, // Telegram
              { Icon: Linkedin, link: "#" },
              { Icon: Facebook, link: "#" },
              { Icon: Instagram, link: "#" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Rubanda Corporate League. All rights reserved.
      </div>
    </footer>
  );
};
