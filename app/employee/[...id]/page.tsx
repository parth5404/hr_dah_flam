"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useStore } from "@/app/store";
const Page = () => {
  const  {id} = useParams();
  const bears = useStore((state) => state.bears);
  const bear=bears.filter((i)=>i.login.uuid===id[0]);
  
  return (
    <div>
     
    </div>
  );
};

export default Page;
