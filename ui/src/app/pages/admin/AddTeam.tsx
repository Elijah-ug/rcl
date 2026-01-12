import { useRegisterTeamMutation } from "@/app/state/features/auth/teamQuery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, type FormEvent } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";

export const AddTeam: React.FC = () => {
  const [addTeam, { isLoading }] = useRegisterTeamMutation();

  const [credentials, setCredentials] = useState<object | any>({
    name: "",
    coach: "",
    captain: "",
  });

  const handleAddTeam = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await addTeam(credentials);
      console.log("Response==>", res);
      toast.success("Team added");
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
          <form onSubmit={handleAddTeam}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Team Name</Label>
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
                <Label htmlFor="coach">Coach (Optional)</Label>
                <Input
                  id="coach"
                  type="coach"
                  placeholder="Team Coach"
                  value={credentials.coach}
                  onChange={(e) => setCredentials({ ...credentials, coach: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="captain">Captain (Optional)</Label>
                <Input
                  id="captain"
                  type="captain"
                  value={credentials.captain}
                  onChange={(e) => setCredentials({ ...credentials, captain: e.target.value })}
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
