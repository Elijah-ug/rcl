import React from "react";

export const UpcomingMatches: React.FC = () => {
  const matches = [
    {
      home: "Stanbic FC",
      away: "Kigezi Corp",
      date: "24 Feb 2026",
      time: "4:00 PM",
      venue: "Rubanda Stadium",
      round: "Matchday 5",
    },
    {
      home: "PostBank FC",
      away: "MTN United",
      date: "25 Feb 2026",
      time: "6:00 PM",
      venue: "Rubanda Stadium",
      round: "Matchday 5",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Matches</h2>
          <span className="text-sm text-gray-500">Fixtures</span>
        </div>

        {/* Matches */}
        <div className="grid gap-3 sm:gap-4">
          {matches.map((match, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border bg-white border-gray-200 rounded-xl px-6 py-4 hover:shadow-md transition"
            >
              {/* Teams */}
              <div className="flex items-center gap-4 font-semibold text-gray-900">
                <span>{match.home}</span>
                <span className="text-gray-400">vs</span>
                <span>{match.away}</span>
              </div>

              {/* Match Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>📅 {match.date}</span>
                <span>⏰ {match.time}</span>
                <span>📍 {match.venue}</span>
                <span className="text-amber-600 font-medium">{match.round}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
