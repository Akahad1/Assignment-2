import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrderFromDB = async (email?: any) => {
  if (email) {
    const result = await Order.find({ email: email });
    return result;
  } else {
    const result = await Order.find();
    return result;
  }
};

// const getSpecificUserOrderFromDB = async (email: any) => {};

export const orderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
  // getSpecificUserOrderFromDB,
};
