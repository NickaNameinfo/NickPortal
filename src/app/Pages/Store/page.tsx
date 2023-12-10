"use client";
import PremiumCard from "@/app/Components/Card/PremiumCard";
import StoreHeaderCard from "@/app/Components/Card/StoreHeaderCard";
import GroceryCard from "@/app/Components/Card/grocery";
import React from "react";

const Store = () => {
  return (
    <>
      <StoreHeaderCard />
      <GroceryCard/>
      <PremiumCard />
    </>
  );
};

export default Store;
