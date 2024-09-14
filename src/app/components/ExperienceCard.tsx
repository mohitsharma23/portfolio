import { EXPERIENCE } from "../lib/constant";
import Card from "./Card";

export default function ExperienceCard() {
  const experienceInfo = EXPERIENCE;
  return (
    <Card className="lg:col-span-1 lg:row-span-6 col-span-1 row-span-6 animate-slidein300">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl text-[#899878]">
          Experience
          <hr />
        </div>

        <div className="ml-5">
          <ol className="list-none">
            {experienceInfo.map((exp, index) => (
              <li
                key={index}
                className={`after:h-3 after:w-3 after:bg-white after:block after:rounded-full relative after:absolute after:top-2 after:-left-6 ${
                  index !== experienceInfo.length - 1 &&
                  `before:border-l-2 before:border-2 before:absolute before:h-full before:-left-5 before:top-4`
                }`}
              >
                <div className="flex flex-col pb-8">
                  <span className="text-md font-bold">{exp.position}</span>
                  <span className="text-sm opacity-60">
                    <a href={exp.link} target="_blank" className="underline">
                      {exp.company}
                    </a>{" "}
                    | {exp.location}
                  </span>
                  <span className="text-sm opacity-40">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Card>
  );
}
