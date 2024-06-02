"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { Keyboard } from "lucide-react";

export const DataCharts = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid">
      <h1>Data Charts</h1>
      <p>this is the data chart comp</p>
    </div>
  );
};
