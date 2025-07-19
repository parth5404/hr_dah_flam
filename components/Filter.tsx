"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ui/dropdown-menu";
import { Filter as FilterIcon, FunnelX } from "lucide-react";
import { useStore } from "@/app/store";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const departments = ["HR", "Sales", "IT", "Marketing", "Finance"];
const ratings = [1, 2, 3, 4, 5];

export function Filter() {
  const [dept, setDept] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const homefiltering = useStore((state) => state.homefiltering);

  useEffect(() => {
    homefiltering(dept, parseInt(rating));
  }, [dept, rating, homefiltering]);

  return (
    <div className="flex items-center gap-2">
      {(dept || rating) && (
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 rounded-full hover:bg-destructive/10"
                onClick={() => {
                  setDept("");
                  setRating("");
                }}
              >
                <FunnelX className="h-4 w-4" />
                <span className="sr-only">Clear Filters</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="font-medium">Clear Filters</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className={`h-9 w-9 ${(dept || rating) ? 'border-primary text-primary' : ''}`}
          >
            <FilterIcon className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter by Department</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={dept} onValueChange={setDept}>
            {departments.map((deptOption) => (
              <DropdownMenuRadioItem key={deptOption} value={deptOption}>
                {deptOption}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Filter by Rating</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={rating} onValueChange={setRating}>
            {ratings.map((ratingOption) => (
              <DropdownMenuRadioItem
                key={ratingOption}
                value={String(ratingOption)}
              >
                {ratingOption} Star{ratingOption > 1 && "s"}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export default Filter;
