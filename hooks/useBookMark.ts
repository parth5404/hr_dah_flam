"use client"
import { useStore } from "@/app/store";
import { User } from "@/app/interface";
import { useEffect, useRef } from "react";

export const useBookMark = (user: User, isBookmark: boolean) => {
  const updateBookmark = useStore((state) => state.updateBookmark);
  const prevRef = useRef<boolean | null>(null);
  useEffect(() => {
    if (prevRef.current === null) {
      prevRef.current = isBookmark;
      return;
    }
    if (prevRef.current !== isBookmark) {
      updateBookmark(user, isBookmark);
      prevRef.current = isBookmark;
    }
  }, [isBookmark, updateBookmark, user]);
};