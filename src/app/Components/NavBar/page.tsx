import { Button, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import { IconHome, IconInfo, IconProfile } from "../Icons";
import { SideNavbar } from "../SideBar/page";
import { InfoCard } from "../Card/InfoCard";
import { Login } from "../Login/Login";
import Link from "next/link";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="grid grid-cols-12 justify-between navBarStyle gap-4 items-center p-3">
        <div className="grid grid-cols-12 gap-2 col-span-4 items-center">
          <div className="col-span-2 text-center">
            <Button
              isIconOnly
              color="primary"
              className="bg-white"
              aria-label="Take a photo"
            >
              <IconHome height="16px" width="16px" />
            </Button>
          </div>
          <div className="col-span-10"></div>
        </div>
        <div className="col-span-8 flex justify-between">
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
      <InfoCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
