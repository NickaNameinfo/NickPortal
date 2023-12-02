import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { IconForgotSVG, IconLogin } from "../Icons";
import { OTPPage } from "./Otp";

export const ForgotPassword = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link
        className="cursor-pointer"
        color="primary"
        onPress={onOpen}
        size="sm"
      >
        Forgot password?
      </Link>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="md"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex self-center flex-col gap-1">
                <div>
                  <IconForgotSVG width="180px" height="180px" />
                </div>
                <div className="self-center">Forgot password</div>
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  autoFocus
                  label="Email Address Or Mobile Number"
                  labelPlacement="outside"
                  placeholder="Enter Your Email or Mobile Number"
                  variant="bordered"
                />
                <OTPPage />
              </ModalBody>
              <ModalFooter>
                <div className="flex items-center">
                  <p className="pe-2">Not A Member ? </p>
                  <Button color="primary" onPress={onClose}>
                    Register Now
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
