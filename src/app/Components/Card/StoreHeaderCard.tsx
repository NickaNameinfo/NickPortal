import * as React from "react";
import "../style.scss";
import {
  IconCall,
  IconMap,
  IconMapRound,
  IconMinus,
  IconNext,
  IconPrev,
  IconShare2,
  IconStar,
  Iconwhatsup,
} from "../Icons";
import { Button, Image } from "@nextui-org/react";

export const StoreHeaderCard = () => {
  return (
    <div className="grid grid-cols-2 gap-1 flex StorecardHeader min-h-[85px]">
      <div className="flex">
        <div className="w-2/12 items-center justify-end flex">
          <div
            style={{
              padding: "4px 0px 4px 14px",
              maxHeight: "85px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          >
            <Image
              isZoomed
              alt="Here no Image"
              className="w-full object-cover "
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            />
          </div>
        </div>
        <div className="w-10/12 ms-5">
          <div className="mt-3 maincolor text-sm font-semibold items-center">
            Lorem ipsum dolor consectetur Samz adipiscing...
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center">
              <IconStar fill="#FF9900" />
              <div className="ms-2 textColortimingColor text-sm font-normal">
                4:2
              </div>
            </div>

            <div className="ms-5 maincolor text-sm font-medium flex items-center">
              Open :
              <div className="textColortimingColor text-sm font-normal ms-1">
                09: 30am-10:00pm
              </div>
            </div>
            <div className="textColortimingColor text-sm font-normal ms-5 flex items-center">
              Products :
              <div className="textColortimingColor text-sm font-normal ms-1">
                150
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/3 flex items-center justify-around">
          <div className="flex items-center justify-around">
            <Button
              radius="full"
              variant="shadow"
              isIconOnly
              aria-label="Like"
              className="Iconwhatsup"
              size="md"
            >
              <Iconwhatsup
                fill="#FFFFFF"
                width="20"
                height="22"
                className="cursor-pointer "
              />
            </Button>
          </div>
          <div className="flex items-center justify-around">
            <Button
              radius="full"
              variant="shadow"
              isIconOnly
              aria-label="Like"
              className="IconCall"
              size="md"
            >
              <IconCall
                fill="#FFFFFF"
                width="20"
                height="22"
                className="cursor-pointer "
              />
            </Button>
          </div>
          <div className="flex items-center justify-around">
            <Button
              radius="full"
              variant="shadow"
              isIconOnly
              aria-label="Like"
              className="Iconlocation"
              size="md"
            >
              <IconMap
                fill="#FFFFFF"
                width="20"
                height="22"
                className="cursor-pointer "
              />
            </Button>
          </div>
          <div className="flex items-center justify-around">
            <Button
              radius="full"
              variant="shadow"
              isIconOnly
              aria-label="Like"
              size="md"
              className="Iconweb"
            >
              <IconMapRound
                fill="#FFFFFF"
                width="20"
                height="22"
                className="cursor-pointer"
              />
            </Button>
          </div>
          <div className="flex items-center justify-around">
            <Button
              radius="full"
              variant="shadow"
              isIconOnly
              aria-label="Like"
              className="IconShare"
              size="md"
            >
              <IconShare2
                fill="#FFFFFF"
                width="20"
                height="22"
                className="cursor-pointer"
              />
            </Button>
          </div>
        </div>
        <div className="w-2/6 items-center justify-around flex  ">
          <div className="Boxshadow rounded-xl min-h-[45px] flex w-11/12">
            <div className="w-2/6 flex items-center justify-end pe-1">
              <Button
                radius="full"
                isIconOnly
                aria-label="Like"
                size="md"
                className="bgnone"
              >
                <IconMinus
                  fill="#6942CB"
                  width="23px"
                  height="5px"
                  className="cursor-pointer"
                />
              </Button>
            </div>
            <div className="w-2/3 flex items-center justify-around w-full">
              <div className="h-4/6 w-0.5 Divider"></div>
              <Button
                radius="full"
                isIconOnly
                aria-label="Like"
                size="md"
                className="bgnone"
              >
                <IconPrev
                  fill="#636060"
                  width="21px"
                  height="18px"
                  className="cursor-pointer"
                />
              </Button>

              <Button
                radius="full"
                isIconOnly
                aria-label="Like"
                size="md"
                className="bgnone"
              >
                <IconNext
                  fill="#4C86F9"
                  width="21px"
                  height="18px"
                  className="cursor-pointer"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreHeaderCard;
