"use client";
import * as React from "react";
import { Button, NextUIProvider, Switch } from "@nextui-org/react";
import { NavBar } from "./Components/NavBar/page";
import { SideNavbar } from "./Components/SideBar/page";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mytheme text-foreground h-screen overflow-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-3 pr-8">
            <SideNavbar />
          </div>
          <div className="col-span-9">
            <NavBar />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
