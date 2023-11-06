import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";
import { IconsEye } from "../Icons";

export const StoreList = (props: {
  isOpen?: boolean | undefined;
  onClose?: (() => void) | undefined;
}) => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"sm"}
        backdrop="opaque"
      >
        <ModalContent className="px-5 pb-3">
          <>
            <ModalHeader className="py-3 px-0 flex items-center justify-center text-black font-medium text-base">
              Store List
            </ModalHeader>
            <Divider className="storeListDivider" />
            <ModalBody className="p-0 m-0 mt-3">
              <div className="flex items-center w-full  cursor-pointer">
                <div className="font-normal text-sm text-black w-11/12">
                  Krishna Stores
                </div>
                <div className="w-1/12 justify-end flex">
                  <IconsEye fill="#4C86F9" />
                </div>
              </div>

              <div className="flex items-center w-full  cursor-pointer ">
                <div className="font-normal text-sm text-black w-11/12">
                  Samz Stores
                </div>
                <div className="w-1/12 justify-end flex">
                  <IconsEye fill="#49A84C" />
                </div>
              </div>
              <div className="flex items-center w-full  cursor-pointer ">
                <div className="font-normal text-sm text-black w-11/12">
                  Krishna Stores
                </div>
                <div className="w-1/12 justify-end flex">
                  <IconsEye fill="#49A84C" />
                </div>
              </div>
              <div className="flex items-center w-full  cursor-pointer ">
                <div className="font-normal text-sm text-black w-11/12">
                  Krishna Stores
                </div>
                <div className="w-1/12 justify-end flex">
                  <IconsEye fill="#49A84C" />
                </div>
              </div>
              <div className="flex items-center w-full  cursor-pointer ">
                <div className="font-normal text-sm text-black w-11/12">
                  Krishna Stores
                </div>
                <div className="w-1/12 justify-end flex">
                  <IconsEye fill="#49A84C" />
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
