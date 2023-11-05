import * as React from "react";
import "../style.scss";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import {
  IconHeart,
  IconShopBag,
  IconShoptrolley,
  IconTick,
  IconsEye,
} from "../Icons";
import StoreHeaderCard from "./StoreHeaderCard";

export const PremiumCard = () => {
  return (
    <>
      <StoreHeaderCard />
      <div className="grid grid-cols-4 gap-2">
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            90%
          </span>

          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold text-base mt-2 TextMaincolor">
              Apple - Royal Economy...
            </div>

            <div className="w-full flex justify-between mt-2">
              <p className="font-semibold text-base Pricecolor p-0">
                Rs : 124.34
              </p>
              <p className="font-normal text-sm  TextMaincolor p-0">
                120 Stocks
              </p>
            </div>
            <div className="w-full flex justify-between mt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Per Order
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2 pb-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#FFFFFF" />
            </div>
            <div className="w-full flex justify-around pb-3">
              <div className="PrimiumCardFooterBg rounded-lg flex w-full justify-around items-center">
                <IconHeart fill="#FF0000" className="m-3 cursor-pointer" />
                <IconsEye fill="#CFA007" className="m-3 cursor-pointer" />
                <IconShopBag fill="#4C86F9" className="m-3 cursor-pointer" />
                <IconShoptrolley
                  fill="#49A84C"
                  className="m-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            90%
          </span>

          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold text-base mt-2 TextMaincolor">
              Apple - Royal Economy...
            </div>

            <div className="w-full flex justify-between mt-2">
              <p className="font-semibold text-base Pricecolor p-0">
                Rs : 124.34
              </p>
              <p className="font-normal text-sm  TextMaincolor p-0">
                120 Stocks
              </p>
            </div>
            <div className="w-full flex justify-between mt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Per Order
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2 pb-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#FFFFFF" />
            </div>
            <div className="w-full flex justify-around pb-3">
              <div className="PrimiumCardFooterBg rounded-lg flex w-full justify-around items-center">
                <IconHeart fill="#FF0000" className="m-3 cursor-pointer" />
                <IconsEye fill="#CFA007" className="m-3 cursor-pointer" />
                <IconShopBag fill="#4C86F9" className="m-3 cursor-pointer" />
                <IconShoptrolley
                  fill="#49A84C"
                  className="m-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            90%
          </span>

          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold text-base mt-2 TextMaincolor">
              Apple - Royal Economy...
            </div>

            <div className="w-full flex justify-between mt-2">
              <p className="font-semibold text-base Pricecolor p-0">
                Rs : 124.34
              </p>
              <p className="font-normal text-sm  TextMaincolor p-0">
                120 Stocks
              </p>
            </div>
            <div className="w-full flex justify-between mt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Per Order
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2 pb-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#FFFFFF" />
            </div>
            <div className="w-full flex justify-around pb-3">
              <div className="PrimiumCardFooterBg rounded-lg flex w-full justify-around items-center">
                <IconHeart fill="#FF0000" className="m-3 cursor-pointer" />
                <IconsEye fill="#CFA007" className="m-3 cursor-pointer" />
                <IconShopBag fill="#4C86F9" className="m-3 cursor-pointer" />
                <IconShoptrolley
                  fill="#49A84C"
                  className="m-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
      <Card className="Storecard pt-3.5 px-3">
        <CardBody className="overflow-visible p-0 relative">
          <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
            90%
          </span>

          <Image
            isZoomed
            alt="Here no Image"
            shadow="md"
            width="100%"
            radius="lg"
            className="w-full object-cover min-h-[176px]"
            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
          />
        </CardBody>
        <CardFooter className="p-0">
          <div className="grid grid-cols-1 w-full">
            <div className="font-semibold text-base mt-2 TextMaincolor">
              Apple - Royal Economy...
            </div>

            <div className="w-full flex justify-between mt-2">
              <p className="font-semibold text-base Pricecolor p-0">
                Rs : 124.34
              </p>
              <p className="font-normal text-sm  TextMaincolor p-0">
                120 Stocks
              </p>
            </div>
            <div className="w-full flex justify-between mt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Per Order
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#49A84C" />
            </div>
            <div className="w-full flex justify-between pt-2 pb-2">
              <p className="font-normal text-sm  Pricecolor TextMaincolor p-0">
                Online Payment
              </p>
              <IconTick fill="#FFFFFF" />
            </div>
            <div className="w-full flex justify-around pb-3">
              <div className="PrimiumCardFooterBg rounded-lg flex w-full justify-around items-center">
                <IconHeart fill="#FF0000" className="m-3 cursor-pointer" />
                <IconsEye fill="#CFA007" className="m-3 cursor-pointer" />
                <IconShopBag fill="#4C86F9" className="m-3 cursor-pointer" />
                <IconShoptrolley
                  fill="#49A84C"
                  className="m-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
    </>
   
  );
};
export default PremiumCard;
