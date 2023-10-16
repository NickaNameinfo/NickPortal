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
  Iconwhatsup,
} from "../Icons";
import { Button, Image } from "@nextui-org/react";

export const StoreHeaderCard = () => {
  return (
    <div className="grid grid-cols-2 gap-1 flex StorecardHeader min-h-[85px]">
      <div className="flex ps-3">
        <div className="w-2/12 items-center justify-end flex ">
          <div className="rounded-lg py-2">
            <Image
              alt="Here no Image"
              // height="100%"
              className="w-full object-cover "
              src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            />
          </div>
        </div>
        <div className="w-10/12 flex items-center justify-end">sam</div>
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
