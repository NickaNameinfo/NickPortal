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
import {
  IconHeart,
  IconLocation,
  IconNxt,
  IconPrev,
  IconPrv,
  IconShare,
  IconTick,
} from "../Icons";
import { BuyCard } from "../Card/BuyCard";

export const ProductDetail = (props: any) => {
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
              <ModalBody className="p-3">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <Card className="p-2 h-full w-11/12 bg-default/40">
                      <CardBody className="overflow-visible p-0 relative">
                        <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
                          50%
                        </span>
                        <Image
                          alt="Card background"
                          src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
                          shadow="md"
                          width="100%"
                          radius="lg"
                          className="w-full object-cover h-[222px]"
                        />
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-span-5 px-3">
                    <h2 className="text-xl truncate font-bold">
                      Fresho Onion (Loose), 5 kg test sam and developed
                    </h2>
                    <p className="text-slate-300 text-lg line-through font-normal">
                      MRP:Rs 151.32
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-black text-lg font-normal">
                        Price:Rs 115 (1/kg)
                      </p>
                      <div className="text-sm">120 Stocks</div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="">
                        <div className="flex justify-between items-center rounded-xl bg-gray-200">
                          <Button
                            className="bgnone p-0 m-0 text-base font-semibold"
                            radius="full"
                            isIconOnly
                            size="md"
                          >
                            -
                          </Button>
                          <p className="bgnone text-sm font-semibold px-2 ">
                            133
                          </p>
                          <Button
                            className="bgnone p-0 m-0 text-base font-semibold "
                            radius="full"
                            isIconOnly
                            size="md"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="">
                        <Button
                          size="md"
                          color="primary"
                          // className="w-100 h-50 px-unit-3"
                        >
                          Add To Cart
                        </Button>
                      </div>
                      <div className="">
                        <Button
                          color="primary"
                          variant="ghost"
                          size="md"
                          onClick={() => onOpen()}
                        >
                          View Cart
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 justify-between items-center mt-4">
                      <div className="col-span-8">
                        <div className="flex items-center justify-between pb-2.5">
                          <p className="text-sm font-normal">Per Order</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between pb-2.5">
                          <p className="text-sm font-normal">Online Payment</p>
                          <IconTick fill="#49A84C" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-normal">
                            Cash On Delivery
                          </p>
                          <IconTick fill="#E6E6E6" />
                        </div>
                      </div>
                      <div className="col-span-4 ms-4 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-end ">
                          <div className="flex gap-5 items-center">
                            <Button
                              size="sm"
                              isIconOnly
                              aria-label="Like"
                              color="primary"
                              variant="bordered"
                            >
                              <IconLocation fill="#4C86F9" />
                            </Button>
                            <Button
                              size="sm"
                              color="success"
                              variant="bordered"
                              isIconOnly
                            >
                              <IconShare fill="#49A84C" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-end mb-1.5">
                          <div className="flex gap-5 items-center">
                            <Button
                              size="sm"
                              isIconOnly
                              aria-label="Like"
                              color="danger"
                              variant="bordered"
                            >
                              <IconHeart fill="#FF0000" />
                            </Button>
                            <Button
                              size="sm"
                              color="danger"
                              variant="bordered"
                              isIconOnly
                            >
                              <IconHeart fill="#FF0000" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 relative ">
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
              <ModalFooter className="pt-0 pe-3 flex justify-between items-center ">
                <div className="font-semibold text-xl"> Related Products</div>
                <div>
                  <Button
                    className="bg-gray-200 me-5"
                    size="md"
                    isIconOnly
                    aria-label="Like"
                    variant="bordered"
                  >
                    <IconPrv fill="#000000" />
                  </Button>
                  <Button
                    className=" bg-gray-200"
                    size="md"
                    isIconOnly
                    aria-label="Like"
                    variant="bordered"
                  >
                    <IconNxt fill="#000000" />
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <BuyCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
