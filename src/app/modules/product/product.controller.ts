import { Request, Response } from "express";
import { productServices } from "./product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await productServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
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

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    console.log("id", id);

    const result = await productServices.getSingleProductFromDB(id);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

const deleteSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.deleteSpecificProductFromDB(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {}
};

export const productController = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteSpecificProduct,
};
