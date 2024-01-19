"use client";
import * as React from "react";
import StoreCard from "./Components/Card/StoreCard";
import DynamicForm from "./Components/DynamicFeilds/DynamicForm";

export default function Home() {
  const FormFields = [
    {
      name: "test",
      label: "test",
      type: "text",
      key: "test1",
      color: "primary",
      variant: "bordered",
    },
    {
      name: "test1",
      label: "test",
      type: "text",
      key: "test2",
      color: "primary",
      variant: "bordered",
    },
    {
      name: "test2",
      label: "test",
      type: "text",
      key: "test3",
      color: "primary",
      variant: "bordered",
    },
    {
      name: "test3",
      label: "test",
      type: "text",
      key: "test4",
      color: "primary",
      variant: "bordered",
    },
  ];

const onSubmit = (data) => {
  console.log(data, "datea2112312")
}
  return (
    <>
      {/* <StoreCard /> */}
      {/* <VisitCard /> */}
      <DynamicForm fields={FormFields} onSubmit={onSubmit} />
    </>
  );
}
