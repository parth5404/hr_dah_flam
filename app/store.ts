import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "./interface";
import { getRandomRating, getRandomDepartment,getRandomBio } from "@/utils/getrandom";

export const useStore = create(
  persist<{
    bears: User[];
    filteredBears: User[];
    bookmarkBears: User[];
    updateBears: (newBear: User) => void;
    updateBears_v0: (newBear: User[]) => void;
    insertRating: () => void;
    filtering: (newBear: User[]) => void;
    updateBookmark: (newBear: User) => void;
    bookmarking: () => void;
  }>(
    (set) => ({
      bears: [],
      filteredBears: [],
      bookmarkBears: [],
      updateBears: (newBear) =>
        set((state) => ({ bears: [...state.bears, newBear] })),
      updateBears_v0: (newBear) => set(() => ({ bears: [...newBear] })),
      insertRating: () =>
        set((state) => ({
          bears: state.bears.map((i) => ({
            ...i,
            rating: getRandomRating(),
            dept: getRandomDepartment(),
            bio: getRandomBio(),
            bookmark: false,
          })),
        })),
      filtering: (newBear) => set(() => ({ filteredBears: [...newBear] })),
      updateBookmark: (newBear) =>
        set((state) => ({
          bears: state.bears.map((i) =>
            i.login.uuid === newBear.login.uuid
              ? { ...i, bookmark: !i.bookmark }
              : i
          ),
        })),
      bookmarking: () =>
        set((state) => ({
          bookmarkBears: state.bears.filter((i) => i.bookmark),
        })),
    }),
    {
      name: "zustand-user-store", // key in localStorage
    }
  )
);