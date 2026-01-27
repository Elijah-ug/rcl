import React from "react";
import { Link } from "react-router-dom";

export const NewsSection: React.FC = () => {
  const news = [
    {
      title: "RCL Matchday 5 Delivers Competitive Fixtures",
      excerpt:
        "Matchday five saw close encounters as teams pushed for top positions in the league table.",
      date: "19 Feb 2026",
    },
    {
      title: "Rubanda Corporate League Attracts New Partners",
      excerpt:
        "The league continues to grow with increased interest from corporate sponsors.",
      date: "14 Feb 2026",
    },
  ];

  return (
    <section className="py-16 sm:flex sm:items-center justify-center">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Latest News
          </h2>
          <Link
            to="/news"
            className="text-sm font-medium text-amber-600 hover:text-amber-500 transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {news.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white rounded-2xl p-6 hover:shadow-md transition"
            >
              <span className="text-xs text-gray-400">
                {item.date}
              </span>
              <h3 className="mt-2 font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
