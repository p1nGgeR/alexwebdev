import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Urbanist } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import { clsx } from "clsx";
import { Metadata } from "next";
import { absoluteUrl } from "@/utils";
import { AUTHOR, JOB_TITLES } from "@/data/resume";
import ScrollTop from "@/components/ui/ScrollTop";

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
    <html lang="en" className={"scroll-smooth"}>
      <body
        className={clsx(
          urbanist.className,
          "relative",
          "flex flex-col",
          "min-h-screen w-screen",
          "p-4",
          "bg-dark main-background-pattern",
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
