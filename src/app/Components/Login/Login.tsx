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
import { IconLogin, IconLoginSVG } from "../Icons";

export const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Open Modal
      </Button>
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
                  <IconLoginSVG width="300px" height="300px" />
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
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
                <Button color="primary" onPress={onClose}>
                  LOGIN <IconLogin fill="white" />
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
