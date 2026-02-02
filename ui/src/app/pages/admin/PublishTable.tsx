import React, { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { usePublishTableMutation } from "@/app/state/features/table/tableQuery";
import { useNavigate } from "react-router-dom";
import { useGetAllTeamsQuery } from "@/app/state/features/teams/teamQuery";
import { LoadingSpinner } from "./LoadingSpinner";

export const PublishTable: React.FC = () => {
  const [table, setTable] = useState<object | any>({
    club: "",
    mp: "",
    w: "",
    d: "",
    l: "",
    gf: "",
    ga: "",
    gd: "",
    pts: "",
    last_5: "",
  });
  const navigate = useNavigate();

  const [publish, { isLoading }] = usePublishTableMutation();
  const { data: clubs, isLoading: loadClubs } = useGetAllTeamsQuery();
  const handlePublishTable = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Elements passed==>", table);
    try {
      const res = await publish(table);
      console.log("Res==>", res);
      if (res.data) {
        toast.success(res.data.message);
        return navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log("Error==>", error);
      return toast.error("Failed to publish table");
    }
  };
  return (
    <div className="flex justify-center py-12">
      <Card className="w-full max-w-xs sm:max-w-lg">
        <CardHeader>
          <CardTitle>Add Admin Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePublishTable}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="club">Club Name</Label>
                <select
                  name="teams"
                  id="teams"
                  typeof="text"
                  value={table.club}
                  onChange={(e) => setTable({ ...table, club: e.target.value })}
                  className="p-1 border-2 rounded"
                >
                  <option value="____" className="text-xs"></option>
                  {clubs &&
                    !loadClubs &&
                    clubs.teams.map((team) => (
                      <option key={team.id} value={team.name}>
                        {team.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mp">Matches Played</Label>
                <Input
                  id="mp"
                  type="number"
                  min={0}
                  required
                  value={table.mp}
                  onChange={(e) => setTable({ ...table, mp: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="w">Win</Label>
                <Input
                  id="w"
                  type="number"
                  min={0}
                  required
                  value={table.w}
                  onChange={(e) => setTable({ ...table, w: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="d">Draws</Label>
                <Input
                  id="d"
                  type="number"
                  min={0}
                  required
                  value={table.d}
                  onChange={(e) => setTable({ ...table, d: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="l">Losses</Label>
                <Input
                  id="l"
                  type="number"
                  min={0}
                  required
                  value={table.l}
                  onChange={(e) => setTable({ ...table, l: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="gf">Total Goals</Label>
                <Input
                  id="gf"
                  type="number"
                  min={0}
                  required
                  value={table.gf}
                  onChange={(e) => setTable({ ...table, gf: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ga">Goals Against</Label>
                <Input
                  id="ga"
                  type="ga"
                  min={0}
                  required
                  value={table.ga}
                  onChange={(e) => setTable({ ...table, ga: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="gd">Goal Difference</Label>
                <Input
                  id="gd"
                  type="number"
                  required
                  value={table.gd}
                  onChange={(e) => setTable({ ...table, gd: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="pts">Points</Label>
                <Input
                  id="pts"
                  type="number"
                  min={0}
                  required
                  value={table.pts}
                  onChange={(e) => setTable({ ...table, pts: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="last_5">Last 5</Label>
                <Input
                  id="last_5"
                  type="text"
                  value={table.last_5}
                  onChange={(e) => setTable({ ...table, last_5: e.target.value })}
                />
              </div>

              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                {isLoading ? <LoadingSpinner /> : "Sign Up"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
