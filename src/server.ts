import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const port = 5000;
const DATABASE =
  "mongodb+srv://admin-up:3uLFHue3QxKQxPft@cluster0.xuxoczf.mongodb.net/Assinment-2?retryWrites=true&w=majority&appName=Cluster0";
async function main() {
  try {
    console.log(process.env.PORT);
    await mongoose.connect(DATABASE as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
