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
import { IconLogin, IconLoginSVG, IconProfile } from "../Icons";
import { ForgotPassword } from "./ForgotPassword";

export const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        color="primary"
        className="bg-primary-900"
        aria-label="Take a photo"
        onPress={onOpen}
      >
        <IconProfile />
      </Button>
      {/* <Button onPress={onOpen} color="primary">
        Login
      </Button> */}
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
                  <IconLoginSVG width="180px" height="180px" />
                </div>
                <div className="self-center">Log in</div>
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  autoFocus
                  label="Email Address"
                  labelPlacement="outside"
                  placeholder="Enter Your Email Address"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter Your Password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <ForgotPassword />
                </div>
                <Button color="primary" onPress={onClose}>
                  LOGIN <IconLogin fill="white" />
                </Button>
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
