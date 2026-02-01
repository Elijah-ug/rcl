import React from "react";
import { Login } from "./Login";
import { AdminDashboard } from "./AdminDashboard";
import { useGetAdminQuery } from "@/app/state/features/auth/adminAuthQuery";
import { GlobalSpinner } from "../global/GlobalSpinner";

export const Authenticated: React.FC = () => {
  const { data, isLoading } = useGetAdminQuery();
// console.log("Logged in admin==>", data)
  return (
    <div className="">
      <div className="">{isLoading ? <GlobalSpinner /> : data ? <AdminDashboard /> : <Login />}</div>
    </div>
  );
};
