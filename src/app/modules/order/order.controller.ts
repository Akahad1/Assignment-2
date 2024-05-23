import { Request, Response } from "express";
import { orderService } from "./order.services";
import { productServices } from "../product/product.services";
import orderValidatorSchema from "./order.joi.validator";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    // data validate Using joi
    const { error, value } = orderValidatorSchema.validate(order);
    console.log({ error }, { value });
    const result = await orderService.createOrderIntoDB(value);

    if (error) {
      res.status(400).json({
        success: false,
        message: "SomeThing is Rong",
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "SomeThing is Rong",
      error: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    if (email) {
      const result = await orderService.getAllOrderFromDB(email);

      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      const result = await orderService.getAllOrderFromDB();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "SomeThing is Rong",
      error: err,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
