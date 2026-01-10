import React from "react";
import { Login } from "./Login";
import { AdminDashboard } from "./AdminDashboard";

export const Authenticated: React.FC = () => {
  return (
    <div className="py-12">
      {/* <Login/> */}
      <AdminDashboard />
    </div>
  );
};
