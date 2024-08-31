import Card from "./Card";

export default function ConnectCard() {
  return (
    <Card className="lg:col-span-2 row-span-2 col-span-1">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl text-[#899878]">
          Let&apos;s Connect
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
