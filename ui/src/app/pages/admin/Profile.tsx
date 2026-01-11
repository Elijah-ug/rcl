"use client";

import { useGetAdminQuery } from "@/app/state/features/auth/adminAuthQuery";
import type { Admin } from "@/types/types";
import React from "react";

interface ProfileProps {
  admin: Admin;
}

const formatDate = (date: string | any) => {
  return new Date(date).toLocaleDateString("en-UG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const Profile: React.FC<ProfileProps> = () => {
  const { data, isLoading } = useGetAdminQuery();
  console.log("Admin profile==>", typeof data?.data.created_at);

  return (
    <div className="max-w-xl mx-auto mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
          {data?.data.name.charAt(0)}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">{data?.data.name}</h2>
          <p className="text-sm text-gray-500">{data?.data.email}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Admin ID</span>
          <span className="font-medium">{data?.data.id}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Account Created</span>
          <span className="font-medium">{formatDate(data?.data.created_at)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last Updated</span>
          <span className="font-medium">{formatDate(data?.data.updated_at)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Status</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              data?.data.deleted_at ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {data?.data.deleted_at ? "Inactive" : "Active"}
          </span>
        </div>
      </div>
    </div>
  );
};
