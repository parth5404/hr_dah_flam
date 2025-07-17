import { create } from "zustand";
import { User } from "./interface";
import { getRandomRating, getRandomDepartment } from "@/utils/getrandom";
export const useStore = create<{
  bears: User[];
  filteredBears: User[];
  updateBears: (newBear: User) => void;
  updateBears_v0: (newBear: User[]) => void;
  insertRating:()=>void;
  filtering:(newBear:User[])=>void;
}>((set) => ({
  bears: [],
  filteredBears: [],
  updateBears: (newBear:User) =>
    set((state) => ({ bears: [...state.bears, newBear] })),
  updateBears_v0: (newBear: User[]) => set(() => ({ bears: [...newBear] })),
  insertRating:()=>set((state)=>({bears:state.bears.map((i)=>({...i,rating:getRandomRating(),dept:getRandomDepartment()}))})),
  filtering:(newBear:User[])=>set(()=>({filteredBears:[...newBear]}))
}));
