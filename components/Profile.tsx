"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { User } from "@/app/interface";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPerformance } from "@/utils/getrandom";
// Lazy import
const Perform = React.lazy(() => import("./Perform"));
const Project = React.lazy(() => import("./Project"));
const Feedback = React.lazy(() => import("./Feedback"));
import { ModeToggle } from "./mode-toggle";
interface PerformanceItem {
  testName: string;
  date: string;
  score: number;
}
const Profile = ({ user }: { user: User }) => {
  const performance = useMemo(
    () => getPerformance(user?.dept || ""),
    [user?.dept]
  );

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <ModeToggle />
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="w-32 h-32 rounded-full border-4 border-background shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="pt-20 pb-6 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium">{user.email}</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                {user.location.city}, {user.location.state},{" "}
                {user.location.country}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+{user.phone}</span>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="overview"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <TabsList className="grid w-full grid-cols-3 bg-muted/80 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="mt-6 grid gap-6 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="p-6 bg-muted/50 rounded-lg border h-full">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Bio
                  </h3>
                  <div className="text-muted-foreground leading-relaxed prose prose-invert max-w-none">
                    {user.bio}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <div className="p-6 bg-muted/50 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
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
                    Details
                  </h3>
                  <div className="space-y-4">
                    {user.rating && (
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-muted-foreground">
                          Rating:
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              className={`w-5 h-5 ${
                                user.rating && idx < user.rating
                                  ? "text-yellow-400"
                                  : "text-muted-foreground/50"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    )}
                    {user.dept && (
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-muted-foreground">
                          Department:
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                          {user.dept}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Performance
                  </h3>
                  <Suspense fallback={<div>Loading performance...</div>}>
                    <Perform arr={performance} />
                  </Suspense>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <Suspense fallback={<div>Loading projects...</div>}>
              <Project user={user} />
            </Suspense>
          </TabsContent>
          <TabsContent value="feedback">
            <Suspense fallback={<div>Loading feedback...</div>}>
              <Feedback user={user} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
