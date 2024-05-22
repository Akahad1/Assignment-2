import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (id: any) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const deleteSpecificProductFromDB = async (id: any) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteSpecificProductFromDB,
};
