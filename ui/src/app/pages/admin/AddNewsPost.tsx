import { useGetAllTeamsQuery } from "@/app/state/features/teams/teamQuery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, type FormEvent } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";
import { useRegisterMatchMutation } from "@/app/state/features/matches/matchesQuery";

export const AddNewsPost: React.FC = () => {
  const [addMatch, { isLoading }] = useRegisterMatchMutation();
  const { data: teams, isLoading: loadingTeams } = useGetAllTeamsQuery();
  const [credentials, setCredentials] = useState<object | any>({
    host_team_id: "",
    visitor_team_id: "",
    venue: "",
    date: "",
    time: "",
  });

  const handleAddMatch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Values ==>", credentials);
      const res = await addMatch({
        ...credentials,
        host_team_id: Number(credentials.host_team_id),
        visitor_team_id: Number(credentials.visitor_team_id),
      });
      if (res?.error) {
        toast.error(res?.error.data.message);
      }
      console.log("Response==>", res);
    } catch (error) {
      console.log("An error=>", error);
      return toast.error("Failed to add team!");
    }
  };
  return (
    <div className="flex items-cente justify-center ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add Team</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddMatch}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="team">Home Team</Label>
                <select
                  name="Teams"
                  id="teams"
                  value={credentials.host_team_id}
                  onChange={(e) => setCredentials({ ...credentials, host_team_id: e.target.value })}
                  className="p-1 border-2 rounded"
                >
                  <option value="____" className="text-xs"></option>
                  {teams &&
                    !loadingTeams &&
                    teams.teams.map(
                      (team) =>
                        Number(credentials.visitor_team_id) !== Number(team.id) && (
                          <option key={team.id} value={team.id}>
                            {team.name}
                          </option>
                        )
                    )}
                </select>
              </div>
              {/* away team */}
              <div className="grid gap-2">
                <Label htmlFor="team">Away Team</Label>
                <select
                  name="Teams"
                  id="teams"
                  value={credentials.visitor_team_id}
                  onChange={(e) => setCredentials({ ...credentials, visitor_team_id: e.target.value })}
                  className="p-1 border-2 rounded"
                >
                  <option value="____" className="text-xs"></option>
                  {teams &&
                    !loadingTeams &&
                    teams.teams.map(
                      (team) =>
                        Number(credentials.host_team_id) !== Number(team.id) && (
                          <option key={team.id} value={team.id}>
                            {team.name}
                          </option>
                        )
                    )}
                </select>
              </div>
              {/*  */}

              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={credentials.date}
                  onChange={(e) => setCredentials({ ...credentials, date: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={credentials.time}
                  onChange={(e) => setCredentials({ ...credentials, time: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  type="venue"
                  value={credentials.venue}
                  onChange={(e) => setCredentials({ ...credentials, venue: e.target.value })}
                />
              </div>

              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                {isLoading ? <LoadingSpinner /> : "Add Team"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
