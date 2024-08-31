export default function Card({
  className,
  children,
}: Readonly<{
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`p-4 border-[#222725] border-solid border-2 rounded-md h-auto ${className} bg-[#222725] hover:border-[#E4E6C3]`}
    >
      {children}
    </div>
  );
}
