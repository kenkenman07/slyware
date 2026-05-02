import express from "express";
import { dbClient } from "../database/db-client.js";

export const router = express.Router();

router.get("/page/count", async (req, res) => {
  const pageName = req.query.pageName;
  if (!pageName) return res.status(400).json({});
  await dbClient.countUp(pageName);
  res.status(200).json({});
});
