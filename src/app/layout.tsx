import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohit Sharma | Frontend Developer | Angular & JavaScript",
  description:
    "Mohit Sharma's personal portfolio showcasing front-end development skills using Angular and JavaScript. Get in touch.",
  keywords:
    "Frontend Developer, Angular Developer, React Developer, Typescript, Next, JavaScript, Mohit Sharma, Developer Portfolio, India Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
