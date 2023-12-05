import React from "react";
import { Input } from "@nextui-org/react";

export const ForgotPassword = () => {
  return (
    <>
      <Input
        isClearable
        autoFocus
        label="Email Address Or Mobile Number"
        labelPlacement="outside"
        placeholder="Enter Your Email or Mobile Number"
        variant="bordered"
      />
    </>
  );
};
