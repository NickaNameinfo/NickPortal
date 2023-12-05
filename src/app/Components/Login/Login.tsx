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
import {
  IconCLose,
  IconForgotSVG,
  IconLogin,
  IconLoginSVG,
  IconOTPSVG,
  IconProfile,
} from "../Icons";
import { ForgotPassword } from "./ForgotPassword";
import { OTPPage } from "./Otp";
import { NewPassword } from "./NewPassword";

export const Login = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isForgetPassword, setIsForgetPassword] = React.useState(false);
  const [isOTP, setIsOTP] = React.useState(false);
  const [isNewPassword, setIsNewPassword] = React.useState(false);

  const onCloseModal = () => {
    onClose();
    setIsForgetPassword(false);
    setIsOTP(false);
    setIsNewPassword(false);
  };
  const onClickLogin = () => {
    if (isForgetPassword) {
      setIsOTP(true);
      if (isOTP) {
        setIsNewPassword(true);
      }
    }
  };

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
      <Modal
        isOpen={isOpen}
        onOpenChange={onCloseModal}
        placement="top-center"
        size="md"
        // closeButton={
        //   <>
        //     <IconCLose
        //       width={30}
        //       height={30}
        //       className={
        //         "p-2 cursor-pointer rounded-full IconCloseBtn absolute -top-3 -right-3"
        //       }
        //     />
        //   </>
        // }
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex self-center flex-col gap-1">
                <div className="flex justify-center">
                  {isNewPassword ? (
                    ""
                  ) : isOTP ? (
                    <IconOTPSVG width="180px" height="180px" />
                  ) : isForgetPassword ? (
                    <IconForgotSVG width="180px" height="180px" />
                  ) : (
                    <IconLoginSVG width="180px" height="180px" />
                  )}
                </div>
                <div className="self-center font-bold text-3xl">
                  {isNewPassword
                    ? "Create New Password"
                    : isOTP
                    ? "Enter OTP"
                    : isForgetPassword
                    ? "Forgot password"
                    : "Log in"}
                </div>
              </ModalHeader>
              <ModalBody>
                {isNewPassword ? (
                  <NewPassword />
                ) : isOTP ? (
                  <OTPPage />
                ) : isForgetPassword ? (
                  <ForgotPassword />
                ) : (
                  <>
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
                      <Link
                        className="cursor-pointer"
                        color="primary"
                        onPress={() => setIsForgetPassword(true)}
                        size="sm"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </>
                )}

                <Button color="primary" onPress={() => onClickLogin()}>
                  {isForgetPassword ? "SUBMIT" : "LOGIN"}
                  <IconLogin fill="white" />
                </Button>
              </ModalBody>
              <ModalFooter>
                <div className="flex items-center">
                  <p className="text-sm pe-2 Iconweb">Not A Member ? </p>
                  <Link
                    className="cursor-pointer font-semibold"
                    color="primary"
                    onPress={() => onCloseModal()}
                    size="sm"
                  >
                    Register Now
                  </Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
