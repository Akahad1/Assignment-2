import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const DATABASE =
  "mongodb+srv://admin-up:3uLFHue3QxKQxPft@cluster0.xuxoczf.mongodb.net/Assinment-2?retryWrites=true&w=majority&appName=Cluster0";
console.log(config.port);
async function main() {
  try {
    await mongoose.connect(DATABASE as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
