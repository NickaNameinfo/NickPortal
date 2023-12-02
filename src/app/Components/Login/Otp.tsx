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
import { IconLogin } from "../Icons";

export const OTPPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        SUBMIT <IconLogin fill="white" />
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
                  {/* <IconOTPSVG width="180px" height="180px" /> */}
                </div>
                <div className="self-center">Enter OTP</div>
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center">
                  <Input
                    className="me-2"
                    maxLength={1}
                    radius="full"
                    variant="bordered"
                    type="OTP"
                  />
                  <Input
                    className="me-2"
                    maxLength={1}
                    radius="full"
                    variant="bordered"
                  />
                  <Input
                    className="me-2"
                    radius="full"
                    maxLength={1}
                    variant="bordered"
                  />
                  <Input
                    className=""
                    maxLength={1}
                    radius="full"
                    variant="bordered"
                  />
                </div>
                <Button color="primary" onPress={onClose}>
                  SUBMIT <IconLogin fill="white" />
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
