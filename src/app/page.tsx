"use client";
import { Button, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="mytheme text-foreground bg-background">
        <div className="bg-primary-500 text-primary-50 rounded-small px-unit-2 py-unit-1">
          This is a primary color box
        </div>
        <Button color="primary" className="text-tiny">
          Testsdj
        </Button>
      </main> 
    </NextUIProvider>
  );
}
