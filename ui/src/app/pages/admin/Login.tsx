import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { useLoginAdminMutation } from "@/app/state/features/auth/adminAuthQuery";
import { LoadingSpinner } from "./LoadingSpinner";

export const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<object | any>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginAdminMutation();
  const handleAdminLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      }
      const res = await login(credentials);
      const headers = res?.data?.token_type + " " + res?.data?.token;
      console.log("res=>", res);
      localStorage.setItem("token", headers);
      return navigate("/admin-dashboard", { replace: true });
    } catch (error) {
      console.log("login error=>", error);
      return toast.error("Login failed!");
    }
  };
  return (
    <div className="flex justify-center py-12">
      <Card className="w-full max-w-xs sm:max-w-lg">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardAction>
            <Link to="/signup" className="underline-offset-4 hover:underline">
              Sign up
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdminLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                  className="border-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="border-gray-400"
                />
              </div>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
                {isLoading ? <LoadingSpinner /> : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
