"use client";

import Fuse from "fuse.js";
import React, { useState } from "react";
import { User } from "@/app/interface";
import { useEffect } from "react";

export const useSearch = (data: User[],query:string) => {
  const [results, setResults] = useState<User[]>([]);

  useEffect(()=>{

    const fuse = new Fuse(data,{
    includeScore: true,
    threshold: 0.3,
    keys: ["name.first", "name.last", "email", "dept", "rating"],
  });

    const res = fuse.search(query);
    setResults(res.map((result) => result.item));

},[data,query])

  return { results };
};