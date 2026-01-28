import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState, type FormEvent } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";
import { useAddNewsPostMutation, useGetAllNewsPostsQuery } from "@/app/state/features/news/newsQuery";

export const AddNewsPost: React.FC = () => {
  const [addNews, { isLoading }] = useAddNewsPostMutation();
  const { data: news, isLoading: newsLoading } = useGetAllNewsPostsQuery();
  console.log("News fetched==>", news);
  const [credentials, setCredentials] = useState<object | any>({
    title: "",
    description: "",
  });

  const handlAddNews = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Values ==>", credentials);
      const res = await addNews({
        ...credentials,
        host_team_id: Number(credentials.host_team_id),
        title: Number(credentials.title),
      });

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
          <form onSubmit={handlAddNews}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  value={credentials.title}
                  onChange={(e) => setCredentials({ ...credentials, title: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">description</Label>
                <Input
                  id="description"
                  type="text"
                  value={credentials.description}
                  onChange={(e) => setCredentials({ ...credentials, description: e.target.value })}
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
