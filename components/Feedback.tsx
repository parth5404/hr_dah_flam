"use client";

import React, { useMemo } from "react";
import { getRandomFeedback } from "@/utils/getrandom";
import { User } from "@/app/interface";

const Feedback = ({ user }: { user: User }) => {
  const feedbacks = useMemo(
    () => getRandomFeedback(user.dept || ""),
    [user.dept]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {feedbacks.map((feedback, index) => (
        <div
          key={index}
          className="bg-muted/50 rounded-lg border p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {feedback.from}
                </h3>
                <p className="text-sm text-muted-foreground">{feedback.role}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 font-bold">
                  {feedback.rating}
                </span>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-muted-foreground text-sm italic">{`"${feedback.comment}"`}</p>
          </div>
          <p className="text-xs text-muted-foreground/80 mt-4 text-right">
            {feedback.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
