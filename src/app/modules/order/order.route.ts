import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.get("/api/orders", orderController.getAllOrder);
router.post("/api/orders", orderController.createOrder);

// router.get("/api/orders", orderController.getAllOrder);

export const orderRouter = router;
