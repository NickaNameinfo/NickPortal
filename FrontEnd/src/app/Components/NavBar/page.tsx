import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import { IconHome, IconInfo, IconProfile, NavSearchIcon } from "../Icons";
import { SideNavbar } from "../SideBar/page";
import { InfoCard } from "../Card/InfoCard";
import { Login } from "../Login/Login";
import Link from "next/link";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex justify-between navBarStyle gap-4 items-center p-3">
        <div className="items-center flex justify-between w-webkit-fill-available">
          <div className="text-center">
            <Link href={"/"}>
              <Button
                isIconOnly
                color="primary"
                className="bg-white"
                aria-label="Take a photo"
              >
                <IconHome height="16px" width="16px" />
              </Button>
            </Link>
          </div>
          <div className="xm:hidden md:block w-webkit-fill-available">
            <Input
              isClearable
              radius="lg"
              size="sm"
              className="ms-2"
              classNames={{
                label: "text-white",
                input: [
                  "bg-transparent",
                  "text-white dark:text-white",
                  "text-white",
                  "placeholder:text-text-white dark:placeholder:text-white",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-blue-600",
                  "bg-blue-600",
                  "backdrop-blur-xl",
                  "backdrop-saturate-900",
                  "hover:bg-blue-600",
                  "hover:bg-blue-600",
                  "group-data-[focused=true]:bg-blue-600",
                  ":group-data-[focused=true]:bg-blue-600",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <NavSearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="md:hidden">
            <Button
              onPress={() => onOpen()}
              isIconOnly
              color="warning"
              aria-label="Like"
              className="bg-warning-900"
            >
              <NavSearchIcon />
            </Button>
          </div>
          <div>
            <Button
              onPress={() => onOpen()}
              isIconOnly
              color="warning"
              aria-label="Like"
              className="bg-warning-900"
            >
              <IconInfo />
            </Button>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
      <div className="justify-between flex overflow-auto mt-2">
        <div>
          <Link href={"/Pages/Store"}>
            <Button color="primary" className="w-100">
              Store View
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/Pages/Product"}>
            <Button color="primary" className="w-100">
              Product View
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/Pages/Vendor"}>
            <Button color="primary" className="w-100">
              Vendor View
            </Button>
          </Link>
        </div>
        <div>
          <Button color="primary" className="w-100">
            Map View
          </Button>
        </div>
      </div>
      <InfoCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
