import express from "express";
import { router } from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
