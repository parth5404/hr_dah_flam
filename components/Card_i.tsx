"use client";
import { User } from "@/app/interface";
import React, { useRef, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Toggle } from "@/components/ui/toggle";
import { useBookMark } from "@/hooks/useBookMark";
import { useRouter } from "next/navigation";
const Card_i = ({ i, idx }: { i: User; idx: number }) => {
  const router = useRouter();
  const [isbookmark, setIsbookmark] = useState<boolean>(i.bookmark || false);
  function handleBookmark() {
    setIsbookmark((prev) => !prev);
  }
  useBookMark(i, isbookmark);

  return (
    <div>
      <Card key={idx} onClick={() => router.push(`/employee/${i.login.uuid}`)}>
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            {i.name.title} {i.name.first} {i.name.last}
            <Toggle onClick={() => handleBookmark()}>
              {isbookmark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              )}
            </Toggle>
          </CardTitle>
          <CardDescription className="">
            <span className="truncate">{i.email}</span>
            <div>
              <span className="text-sm text-gray-500">Age:{i.dob.age}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-sm text-gray-500">Rating:{i.rating}</span>
              <span className="text-sm text-gray-500">Department:{i.dept}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={i.picture.large}
            alt={i.name.first}
            className="mx-auto rounded-full"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Card_i;
