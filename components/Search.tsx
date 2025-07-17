"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useSearch } from "@/hooks/useSearch";
import { useStore } from "@/app/store";

const Search = () => {
  const bears = useStore((state) => state.bears);
  const [query, setQuery] = useState("");
  const { results } = useSearch(bears, query);
  const filtering = useStore((state) => state.filtering);
  function handleSearch() {
    filtering(results);
  }
  
  return (
    <div className="flex flex-row gap-2 justify-center items-center p-4">
      <ModeToggle />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-1/2"
      />
      <Button onClick={() => handleSearch()}>Search</Button>
    </div>
  );
};

export default Search;
