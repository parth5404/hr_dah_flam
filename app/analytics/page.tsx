import React from "react";
import { ChartRadarGridNone } from "@/components/Charts";
import { ModeToggle } from "../../components/mode-toggle";

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            An overview of department performance and key metrics.
          </p>
        </div>
        <ModeToggle />
      </header>
      <div className="grid gap-8">
        <section>
          <ChartRadarGridNone />
        </section>
      </div>
    </div>
  );
};

export default Page;
