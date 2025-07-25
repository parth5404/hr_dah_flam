"use client";
import React from "react";
import { useStore } from "@/app/store";

interface PerformanceItem {
  testName: string;
  date: string;
  score: number;
}

const Perform = ({ arr }: { arr: PerformanceItem[] }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto py-2">
      {arr.map((i, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-64 bg-muted/70 rounded-lg p-4 border"
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="font-semibold text-foreground">{i.testName}</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-9">{i.date}</p>
            </div>
            <div className="flex items-center gap-2 mt-4 self-end">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-lg font-bold text-foreground">
                {i.score}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perform;
