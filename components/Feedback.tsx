"use client";

import React, { useMemo, useState } from "react";
import { getRandomFeedback } from "@/utils/getrandom";
import { User } from "@/app/interface";

interface FeedbackItem {
  from: string;
  role: string;
  date: string;
  rating: number | string;
  comment: string;
}

const Feedback = ({ user }: { user: User }) => {
  const [arr, setArr] = useState<FeedbackItem[]>(() =>
    getRandomFeedback(user.dept || "")
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const from = formData.get("from") as string;
    const comment = formData.get("comment") as string;

    if (!from || !comment) {
      alert("Please fill out your name and comment.");
      return;
    }

    setArr((prevArr) => [
      
      {
        from: from,
        role: (formData.get("role") as string) || "N/A",
        rating: (formData.get("rating") as string) || "N/A",
        comment: comment,
        date: new Date().toLocaleDateString(),
      },...prevArr,
    ]);

    form.reset();
  }

  return (
    <div className="space-y-6 mt-6">
      <div className="bg-muted/50 rounded-lg border p-6">
        <h3 className="text-xl font-semibold mb-4 text-foreground">
          Add Your Feedback
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="from"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Your Name
              </label>
              <input
                id="from"
                name="from"
                type="text"
                className="w-full px-3 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-muted-foreground mb-1"
              >
                Your Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                className="w-full px-3 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Manager, Colleague"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-muted-foreground mb-1"
            >
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              className="w-full px-3 py-2 bg-background border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select a rating</option>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Average</option>
              <option value="1">1 - Below Average</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-muted-foreground mb-1"
            >
              Feedback Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full px-3 py-2 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Write your feedback here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {arr.map((feedback, index) => (
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
                  <p className="text-sm text-muted-foreground">
                    {feedback.role}
                  </p>
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
    </div>
  );
};

export default Feedback;
