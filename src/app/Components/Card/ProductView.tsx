import * as React from "react";
import "../style.scss";
import { Card, CardBody, Image } from "@nextui-org/react";

export const ProductViewCard = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-1">
      <Card
        className="Storecard py-2.5 px-2.5"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            10 Store
          </span>
          <Image
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[220px]"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          />
        </CardBody>
      </Card>
      <Card
        className="Storecard py-2.5 px-2.5"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            10 Store
          </span>
          <Image
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[220px]"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          />
        </CardBody>
      </Card>
      <Card
        className="Storecard py-2.5 px-2.5"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            10 Store
          </span>
          <Image
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[220px]"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          />
        </CardBody>
      </Card>
      <Card
        className="Storecard py-2.5 px-2.5"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            10 Store
          </span>
          <Image
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[220px]"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          />
        </CardBody>
      </Card>
    </div>
  );
};
export default ProductViewCard;
