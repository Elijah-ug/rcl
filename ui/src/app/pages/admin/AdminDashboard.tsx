import React from "react";
import { SideNavBar } from "./SideNavBar";
import { Outlet } from "react-router-dom";

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
        <SideNavBar />
        <div className=" w-full sm:py-7 pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
