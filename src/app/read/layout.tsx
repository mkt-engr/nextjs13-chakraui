import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Read NFC",
  description: "Read NFC Description",
};

export default function ReadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={inter.className}>{children}</section>
    </>
  );
}
