import React from "react";
import { LandingPage } from "./LandingPage";
import { About } from "./About";
import { UpcomingMatches } from "./UpcomingMatches";
import { NewsSection } from "./NewsSection";
import { LeagueTablePreview } from "./LeagueTablePreview";
import { LatestResults } from "./LatestResults";
import { Sponsors } from "./Sponsors";

export const Home: React.FC = () => {
  return (
    <div className="">
      <LandingPage />
      <div className="grid gap-7 px-6 sm:px-10 lg:px-13 bg-gray-100">
        <About />
         <NewsSection />
        <UpcomingMatches />
        <LeagueTablePreview />
        <Sponsors />
       
        <LatestResults />
      </div>
    </div>
  );
};
