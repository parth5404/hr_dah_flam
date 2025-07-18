"use client"

import { useStore } from "@/app/store";

export const useAvg = (dept: string) => {
  const users = useStore((state) => state.bears);
  const deptUsers = users.filter((user) => user.dept === dept);
  const avgRating = deptUsers.reduce((acc, user) => acc + (user?.rating||0), 0) / deptUsers.length;
  return avgRating;
};
