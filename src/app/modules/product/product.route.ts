import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/api/products", productController.createProduct);
router.get("/api/products", productController.searchAndGetProduct);
// router.get("/api/products", productController.searchAndGetProduct);
router.get("/api/products/:productId", productController.getSpecificProduct);
router.delete(
  "/api/products/:productId",
  productController.deleteSpecificProduct
);
router.put("/api/products/:productId", productController.updateSpecificProduct);
export const productRoute = router;
