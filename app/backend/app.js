import express from "express";
import { router } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
