import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Divider,
  useDisclosure,
  Tooltip,
  User,
  ModalFooter,
  Button,
  ScrollShadow,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { IconDelete } from "../Icons";
const columns = [
  { name: "Sl.No", uid: "no" },
  { name: "Product", uid: "name" },
  { name: "Store Name", uid: "StoreName" },
  { name: "Quantity", uid: "actions" },
  { name: "Price", uid: "Price" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    no: "1",
    team: "Management",
    status: "active",
    StoreName: "Samz Stroe",
    age: "29",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "45",
    email: "446",
  },
  {
    id: 2,
    name: "Zoey Lang",
    no: "2",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    Price: "657",
    email: "446",
    StoreName: "Fruits Stroe",
  },
  {
    id: 3,
    name: "Jane Fisher",
    no: "3",
    team: "Development",
    status: "active",
    age: "22",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Grocery Stroe",
  },
  {
    id: 4,
    name: "William Howard",
    no: "4",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    Price: "657",
    email: "446",
    StoreName: "Bike Stroe",
  },
  {
    id: 5,
    name: "Kristen Copper",
    no: "5",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
  {
    id: 6,
    name: "Kristen Copper",
    no: "6",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
  {
    id: 7,
    name: "Kristen Copper",
    no: "7",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
  {
    id: 8,
    name: "Kristen Copper",
    no: "8",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
  {
    id: 9,
    name: "Kristen Copper",
    no: "9",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
  {
    id: 10,
    name: "Kristen Copper",
    no: "10",
    team: "Sales",
    status: "active",
    age: "24",
    avatar:
      "https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg",
    Price: "657",
    email: "446",
    StoreName: "Arul's Stroe",
  },
];
export const BuyCard = (props:any) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const renderCell = React.useCallback(
    (
      user: {
        [x: string]: any;
        avatar: any;
        email:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.PromiseLikeOfReactNode
          | null
          | undefined;
        team:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | React.PromiseLikeOfReactNode
          | null
          | undefined;
        status: string | number;
      },
      columnKey: string | number
    ) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.avatar }}
              //   description={user.email}
              name={null}
            >
              {/* {user.email} */}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">
                {/* {user.team} */}
              </p>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex items-center gap-1">
              <div className=" ">
                <div className="addsub bg-gray-200 flex justify-between items-center">
                  <Button
                    className="bgnone p-0 m-0 text-base font-semibold "
                    radius="full"
                    isIconOnly
                    size="md"
                  >
                    -
                  </Button>
                  <p className="bgnone p-0 m-0 text-sm font-semibold ">453</p>

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
              <Tooltip
                color="danger"
                content="Delete"
                closeDelay={0}
                size="sm"
                radius="lg"
              >
                <div className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Button
                    className="bgnone p-0 m-0"
                    onPress={onOpen}
                    radius="full"
                    isIconOnly
                    size="lg"
                  >
                    <IconDelete fill="#ff0000" />
                  </Button>
                </div>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"5xl"}
        // backdrop="opaque"
        shadow="md"
      >
        <ModalContent className="pb-3">
          <>
            <ModalHeader></ModalHeader>
            <ModalBody className="p-0 m-0 mt-2 ">
              <div className="flex px-0 ">
                <div className="w-2/3 mx-2">
                  <Table
                    isStriped
                    classNames={{
                      base: "max-h-[360px] overflow-scroll",
                      table: "min-h-[300px]",
                    }}
                  >
                    <TableHeader columns={columns} className="m-0">
                      {(column) => (
                        <TableColumn
                          className="ps-1 m-0"
                          key={column.uid}
                          align={column.uid === "actions" ? "center" : "start"}
                        >
                          {column.name}
                        </TableColumn>
                      )}
                    </TableHeader>

                    <TableBody items={users} className="m-0 p-0">
                      {(item) => (
                        <TableRow key={item.id} className="p-0 m-0">
                          {(columnKey) => (
                            <TableCell className="p-1 m-0">
                              {renderCell(item, columnKey)}
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <div className="items-center flex justify-center">
                    <ModalFooter>
                      <Button size="sm" color="primary" className="me-5">
                        Clear Cart
                      </Button>
                      <Button size="sm" color="primary" variant="bordered">
                        Buy More Items
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
                <div className="w-1/3 BuycarBg mx-4">
                  <div className="flex justify-between py-1 mx-3 font-medium text-sm m-2.5">
                    <div>Total Products (4 Items )</div>
                    <div> Rs : 5050</div>
                  </div>
                  <div className="flex justify-between py-1 mx-3 font-medium text-sm m-2.5">
                    <div>Discount</div>
                    <div> 100%</div>
                  </div>
                  <div className="flex justify-between py-1 mx-3 font-medium text-sm m-2.5">
                    <div>Delivery Charge</div>
                    <div> Free</div>
                  </div>
                  <Divider orientation="horizontal" className="my-3" />
                  <div className="flex justify-between py-1 mx-3 text-base font-medium  m-2.5">
                    <div>Total Amount</div>
                    <div> Rs. 3500</div>
                  </div>
                  <Divider orientation="horizontal" className="my-3" />
                  <div className="paymetoptionBg mx-3 mt-2 rounded-lg">
                    <div className="font-medium paymetoption text-base mx-3 pb-4 pt-2">
                      Payment Options
                    </div>
                    <RadioGroup className="w-full">
                      <div className="flex  justify-between items-center mx-3 w-full">
                        <div className="w-2/4 m-1 items-center">
                          <Radio
                            value=" Google-Pay "
                            size="sm"
                            className="items-center"
                          >
                            Google Pay
                          </Radio>
                        </div>
                        <div className="w-2/4 m-1 items-center">
                          <Radio
                            value="Phone-Pay"
                            size="sm"
                            className="items-center"
                          >
                            Phone Pay
                          </Radio>
                        </div>
                      </div>
                      <div className="flex  justify-between items-center mx-3 w-full">
                        <div className="w-2/4 m-1 items-center">
                          <Radio
                            value=" Debit-Card"
                            size="sm"
                            className="items-center"
                          >
                            Debit Card
                          </Radio>
                        </div>
                        <div className="w-2/4 m-1 items-center">
                          <Radio
                            value="Credit-Card"
                            size="sm"
                            className="items-center"
                          >
                            Credit Card
                          </Radio>
                        </div>
                      </div>
                      <div className="justify-between mx-3 flex w-full items-center">
                        <div className="w-2/4 m-1 items-center">
                          <Radio
                            value="Cash-on-Delivery"
                            size="sm"
                            className="items-center"
                          >
                            Cash on Delivery
                          </Radio>
                        </div>
                      </div>
                    </RadioGroup>
                    <div className="flex items-center justify-center mt-4 pb-3">
                      <Button size="sm" color="primary" className="me-5">
                        Book Order
                      </Button>
                      <Button size="sm" color="primary" variant="bordered">
                        Back To Shop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>

      <>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Delete Product
                </ModalHeader>
                <ModalBody>
                  Are you sure you want to delete this product ?
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="ghost"
                    color="default"
                    size="sm"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button color="danger" size="sm" onPress={onClose}>
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
};
