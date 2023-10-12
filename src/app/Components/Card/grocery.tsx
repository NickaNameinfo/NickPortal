import * as React from "react";
import "../style.scss";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

export const GroceryCard = () => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-1">
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            Cod Available
          </span>
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            5KM
          </span>
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold mt-3 text-sm  cardHeader">
              Apple1 - Shimla
            </div>
            <div className="font-normal text-sm mt-2  cardHeader">
              4 pcs (Approx. 550 - 640 g)
            </div>
            <div className="w-full flex justify-between mt-3 mb-3">
              <p className="font-normal text-sm  grocarycartfootercolor">
                120 Stocks
              </p>
              <p className="font-normal text-sm  cardHeader">Rs : 124.34</p>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            Cod Available
          </span>
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            5KM
          </span>
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold mt-3 text-sm  cardHeader">
              Apple1 - Shimla
            </div>
            <div className="font-normal text-sm mt-2  cardHeader">
              4 pcs (Approx. 550 - 640 g)
            </div>
            <div className="w-full flex justify-between mt-3 mb-3">
              <p className="font-normal text-sm  grocarycartfootercolor">
                120 Stocks
              </p>
              <p className="font-normal text-sm  cardHeader">Rs : 124.34</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            Cod Available
          </span>
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            5KM
          </span>
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold mt-3 text-sm  cardHeader">
              Apple1 - Shimla
            </div>
            <div className="font-normal text-sm mt-2  cardHeader">
              4 pcs (Approx. 550 - 640 g)
            </div>
            <div className="w-full flex justify-between mt-3 mb-3">
              <p className="font-normal text-sm  grocarycartfootercolor">
                120 Stocks
              </p>
              <p className="font-normal text-sm  cardHeader">Rs : 124.34</p>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            Cod Available
          </span>
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            5KM
          </span>
          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold mt-3 text-sm  cardHeader">
              Apple1 - Shimla
            </div>
            <div className="font-normal text-sm mt-2  cardHeader">
              4 pcs (Approx. 550 - 640 g)
            </div>
            <div className="w-full flex justify-between mt-3 mb-3">
              <p className="font-normal text-sm  grocarycartfootercolor">
                120 Stocks
              </p>
              <p className="font-normal text-sm  cardHeader">Rs : 124.34</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default GroceryCard;