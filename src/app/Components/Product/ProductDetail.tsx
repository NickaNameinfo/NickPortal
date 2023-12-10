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
import { BuyCard } from "../Card/BuyCard";

export const ProductDetail = (props:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal size={"5xl"} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* Product Detail */}
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-12">
                  <div className="col-span-4">
                    <Card className="p-3 h-full w-full bg-default/40">
                      <CardBody className="overflow-visible p-0 relative">
                        <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
                          50%
                        </span>
                        <Image
                          alt="Card background"
                          src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
                          // height={200}
                          shadow="md"
                          width="100%"
                          radius="lg"
                          className="w-full object-cover h-[222px]"
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
                          color="default"
                          className="w-100 h-50 px-unit-3"
                        >
                          <span className="ps-1">-</span>
                          <span className="px-2.5">2</span>
                          <span className="pe-1">+</span>
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
                          variant="ghost"
                          className="w-100 h-50 px-unit-3"
                          onClick={()=>onOpen()}
                        >
                          View Cart
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 justify-between items-center mt-4">
                      <div className="col-span-8">
                        <div className="flex items-center justify-between pb-3">
                          <p>Per Order</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between pb-3">
                          <p>Online Payment</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p>Cash On Delivery</p>
                          <IconTick fill="#E6E6E6" />
                        </div>
                      </div>
                      <div className="col-span-4 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-evenly ">
                          <div className="border-1 p-2 rounded-lg border-blue-400">
                            <IconLocation fill="#4C86F9" />
                          </div>
                          <div className="border-1 p-2 rounded-lg border-lime-400">
                            <IconShare fill="#49A84C" />
                          </div>
                        </div>
                        <div className="flex items-center justify-evenly mb-1.5">
                          <div className="border-1 p-2 rounded-lg border-red-400">
                            <IconHeart fill="#FF0000" />
                          </div>
                          <div className="border-1 p-2 rounded-lg border-red-400">
                            <IconHeart fill="#FF0000" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 relative">
                    <span className="bg-red z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
                      Ad
                    </span>
                    <Image
                      isZoomed
                      className="object-cover"
                      height={300}
                      alt="Here no Image"
                      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    />
                  </div>
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
      <BuyCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
