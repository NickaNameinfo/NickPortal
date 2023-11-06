import * as React from "react";
import "../style.scss";
import { Card, CardBody, Image, useDisclosure } from "@nextui-org/react";
import { StoreList } from "./StoreList";

export const CompanyCard = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-2">
      <Card className=" Storecard" isPressable>
        <CardBody className="overflow-visible p-0 relative">
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[230px]"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className=" Storecard" isPressable>
        <CardBody className="overflow-visible p-0 relative">
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[230px]"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className=" Storecard" isPressable>
        <CardBody className="overflow-visible p-0 relative">
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[230px]"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
      <Card className=" Storecard" isPressable>
        <CardBody className="overflow-visible p-0 relative">
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[230px]"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </CardBody>
      </Card>
    </div>
  );
};
export default CompanyCard;
