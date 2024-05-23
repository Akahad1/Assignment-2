import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const getAllProductFromDB = async (searchItem?: any) => {
  if (searchItem) {
    const firstword = { name: { $regex: searchItem, $options: "i" } };
    const result = await Product.find(firstword);
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
};
const getSingleProductFromDB = async (id: any) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const deleteSpecificProductFromDB = async (id: any) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
const searchAndGetProductFromDB = async (searchItem: any) => {};

const updateSpecificProductFromDB = async (
  id: any,
  quantity: number,
  price: number,
  category: string
) => {
  const result = await Product.updateOne(
    { _id: id },

    { "inventory.quantity": quantity, price: price, category: category }
  );
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteSpecificProductFromDB,
  updateSpecificProductFromDB,
  searchAndGetProductFromDB,
};
