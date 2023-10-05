import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import React from "react";
import { IconHeart, IconLocation, IconShare, IconTick } from "../Icons";

export const ProductDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button onPress={() => onOpen()}>Open Detail</Button>
      </div>
      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">
                    <Card className="p-3 bg-default/40">
                      <CardBody className="overflow-visible p-0">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src="https://nextui.org/images/hero-card-complete.jpeg"
                          width={270}
                        />
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-span-4 px-3">
                    <h2 className="text-xl truncate font-bold">
                      Fresho Onion (Loose), 5 kg ejdjfnm jd
                    </h2>
                    <p className="text-slate-300 text-lg line-through font-normal">
                      MRP:Rs 151.32
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-black text-lg font-normal">
                        Price:Rs 115 (1/kg)
                      </p>
                      <div className="text-xs">120 Stocks</div>
                    </div>
                    <div className="grid grid-cols-12 justify-between items-center">
                      <div className="col-span-4">
                        <Button
                          color="primary"
                          className="w-100 h-50 px-unit-3"
                        >
                          Store View
                        </Button>
                      </div>
                      <div className="col-span-4">
                        <Button
                          color="primary"
                          className="w-100 h-50 px-unit-3"
                        >
                          Store View
                        </Button>
                      </div>
                      <div className="col-span-4">
                        <Button
                          color="primary"
                          className="w-100 h-50 px-unit-3"
                        >
                          Store View
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 justify-between items-center">
                      <div className="col-span-8">
                        <div className="flex items-center justify-between">
                          <p>Per Order</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p>Online Payment</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p>Cash On Delivery</p>
                          <IconTick fill="#E6E6E6" />
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="flex items-center justify-between my-1.5">
                          <div className="border-1 p-1 rounded border-blue-400">
                            <IconLocation fill="#4C86F9" />
                          </div>
                          <div className="border-1 p-1 rounded ">
                            <IconShare fill="#49A84C" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="border-1 p-1 rounded ">
                            <IconHeart fill="#FF0000" />
                          </div>
                          <div className="border-1 p-1 rounded ">
                            <IconHeart fill="#FF0000" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4"></div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
