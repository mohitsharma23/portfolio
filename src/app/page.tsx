"use client";

import Card from "./components/Card";
import ExperienceCard from "./components/ExperienceCard";
import IntroCard from "./components/IntroCard";
import TechstackCard from "./components/TechstackCard";
import ConnectCard from "./components/ConnectCard";
import GameCard from "./components/GameCard";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-4 gap-4 lg:grid-rows-8 grid-cols-1 grid-flow-row max-w-6xl m-auto max-h-[800px] p-4 h-screen">
      <IntroCard />
      <ExperienceCard />
      <TechstackCard />
      <GameCard />
      <ConnectCard />
      <Card className="col-span-1 row-span-1 animate-slidein700">
        <a href="/files/Resume.pdf" target="_blank">
          <div className="flex items-center justify-center h-full border-2 hover:bg-[#F7F7F2] hover:text-[#222725] cursor-pointer">
            View resume
          </div>
        </a>
      </Card>
      <Card className="col-span-1 row-span-1 animate-slidein900">
        <div className="flex items-center text-xs">
          <p>
            &#169; 2024 | Crafted with &#9829; using{" "}
            <a
              href="https://nextjs.org"
              className="text-[#899878]"
              target="_blank"
            >
              NextJS
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              className="text-[#899878]"
              target="_blank"
            >
              Tailwind
            </a>
          </p>
        </div>
      </Card>
    </main>
  );
}
