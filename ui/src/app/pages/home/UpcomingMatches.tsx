import { useGetAllMatchesQuery } from "@/app/state/features/matches/matchesQuery";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const UpcomingMatches: React.FC = () => {
  
  const { data, isLoading } = useGetAllMatchesQuery();
  console.log("all matches==>", data);

  return (
    <section className=" lg:w-3xl mx-auto h-screen ">
      <div className="">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Matches</h2>
          <span className="text-sm text-gray-500">Fixtures</span>
        </div>

        {/* Matches */}
        {isLoading ? (
          <Spinner className="size-8" />
        ) : data ? (
          <div className="flex flex-col justify-center gap-3 sm:gap-4 sm:w-2xl">
            {data.data.map((match) => (
              <div
                key={match.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border bg-white border-gray-200 shadow-lg rounded-xl px-6 py-4 hover:shadow-md transition max-w-full sm:w-smm"
              >
                {/* Teams */}
                {/* <div className="flex items-center gap-4 font-semibold text-gray-900">
                  <span>{match.home}</span>
                  <span className="text-gray-400">vs</span>
                  <span>{match.away}</span>
                </div> */}

                {/* Match Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>📅 {match.date}</span>
                  <span>⏰ {match.time}</span>
                  <span>📍 {match.venue}</span>
                  {/* <span className="text-amber-600 font-medium">{match.round}</span> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h3 className="font-semibold text-lg text-amber-600">No Matches Updates Yet!, Keep an eye for updates!</h3>
          </div>
        )}
      </div>
    </section>
  );
};
