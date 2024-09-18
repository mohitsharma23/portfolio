import { LINKS } from "../lib/constant";
import Card from "./Card";

export default function IntroCard() {
  const linksInfo = LINKS;

  return (
    <Card className="lg:col-span-3 lg:row-span-4 col-span-1 animate-slidein300">
      <div className="flex flex-col justify-between items-center gap-10 h-full lg:flex-row">
        <div className="flex h-full items-center">
          <div className="h-48 w-48 bg-slate-100 rounded-full border-2 bg-[url('/self.jpg')] bg-contain"></div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-sm opacity-50">welcome</div>
            <div className="font-thin">
              Hi, I&apos;m <span className="font-normal">Mohit</span>, a
              front-end developer with expertise in crafting responsive,
              user-friendly web interfaces with{" "}
              <span className="font-normal">over 5 years of experience</span>. I
              specialize in modern JavaScript frameworks like React and Angular,
              delivering fast, dynamic, and accessible web applications. With a
              focus on clean, maintainable code, I bring creativity and
              precision to every project.
              <br />
              <br />
              <span className="font-normal">
                Let&apos;s build something amazing together!
              </span>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            {linksInfo.map((link, index) => (
              <a href={link.link} key={index} target="_blank">
                <div className="border-2 cursor-pointer p-2 hover:bg-[#F7F7F2] group">
                  <link.icon
                    size="1.5rem"
                    className="group-hover:text-[#222725]"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
