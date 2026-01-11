import { Spinner } from "@/components/ui/spinner";
import React from "react";

export const GlobalSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className="size-8" />
    </div>
  );
};
