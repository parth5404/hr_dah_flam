"use client"

import { useStore } from "@/app/store";
import { User } from "@/app/interface";
import { useEffect } from "react";
export const useBookMark = (user: User, value: boolean) => {
  const updateBookmark = useStore((state) => state.updateBookmark);
  useEffect(() => {
    updateBookmark(user);
  }, [value]);
};
