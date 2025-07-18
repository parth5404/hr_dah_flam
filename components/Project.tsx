"use client";

import React, { useMemo } from "react";
import { getRandomProjects } from "@/utils/getrandom";
import { User } from "@/app/interface";
const Project = ({ user }: { user: User }) => {
  const projects = useMemo(
    () => getRandomProjects(user.dept || ""),
    [user.dept]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project) => (
        <div
          key={project.name}
          className="bg-muted/50 rounded-lg border p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-foreground">
                {project.name}
              </h3>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : project.status === "In Progress"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
