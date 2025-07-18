"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useStore } from "@/app/store";
import Profile from "@/components/Profile";
const Page = () => {
  const { id } = useParams();
  const bears = useStore((state) => state.bears);
  const bear = bears.filter((i) => i.login.uuid === id?.[0]);

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
