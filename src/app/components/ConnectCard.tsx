import Card from "./Card";

export default function ConnectCard() {
  return (
    <Card className="lg:col-span-2 row-span-2 col-span-1 animate-slidein700">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl text-[#899878]">
          <div className="flex justify-between items-center">
            <span>Let&apos;s Connect</span>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#899878] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#899878]"></span>
            </span>
          </div>
          <hr />
        </div>
        <div className="text-sm">
          Feel free to reach out to me via email at{" "}
          <a
            className="text-[#899878]"
            href="mailto:mohitsharma23j97@gmail.com"
          >
            mohitsharma23j97@gmail.com
          </a>{" "}
          if you&apos;d like to discuss anything tech-related. I&apos;d love to
          chat!
        </div>
      </div>
    </Card>
  );
}
