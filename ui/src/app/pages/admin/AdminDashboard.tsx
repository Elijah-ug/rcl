import { useGetAllAdminsQuery } from "@/app/state/features/auth/adminAuthQuery";
import React from "react";

export const AdminDashboard: React.FC = () => {
  const { data, isLoading } = useGetAllAdminsQuery();
  console.log("data=>", isLoading ? isLoading : data?.data);
  return (
    <div>
      <div className="">Admin Dashboard</div>
    </div>
  );
};
