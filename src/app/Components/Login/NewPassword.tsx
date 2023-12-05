import { Input } from "@nextui-org/react";
import React from "react";

export const NewPassword = () => {
  return (
    <>
      <Input
        label="New Password"
        labelPlacement="outside"
        placeholder="Enter Your Password"
        type="password"
        variant="bordered"
      />
      <Input
        label="Confirm Password"
        labelPlacement="outside"
        placeholder="Enter Your Password"
        type="password"
        variant="bordered"
      />
    </>
  );
};
