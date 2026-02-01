import { useGetMatchQuery, useUpdateMatchMutation } from "@/app/state/features/matches/matchesQuery";
import React, { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";
import { Spinner } from "@/components/ui/spinner";
import type { SerializedError } from "@reduxjs/toolkit";

export const EditMatch: React.FC = () => {
  const { match } = useParams();
  const navigate = useNavigate();

  const { data: game, isLoading } = useGetMatchQuery(Number(match), { skip: !match });
  const [updateMatch, { isLoading: loadUpdate, error: updateErr }] = useUpdateMatchMutation();
  const [matchInfo, setMatchInfo] = useState<object | any>({
    visitor_score: game?.data.visitor_score || "",
    host_score: game?.data.host_score || "",
    status: game?.data.status || "",
  });

  const handleUpdateScores = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await updateMatch({ data: matchInfo, match: game.data.id });
      console.log("Update response==>", res);
      if (res.data) {
        toast.success(res?.data.message);
        return navigate("/admin-dashboard/all-matches");
      }
    } catch (error) {
      console.log("Error==>", error);
      toast.error("Failed to update");
    }
  };
  console.log("From matchInfo==>", matchInfo);
  return (
    <div className="flex items-cente justify-center ">
      {isLoading ? (
        <Spinner className="size-8" />
      ) : (
        <Card className="w-full max-w-xs sm:max-w-lg">
          <CardHeader>
            <CardTitle>Add Team</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateScores}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="visitor_score">Host Score</Label>
                  <Input
                    id="visitor_score"
                    type="number"
                    min={0}
                    required
                    value={matchInfo.host_score}
                    onChange={(e) => setMatchInfo({ ...matchInfo, host_score: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="visitor_score">Visitor Score</Label>
                  <Input
                    id="visitor_score"
                    type="number"
                    min={0}
                    required
                    value={matchInfo.visitor_score}
                    onChange={(e) => setMatchInfo({ ...matchInfo, visitor_score: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="status">Match Status</Label>
                  <select
                    name="status"
                    id="status"
                    value={matchInfo.status}
                    required
                    onChange={(e) => setMatchInfo({ ...matchInfo, status: e.target.value })}
                    className="p-1 border-2 rounded"
                  >
                    <option value="______"></option>
                    <option value="pending">Pending</option>
                    <option value="HT">Half time</option>
                    <option value="FT">Full time</option>
                    <option value="postponed">Postponed</option>
                  </select>
                </div>

                <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                  {loadUpdate ? <LoadingSpinner /> : "Add Team"}
                </Button>
              </div>
              {updateErr && (
                <div className="text-sm text-red-500 pt-3">
                  {"data" in updateErr ? (updateErr.data as any).message : (updateErr as SerializedError).message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
