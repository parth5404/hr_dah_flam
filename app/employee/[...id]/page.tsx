"use client";

import { useParams, redirect } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";
import React from "react";
import { useStore } from "@/app/store";
import Profile from "@/components/Profile";

const Page = () => {
  return (
    <div>
      <SessionProvider>
        <Page2 />
      </SessionProvider>
    </div>
  );
};
function Page2() {
  const { data: session, status } = useSession();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const bears = useStore((state) => state.bears);
  const bear = bears.filter((i) => i.login.uuid === id);
  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      {bear.length > 0 ? (
        bear.map((i, idx) => (
          <div key={idx}>
            <Profile user={i} />
          </div>
        ))
      ) : (
        <div>User not found.</div>
      )}
    </div>
  );
}
export default Page;
