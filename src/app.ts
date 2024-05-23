import express from "express";
import { productRoute } from "./app/modules/product/product.route";
import cors from "cors";
import { orderRouter } from "./app/modules/order/order.route";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", productRoute);
app.use("/", orderRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
