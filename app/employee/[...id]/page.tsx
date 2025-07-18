"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useStore } from "@/app/store";
import Profile from "@/components/Profile";
import { redirect } from "next/navigation";
const Page = () => {
  const { id } = useParams();
  const bears = useStore((state) => state.bears);
 
  const bear = bears.filter((i) => i.login.uuid === id?.[0]);
  if(!localStorage.getItem("next-auth.session-token")){
    return redirect('/api/auth/signin');
  }
  return (
    <div>
      {bear.map((i, idx) => (
        <div key={idx}>
         <Profile user={i}/>
        </div>
      ))}
    </div>
  );
};

export default Page;
