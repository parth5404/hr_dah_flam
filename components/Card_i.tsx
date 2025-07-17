import { User } from "@/app/interface";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
const Card_i = ({ i, idx }: { i: User; idx: number }) => {
  return (
    <div>
      <Card key={idx}>
        <CardHeader>
          <CardTitle>
            {i.name.title} {i.name.first} {i.name.last}
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
