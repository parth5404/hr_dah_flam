"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useSearch } from "@/hooks/useSearch";
import { useStore } from "@/app/store";
import { useRouter } from "next/navigation";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { SearchIcon, Bookmark, BarChart, UserPlus } from "lucide-react";
import { Filter } from "./Filter";

const Search = () => {
  const router = useRouter();
  const bears = useStore((state) => state.bears);
  const filteredBears = useStore((state) => state.filteredBears);
  const filtering = useStore((state) => state.filtering);
  const [query, setQuery] = useState("");
  const { results } = useSearch(bears, query);
  

  useEffect(() => {
    filtering(results);
  }, [results, filtering]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filtering(results);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center space-x-4 px-4 sm:px-6 lg:px-8">
        <Filter />
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search by Name, Email, Department, Rating"
              className="pl-8 w-full rounded-md border-gray-300 focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </form>
        <TooltipProvider delayDuration={300}>
          <nav className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/bookmark")}
                  className="h-9 w-9 rounded-full hover:bg-primary/10"
                >
                  <Bookmark className="h-4 w-4" />
                  <span className="sr-only">Bookmark</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="font-medium">Bookmark</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/analytics")}
                  className="h-9 w-9 rounded-full hover:bg-primary/10"
                >
                  <BarChart className="h-4 w-4" />
                  <span className="sr-only">Analytics</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="font-medium">Analytics</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/create")}
                  className="h-9 w-9 rounded-full hover:bg-primary/10"
                >
                  <UserPlus className="h-4 w-4" />
                  <span className="sr-only">Create User</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="font-medium">Create User</TooltipContent>
            </Tooltip>
            <div className="ml-1">
              <ModeToggle />
            </div>
          </nav>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Search;
