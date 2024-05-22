import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/api/products", productController.createProduct);
router.get("/api/products", productController.getProduct);
router.get("/api/products/:productId", productController.getSpecificProduct);
router.delete(
  "/api/products/:productId",
  productController.deleteSpecificProduct
);

export const productRoute = router;
