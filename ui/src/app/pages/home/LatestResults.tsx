import React from "react";

export const LatestResults: React.FC = () => {
  const results = [
    {
      home: "Stanbic FC",
      away: "PostBank FC",
      homeScore: 2,
      awayScore: 1,
      date: "18 Feb 2026",
    },
    {
      home: "MTN United",
      away: "Kigezi Corp",
      homeScore: 0,
      awayScore: 0,
      date: "17 Feb 2026",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Results</h2>

        <div className="grid gap-4">
          {results.map((match, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-4 bg-white hover:shadow-sm transition"
            >
              {/* Teams */}
              <div className="flex items-center gap-3 font-medium text-gray-900">
                <span>{match.home.slice(0, 3)}</span>
                <div className="text-sm text-gray-500">
                  <span>{match.homeScore}</span> - <span>{match.awayScore}</span>
                </div>
                <span>{match.away.slice(0, 3)}</span>
              </div>

              {/* Meta */}
              <div className="text-sm text-gray-500">FT · {match.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
