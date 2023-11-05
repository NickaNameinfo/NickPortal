import * as React from "react";
import "../style.scss";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import {
  IconCall,
  IconMap,
  IconMapRound,
  IconStar,
  IconstoreCardNext,
  Iconwhatsup,
} from "../Icons";
export const StoreCard = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Card className="ps-1 Storecard p-0  ">
        <CardHeader className="pb-0 pt-3 ps-2 flex-col items-start ">
          <p className="p-0 font-semibold text-base TextMaincolor">
            Company Name tag
          </p>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 pb-3.5 ps-2 pe-1 ">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <Image
                isZoomed
                shadow="md"
                width="100%"
                radius="lg"
                className="w-full object-cover h-[112px]"
                alt="Card background"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </div>
            <div className="col-span-7 ps-2">
              <h2 className="font-medium text-sm TextMaincolor">Open :</h2>
              <p className="font-normal text-xs StortimingColor tracking-tight mt-1">
                09: 30am-10:00pm
              </p>
              <div className="flex items-center ">
                <p className="mt-1 ">
                  <IconStar fill="#FF9900" />
                </p>
                <p className="font-normal text-sm mt-1 ps-2 StortimingColor">
                  4.3
                </p>
              </div>
              <div className="flex flex-row">
                <p className="flex mt-1 justify-between basis-9/12 pe-2 items-center">
                  <p className="cursor-pointer">
                    <Iconwhatsup fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconCall fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMap fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMapRound fill="#6942CB" />
                  </p>
                </p>

                <div className="mt-1 basis-3/12 justify-center flex">
                  <div className="iconbox flex items-center justify-center cursor-pointer">
                    <IconstoreCardNext fill="#6942CB" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="p-0">
          <div className="w-full flex justify-between ps-2 pe-1 pb-3">
            <p className=" font-normal text-sm  TextMaincolor ">
              Products : 150
            </p>
            <p className=" font-normal text-sm  TextMaincolor ">
              Near By : 15 Km
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="ps-1 Storecard p-0  ">
        <CardHeader className="pb-0 pt-3 ps-2 flex-col items-start ">
          <p className="p-0 font-semibold text-base TextMaincolor">
            Company Name tag
          </p>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 pb-3.5 ps-2 pe-1 ">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <Image
                isZoomed
                shadow="md"
                width="100%"
                radius="lg"
                className="w-full object-cover h-[112px]"
                alt="Card background"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </div>
            <div className="col-span-7 ps-2">
              <h2 className="font-medium text-sm TextMaincolor">Open :</h2>
              <p className="font-normal text-xs StortimingColor tracking-tight mt-1">
                09: 30am-10:00pm
              </p>
              <div className="flex items-center ">
                <p className="mt-1 ">
                  <IconStar fill="#FF9900" />
                </p>
                <p className="font-normal text-sm mt-1 ps-2 StortimingColor">
                  4.3
                </p>
              </div>
              <div className="flex flex-row">
                <p className="flex mt-1 justify-between basis-9/12 pe-2 items-center">
                  <p className="cursor-pointer">
                    <Iconwhatsup fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconCall fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMap fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMapRound fill="#6942CB" />
                  </p>
                </p>

                <div className="mt-1 basis-3/12 justify-center flex">
                  <div className="iconbox flex items-center justify-center cursor-pointer">
                    <IconstoreCardNext fill="#6942CB" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="p-0">
          <div className="w-full flex justify-between ps-2 pe-1 pb-3">
            <p className=" font-normal text-sm  TextMaincolor ">
              Products : 150
            </p>
            <p className=" font-normal text-sm  TextMaincolor ">
              Near By : 15 Km
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="ps-1 Storecard p-0  ">
        <CardHeader className="pb-0 pt-3 ps-2 flex-col items-start ">
          <p className="p-0 font-semibold text-base TextMaincolor">
            Company Name tag
          </p>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 pb-3.5 ps-2 pe-1 ">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <Image
                isZoomed
                shadow="md"
                width="100%"
                radius="lg"
                className="w-full object-cover h-[112px]"
                alt="Card background"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </div>
            <div className="col-span-7 ps-2">
              <h2 className="font-medium text-sm TextMaincolor">Open :</h2>
              <p className="font-normal text-xs StortimingColor tracking-tight mt-1">
                09: 30am-10:00pm
              </p>
              <div className="flex items-center ">
                <p className="mt-1 ">
                  <IconStar fill="#FF9900" />
                </p>
                <p className="font-normal text-sm mt-1 ps-2 StortimingColor">
                  4.3
                </p>
              </div>
              <div className="flex flex-row">
                <p className="flex mt-1 justify-between basis-9/12 pe-2 items-center">
                  <p className="cursor-pointer">
                    <Iconwhatsup fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconCall fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMap fill="#6942CB" />
                  </p>
                  <p className="cursor-pointer">
                    <IconMapRound fill="#6942CB" />
                  </p>
                </p>

                <div className="mt-1 basis-3/12 justify-center flex">
                  <div className="iconbox flex items-center justify-center cursor-pointer">
                    <IconstoreCardNext fill="#6942CB" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="p-0">
          <div className="w-full flex justify-between ps-2 pe-1 pb-3">
            <p className=" font-normal text-sm  TextMaincolor ">
              Products : 150
            </p>
            <p className=" font-normal text-sm  TextMaincolor ">
              Near By : 15 Km
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default StoreCard;
