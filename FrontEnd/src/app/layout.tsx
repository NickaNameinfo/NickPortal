"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNavbar } from "./Components/SideBar/page";
import { NavBar } from "./Components/NavBar/page";
import YourPage from "./Components/DynamicFeilds/YourPage";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="mytheme text-foreground overflow-hidden p-4">
            <div className="flex">
              {/* <div className="w-1/4 md:w-1/3 lg:w-1/5"> */}
              <div className="hidden lg:block xl:block 2xl:block 3xl:block 4xl:block lg:lg:w-1/4" >
                <SideNavbar />
              </div>
              {/* <div className="w-1/4 md:w-2/3 lg:w-4/5 px-3 custom-scrollbar"> */}
              <div className=" mm:w-full ml:w-full sm:w-fullv md:w-full lg:w-full xl:w-full 2xl:w-full 3xl:w-full 4xl:w-full px-3 custom-scrollbar">
                <NavBar />
                {/* <YourPage /> */}
                <div className="h-[81vh] overflow-auto navBarStyle p-4 mt-2">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
