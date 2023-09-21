import { Button, Select, SelectItem } from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import { IconHome, IconInfo, IconProfile } from "../Icons";
import { SideNavbar } from "./navbar";

export const NavBar = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <SideNavbar />
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12 justify-between navBarStyle p-24x22 gap-4 items-center">
          <div className="grid grid-cols-12 gap-2 col-span-4 items-center">
            <div className="col-span-2 text-center">
              <Button
                isIconOnly
                color="primary"
                className="bg-white w-50 h-50"
                aria-label="Take a photo"
              >
                <IconHome height="16px" width="16px" />
              </Button>
            </div>
            <div className="col-span-10">
              <Select
                placeholder="Select an animal"
                startContent={<IconHome />}
                defaultSelectedKeys={["cat"]}
              >
                <SelectItem key={"test"} value={"test"}>
                  test
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="col-span-8 flex justify-between">
            <div>
              <Button color="primary" className="w-100 h-50">
                Store View
              </Button>
            </div>
            <div>
              <Button color="primary" className="w-100 h-50">
                Product View
              </Button>
            </div>
            <div>
              <Button color="primary" className="w-100 h-50">
                Vendor View
              </Button>
            </div>
            <div>
              <Button color="primary" className="w-100 h-50">
                Map View
              </Button>
            </div>
            <div>
              <Button
                isIconOnly
                color="warning"
                aria-label="Like"
                className="bg-warning-900 w-50 h-50"
              >
                <IconInfo />
              </Button>
            </div>
            <div>
              <Button
                isIconOnly
                color="primary"
                className="bg-primary-900 w-50 h-50"
                aria-label="Take a photo"
              >
                <IconProfile />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
