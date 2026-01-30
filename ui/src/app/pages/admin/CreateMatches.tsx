import { useGetAllTeamsQuery } from "@/app/state/features/teams/teamQuery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, type FormEvent } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";
import { useGetAllMatchesQuery, useRegisterMatchMutation } from "@/app/state/features/matches/matchesQuery";
import { useNavigate } from "react-router-dom";
import type { SerializedError } from "@reduxjs/toolkit";

export const CreateMatches: React.FC = () => {
  const [addMatch, { isLoading, error }] = useRegisterMatchMutation();
  const { data: teams, isLoading: loadingTeams } = useGetAllTeamsQuery();
  const { data: matches, isLoading: loadingMatches } = useGetAllMatchesQuery();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<object | any>({
    matchday: "",
    host_team_id: "",
    visitor_team_id: "",
    venue: "",
    date: "",
    time: "",
  });
  const [day, setDay] = useState<Array<number>>([]);
  const handleAddMatch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Va lues ==>", credentials);
      console.log("type of time ==>", typeof credentials.time, credentials.time);
      const res = await addMatch({
        ...credentials,
        host_team_id: Number(credentials.host_team_id),
        visitor_team_id: Number(credentials.visitor_team_id),
      });
      console.log("Response==>", res);
      if (res?.data) {
        toast.success("Match Added");
        return navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log("An error=>", error);
      return toast.error("Failed to add team!");
    }
  };
  // map through matches, 2. check if any team has a fixed match that's equal to the user input,
  // const isFixed:boolean =()=> {
  matches?.data.map((match) =>  (match.matchday === parseInt(credentials.matchday))  
      // day.push(match.matchday);
    
  );

  console.log("day", day);
  // }
  return (
    <div className="flex items-cente justify-center ">
      <Card className="w-full max-w-xs sm:max-w-lg">
        <CardHeader>
          <CardTitle>Add Team</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddMatch}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="matchday">Matchday</Label>
                <Input
                  id="matchday"
                  type="number"
                  value={credentials.matchday}
                  onChange={(e) => setCredentials({ ...credentials, matchday: e.target.value })}
                />
              </div>

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
                        ),
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
                        ),
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
        {error && (
          <CardFooter>
            <p className="text-sm text-red-500">
              {"data" in error ? (error.data as any).message : (error as SerializedError).message}!
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};
