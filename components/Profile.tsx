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
      <div className="fixed top-4 left-4 z-50">
        <ModeToggle />
      </div>
      <div className="min-h-screen bg-background text-foreground">
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-primary/10 to-background"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={user.picture.large}
              alt={user.name.first}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-background shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="pt-16 sm:pt-20 pb-6 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground">
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
          <div className="space-y-2 sm:space-y-3 text-muted-foreground">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-medium break-all">{user.email}</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-center">
                {user.location.city}, {user.location.state},{" "}
                {user.location.country}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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
          <TabsList className="grid w-full grid-cols-3 bg-muted border">
            <TabsTrigger
              value="overview"
              className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground text-sm sm:text-base"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground text-sm sm:text-base"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="feedback"
              className="text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground text-sm sm:text-base"
            >
              Feedback
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="mt-6 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 xl:grid-cols-5 lg:gap-6">
              <div className="xl:col-span-3">
                <div className="p-4 sm:p-6 bg-card rounded-lg border h-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
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
                  <div className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {user.bio}
                  </div>
                </div>
              </div>
              <div className="xl:col-span-2 space-y-6">
                <div className="p-4 sm:p-6 bg-card rounded-lg border">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
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
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                        <span className="font-semibold text-muted-foreground text-sm sm:text-base">
                          Rating:
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${
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
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                        <span className="font-semibold text-muted-foreground text-sm sm:text-base">
                          Department:
                        </span>
                        <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary text-primary-foreground self-start sm:self-auto">
                          {user.dept}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-card rounded-lg border">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3 text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
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
                  <Suspense
                    fallback={
                      <div className="text-muted-foreground text-sm">
                        Loading performance...
                      </div>
                    }
                  >
                    <Perform arr={performance} />
                  </Suspense>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <Suspense
              fallback={
                <div className="text-muted-foreground text-center py-8">
                  Loading projects...
                </div>
              }
            >
              <Project user={user} />
            </Suspense>
          </TabsContent>
          <TabsContent value="feedback">
            <Suspense
              fallback={
                <div className="text-muted-foreground text-center py-8">
                  Loading feedback...
                </div>
              }
            >
              <Feedback user={user} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
