import express from "express";
import { productRoute } from "./app/modules/product/product.route";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", productRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
