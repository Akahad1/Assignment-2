import { Request, Response } from "express";
import { productServices } from "./product.services";
import productValidationSchema from "./product.joi.validator";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // data validate Using joi
    const { error, value } = productValidationSchema.validate(product);
    console.log({ error }, { value });
    const result = await productServices.createProductIntoDB(value);
    if (error) {
      res.status(400).json({
        success: false,
        message: "SomeThing is Rong",
        error,
      });
    }

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
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const searchItem: any = req.query.searchTerm;
    console.log(searchItem);
    if (searchItem) {
      const words = searchItem.split(" ");
      const firstWord = words[0];
      console.log(firstWord);
      console.log(words);
      const result = await productServices.getAllProductFromDB(firstWord);
      res.status(200).json({
        success: true,
        message: `Products matching search term ${firstWord} fetched successfully!`,
        data: result,
      });
    } else {
      const result = await productServices.getAllProductFromDB();

      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
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

const updateSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const quantity = req.body.inventory.quantity as number;
    const { price, category } = req.body;

    const result = await productServices.updateSpecificProductFromDB(
      id,
      quantity,
      price,
      category
    );

    console.log(result);
    const updateData = await productServices.getSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updateData,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "SomeThing is Rong",
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteSpecificProduct,
  updateSpecificProduct,
};
