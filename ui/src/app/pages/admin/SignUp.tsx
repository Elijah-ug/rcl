import React, { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

export const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<object | any>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleAddAdmin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (credentials?.password !== credentials.password_confirmation) {
        return toast.error("Password doesn't match");
      }
      console.log("Credentials==>", credentials);
    } catch (error) {
      console.log("Error=>", error);
      return toast.error("Admin Signup failed");
    }
  };
  return (
    <div className="flex justify-center py-12 px-6">
      <Card className="w-full max-w-sm sm:max-w-lg">
        <CardHeader>
          <CardTitle>Add Admin Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddAdmin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter admin name"
                  required
                  value={credentials.name}
                  onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  value={credentials.password_confirmation}
                  onChange={(e) => setCredentials({ ...credentials, password_confirmation: e.target.value })}
                />
              </div>

              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
