import { useGetAllMatchesQuery } from "@/app/state/features/matches/matchesQuery";
import { Spinner } from "@/components/ui/spinner";
import { SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const AllMatches: React.FC = () => {
  const { data: match, isLoading } = useGetAllMatchesQuery();
  //   console.log("all matches here==>", match);
  return (
    <div className="">
      {isLoading ? (
        <Spinner className="size-8" />
      ) : (
        <div className="grid gap-1 p-3  sm:w-2xl lg:w-3xl mx-auto">
          {match &&
            match?.data.map((match) => (
              <div key={match.id} className="border-b py-3 px-4 flex items-center justify-between bg-gray-300">
                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-2">
                    <span>{match.visitor.name}</span>
                    <span>{match.visitor_score || 0}</span>
                  </p>
                  <span>:</span>
                  <p className="flex items-center gap-2">
                    <span>{match.host_score || 0}</span>
                    <span>{match.host.name}</span>
                  </p>
                </div>
                <div className="capitalize">
                  <span>{match.status}</span>
                </div>
                <div className="flex items-center gap-7 text-blue-400">
                  <Link to={`/admin-dashboard/all-matches/${match.id}`}>
                    <SquarePen />
                  </Link>
                  <Trash2 className="text-red-500" />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
