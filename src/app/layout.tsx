import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Urbanist } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import { clsx } from "clsx";
import { Metadata } from "next";
import { absoluteUrl } from "@/utils";
import { AUTHOR, JOB_TITLES } from "@/data/resume";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  authors: [{ name: AUTHOR, url: absoluteUrl() }],
  creator: AUTHOR,
  publisher: AUTHOR,
  keywords: [AUTHOR, ...JOB_TITLES],
};

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          urbanist.className,
          "relative min-h-screen w-screen bg-dark main-background-pattern p-4 flex flex-col",
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
