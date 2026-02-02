import { useGetTableQuery, useResetTableMutation } from "@/app/state/features/table/tableQuery";
import { Trash2 } from "lucide-react";
import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export const Table: React.FC = () => {
  const { data, isLoading } = useGetTableQuery();
  const [reset, { isLoading: LoadDel }] = useResetTableMutation();
  console.log("Table==>", data);

  return (
    <div className="grid gap-2 sm:w-2xl mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data?.data.length && (
          <div className="flex items-center gap-3 bg-gray-300 p-2 rounded-md">
            {data?.data.map(
              (item) =>
                item.id > 0 && (
                  <div className="flex items-center gap-3 p-2 " key={item.id}>
                    <p>Table ID</p>
                    <p>{item.id}</p>
                  </div>
                ),
            )}
            <div className="flex items-center gap-7 text-blue-400">
              {LoadDel ? (
                <LoadingSpinner />
              ) : (
                <Trash2 className="text-red-500 cursor-pointer" onClick={() => reset()} />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};
