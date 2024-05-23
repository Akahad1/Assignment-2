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

const searchAndGetProduct = async (req: Request, res: Response) => {
  try {
    const searchItem: any = req.query.searchTerm;
    // const words = searchItem.split(" ");
    // const firstWord = words[0];
    // console.log(firstWord);
    // console.log(words);
    const result = await productServices.searchAndGetProductFromDB(searchItem);
    res.status(200).json({
      success: true,
      message: `Products matching search term ${searchItem} fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateSpecificProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.updateSpecificProductFromDB(id);
  } catch (err) {}
};

export const productController = {
  createProduct,
  getProduct,
  getSpecificProduct,
  deleteSpecificProduct,
  updateSpecificProduct,
  searchAndGetProduct,
};
