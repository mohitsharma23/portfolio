"use client";

import Card from "./components/Card";
import ExperienceCard from "./components/ExperienceCard";
import IntroCard from "./components/IntroCard";
import TechstackCard from "./components/TechstackCard";
import ConnectCard from "./components/ConnectCard";

export default function Home() {
  const handleDownload = () => {};

  return (
    <main className="grid grid-cols-4 gap-4 grid-rows-8 max-w-6xl m-auto max-h-[800px] p-4 h-screen">
      <IntroCard />
      <ExperienceCard />
      <TechstackCard />
      <Card className="col-span-2 row-span-2">GAME HERE</Card>
      <ConnectCard />
      <Card className="col-span-1 row-span-1">
        <div
          className="flex items-center justify-center h-full border-2 hover:bg-[#F7F7F2] hover:text-[#222725] cursor-pointer"
          onClick={handleDownload}
        >
          Download resume
        </div>
      </Card>
      <Card className="col-span-1 row-span-1">
        <div className="flex items-center text-xs">
          <p>
            &#169; 2024 | Crafted with &#9829; using{" "}
            <a
              href="https://nextjs.org"
              className="text-[#899878]"
              target="_blank"
            >
              NextJS
            </a>
          </p>
        </div>
      </Card>
    </main>
  );
}
