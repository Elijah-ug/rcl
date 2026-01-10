import React from "react";
import { Link } from "react-router-dom";
import { backgroundImagwe1 } from "../../statics/images";

export const LandingPage: React.FC = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImagwe1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 max-w-3xl">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
          Rubanda Corporate League
        </span>

        <h3 className="text-2xl sm:text-5xl font-bold text-white leading-tight">
          Where Corporates Compete, <br />
          Connect & Celebrate
        </h3>

        <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
          The Rubanda Corporate League brings together organizations, teams, and professionals through structured sports
          competition, social dinners, and shared experiences that build stronger workplace relationships.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            to="/about"
            className="px-6 py-2 rounded-full bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400 transition"
          >
            Learn More
          </Link>
          <Link
            to="/table-standings"
            className="px-6 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition"
          >
            View Standings
          </Link>
        </div>
      </div>
    </section>
  );
};
