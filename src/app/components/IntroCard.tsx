import { LINKS } from "../lib/constant";
import Card from "./Card";

export default function IntroCard() {
  const linksInfo = LINKS;

  return (
    <Card className="col-span-3 row-span-4">
      <div className="flex justify-between items-center gap-10 h-full">
        <div className="flex h-full items-center">
          <div className="h-48 w-48 bg-slate-100 rounded-full"></div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-sm opacity-50">welcome</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisici elit ist ein
              Blindtext, der nichts bedeuten soll, sondern als Platzhalter im
              Layout verwendet wird, um einen Eindruck vom fertigen Schriftstück
              zu erhalten
            </div>
          </div>
          <div className="flex justify-end gap-4">
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
