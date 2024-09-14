import { TECH_STACK } from "../lib/constant";
import Card from "./Card";

export default function TechstackCard() {
  const techStack = TECH_STACK;

  return (
    <Card className="col-span-1 row-span-4 animate-slidein500">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl text-[#899878]">
          Tech Stack
          <hr />
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <tech.icon size="2rem" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
