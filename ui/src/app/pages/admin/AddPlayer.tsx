import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useGetAllTeamsQuery } from "@/app/state/features/teams/teamQuery";

export const AddPlayer: React.FC = () => {
  const [credentials, setCredentials] = useState<object | any>({
    name: "",
    team: "",
    age: "",
    residence: "",
  });
  const { data: teams, isLoading: loadingTeams } = useGetAllTeamsQuery();
  const handleAddPlayer = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div className="flex items-cente justify-center ">
      <Card className="w-full max-w-xs sm:max-w-lg">
        <CardHeader>
          <CardTitle>Register Player</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddPlayer}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Player Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter team name"
                  required
                  value={credentials.name}
                  onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="team">Player's Team </Label>
                <select
                  name="team"
                  id="team"
                  value={credentials.team}
                  onChange={(e) => setCredentials({ ...credentials, team: e.target.value })}
                  className="p-1.5 border-2 rounded"
                >
                  <option value="___">Select Team</option>
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

              <div className="grid gap-2">
                <Label htmlFor="age">Player's Age (Optional)</Label>
                <Input
                  id="age"
                  type="age"
                  value={credentials.age}
                  onChange={(e) => setCredentials({ ...credentials, age: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="residence">Player's Residence (Optional)</Label>
                <Input
                  id="residence"
                  type="residence"
                  value={credentials.residence}
                  onChange={(e) => setCredentials({ ...credentials, residence: e.target.value })}
                />
              </div>

              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                Add Player{" "}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
