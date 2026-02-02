import { useGetAllMatchesQuery } from "@/app/state/features/matches/matchesQuery";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const Matches: React.FC = () => {
  const { data: match, isLoading } = useGetAllMatchesQuery();
  //   console.log("all matches here==>", match);
  return (
    <div className="px-6 py-7">
      {isLoading ? (
        <Spinner className="size-8" />
      ) : (
        <div className="grid gap-1 p-3  sm:w-2xl lg:w-3xl mx-auto">
          {match &&
            match?.data.map((match) =>   (
              <div key={match.id} className="border-b py-3 px-4 flex items-center justify-between bg-gray-300">
                <div className="flex items-center gap-3">
                  <p className={`flex items-center gap-2 ${match.host_score > match.visitor_score && "text-blue-400"} `}>
                    <span>{match.host.name}</span>
                  </p>
                  {match.status === "FT" || match.status === "HT" ? (
                    <div className="flex items-center gap-3">
                      <span>{match.host_score || 0}</span>
                      <span>:</span>
                      <span>{match.visitor_score || 0}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span>Vs</span>
                    </div>
                  )}
                  <p className={`flex items-center gap-2 ${match.visitor_score > match.host_score && "text-violet-400"}`}>
                    <span>{match.visitor.name}</span>
                  </p>
                </div>
                <div className="capitalize">
                  <span>{match.status}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
