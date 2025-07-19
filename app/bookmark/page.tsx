"use client";

import React from "react";
import { useStore } from "@/app/store";
import Card_i from "@/components/Card_i";
import { redirect } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";
const Page = () => {
  return (
    <SessionProvider>
      <Page2 />
    </SessionProvider>
  );
};
function Page2() {
  const { data: session, status } = useSession();
  const bookmarkBears =  useStore.getState().bookmarkBears;
  const bears = useStore.getState().bears;
  const filteredBears = bears.filter((i) => i.bookmark===true);
  console.log(bears,bookmarkBears,filteredBears.length);
  if (status === "unauthenticated") {
    return redirect("/api/auth/signin");
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {bookmarkBears.length > 0 &&
        bookmarkBears.map((i, idx) => <Card_i key={i.login.uuid} i={i} idx={idx} />)}
    </div>
  );
}
export default Page;
