import Card from "./Card";
import Particles from "./Particles";

export default function GameCard() {
  return (
    <Card className="lg:col-span-2 lg:row-span-2 col-span-1 lg:block hidden animate-slidein500">
      <div className="flex items-center justify-center h-full">
        <Particles />
      </div>
    </Card>
  );
}
