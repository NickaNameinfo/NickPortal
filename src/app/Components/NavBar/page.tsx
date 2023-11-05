import { Button, Select, SelectItem } from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import { IconHome, IconInfo, IconProfile } from "../Icons";
import { SideNavbar } from "../SideBar/page";

export const NavBar = () => {
  return (
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
          <Button color="primary" className="w-100">
            Store View
          </Button>
        </div>
        <div>
          <Button color="primary" className="w-100">
            Product View
          </Button>
        </div>
        <div>
          <Button color="primary" className="w-100">
            Vendor View
          </Button>
        </div>
        <div>
          <Button color="primary" className="w-100">
            Map View
          </Button>
        </div>
        <div>
          <Button
            isIconOnly
            color="warning"
            aria-label="Like"
            className="bg-warning-900"
          >
            <IconInfo />
          </Button>
        </div>
        <div>
          <Button
            isIconOnly
            color="primary"
            className="bg-primary-900"
            aria-label="Take a photo"
          >
            <IconProfile />
          </Button>
        </div>
      </div>
    </div>
  );
};
