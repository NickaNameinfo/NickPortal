"use client";
import * as React from "react";
import { Button, NextUIProvider, Switch } from "@nextui-org/react";
import { NavBar } from "./Components/NavBar/page";
import { SideNavbar } from "./Components/SideBar/page";
import { ProductDetail } from "./Components/Product/ProductDetail";
import PremiumCard from "./Components/Card/PremiumCard";
import StoreCard from "./Components/Card/StoreCard";
import GroceryCard from "./Components/Card/grocery";
import ProductViewCard from "./Components/Card/ProductView";
import StoreHeaderCard from "./Components/Card/StoreHeaderCard";
import { StoreList } from "./Components/Card/StoreList";
import CompanyCard from "./Components/Card/companycard";
import { InfoCard } from "./Components/Card/InfoCard";
import AccordionComp from "./Components/Card/Accordion";
import { BuyCard } from "./Components/Card/BuyCard";

export default function Home() {
  return (
        <NextUIProvider >
          <main className="mytheme text-foreground overflow-hidden p-4">
            <div className="flex flex-row">
              <div className="w-1/4 md:w-1/3 lg:w-1/5">
                <SideNavbar />
              </div>
              <div className="w-1/4 md:w-2/3 lg:w-4/5 px-3 custom-scrollbar">
                <NavBar />
                {/* <ProductDetail /> */}
                <div className="h-[81vh] overflow-auto navBarStyle p-4 mt-3">
                  {/* <AccordionComp   /> */}
                  <BuyCard isOpen={undefined} onClose={undefined} />
                  <StoreList />
                  <StoreCard />
                  <GroceryCard />
                  <PremiumCard />
                  <ProductViewCard />
                  <CompanyCard />
                  <InfoCard />
                </div>
              </div>
            </div>
          </main>
        </NextUIProvider>
     
  );
}
