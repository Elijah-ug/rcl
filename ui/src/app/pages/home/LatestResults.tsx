import { useGetAllMatchesQuery } from "@/app/state/features/matches/matchesQuery";
import React from "react";
import { Link } from "react-router-dom";

export const LatestResults: React.FC = () => {
  const { data: matches, isLoading } = useGetAllMatchesQuery();
  console.log("Match results==>", matches);

  return (
    <section className="sm:flex sm:items-center justify-center">
      <div className="sm:w-3xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl  font-bold text-gray-500">Latest Results</h2>
          <Link to="/results" className="text-sm font-medium text-amber-600 hover:text-amber-500 transition">
            View All Results →
          </Link>
        </div>

        <div className="grid gap-1 ">
          {matches &&
            !isLoading &&
            matches.data.map(
              (match) =>
                (match.status === "FT" || match.status === "HT") && (
                  <div
                    key={match.id}
                    className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-4 bg-white hover:shadow-sm transition"
                  >
                    {/* Teams */}
                    <div className="flex items-center gap-3 font-medium text-gray-900">
                      <span>{match.host.name}</span>
                      <div className="text-sm text-gray-500">
                        <span>{match.host_score}</span> - <span>{match.visitor_score}</span>
                      </div>
                      <span>{match.visitor.name}</span>
                    </div>

                    {/* Meta */}
                    <div className="text-sm text-gray-500">
                      <span>{match.status}</span> <span>{match.date}</span>{" "}
                    </div>
                  </div>
                ),
            )}
        </div>
      </div>
    </section>
  );
};
