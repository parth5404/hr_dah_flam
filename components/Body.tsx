"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/app/store";
import { User } from "@/app/interface";
import Card_i from "./Card_i";

const Body = () => {
  const updateBears = useStore((state) => state.updateBears_v0);
  const insertRating = useStore((state) => state.insertRating);
  const bears = useStore((state) => state.bears); // ✅ read state
  const filteredBears = useStore((state) => state.filteredBears);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=100", {
          cache: "no-store",
          next: { revalidate: 10 },
        });
        const data1 = await res.json();
        updateBears([...bears, ...data1.results]);
        insertRating();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {filteredBears.length > 0
        ? filteredBears.map((i, idx) => <Card_i key={idx} i={i} idx={idx} />)
        : bears.map((i, idx) => <Card_i key={idx} i={i} idx={idx} />)}
    </div>
  );
};

export default Body;
