"use client";
import * as React from "react";
import { Button, NextUIProvider, Switch } from "@nextui-org/react";
import { NavBar } from "./Components/NavBar/page";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mytheme text-foreground">
        <NavBar />
      </main>
    </NextUIProvider>
  );
}
