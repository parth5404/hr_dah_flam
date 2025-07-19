"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store";
import Card_i from "@/components/Card_i";
import { redirect } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";

import { User } from "../interface";
const Page = () => {
  return (
    <SessionProvider>
      <Page2 />
    </SessionProvider>
  );
};
function Page2() {
  const { data: session, status } = useSession();
  const bookmarkBears = useStore((state) => state.bookmarkBears);
  
  // useEffect(()=>{

  // },[bookmarkBears.length]);
  
  if (status === "unauthenticated") {
    return redirect("/api/auth/signin");
  }
  return (

    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            Bookmarked Employees
          </h1>
          <button 
            className={`px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 transform flex items-center gap-2 ${
              bookmarkBears.length === 0 
                ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                : "bg-red-500 hover:bg-red-600 text-white hover:scale-105"
            }`}
            onClick={() => {
              if (bookmarkBears.length > 0) {
                useStore.getState().deleteAll();
              }
            }}
            disabled={bookmarkBears.length === 0}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete All
          </button>
        </div>
        
        {bookmarkBears.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {bookmarkBears.map((i, idx) => (
              <div key={i.login.uuid} className="transform transition-all duration-200 hover:scale-105">
                <Card_i i={i} idx={idx} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No Bookmarked Employees
            </h3>
            <p className="text-gray-500">
              Start bookmarking employees to see them here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Page;
