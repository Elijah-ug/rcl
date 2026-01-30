import React from "react";

export const Results: React.FC = () => {
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

    {
      home: "Kimeeza FC",
      away: "Bavubuka FC",
      homeScore: 2,
      awayScore: 1,
      date: "18 Feb 2026",
    },
    {
      home: "Medical FC",
      away: "NewGangs",
      homeScore: 0,
      awayScore: 0,
      date: "17 Feb 2026",
    },

    {
      home: "Foresters FC",
      away: "Riders FC",
      homeScore: 0,
      awayScore: 0,
      date: "17 Feb 2026",
    },
  ];

  return (
    <section className="py-16 sm:flex sm:items-center justify-center">
      <div className="sm:w-xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl  font-bold text-gray-500">Latest Results</h2>
          <span className="text-amber-600 hover:underline">Match day 3</span>
        </div>

        <div className="grid gap-1">
          {results.map((match, i) => (
            <div
              key={i}
              className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-4 bg-white shadow-md hover:bg-gray-100 transition"
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
