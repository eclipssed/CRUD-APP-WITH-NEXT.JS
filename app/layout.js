import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import NextNProgressClient from "@/components/ProgressBarProvider";
import ProgressBarProvider from "@/components/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" max-w-2xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">
            <ProgressBarProvider>{children}</ProgressBarProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
