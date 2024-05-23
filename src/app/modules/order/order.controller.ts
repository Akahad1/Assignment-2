import { Request, Response } from "express";
import { orderService } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrderIntoDB(order);
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
