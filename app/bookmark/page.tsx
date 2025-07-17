"use client"

import React from "react";
import { useStore } from "@/app/store";
import Card_i from "@/components/Card_i";

const page = () => {
  const bookmarkBears = useStore.getState().bookmarkBears;
  const bears=useStore.getState().bears;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {bears.length > 0 &&
        bears
          .filter((i) => i.bookmark)
          .map((i, idx) => (
            <Card_i key={i.login.uuid} i={i} idx={idx} />
          ))}
    </div>
  );
};

export default page;
