import { json } from "express";
import express from 'express';
import dotenv from "dotenv";
import user_router from "./Routes/userRoutes";

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(json());

app.use("/user", user_router);

app.listen(port, () => {
  console.log(`Xplora Tours is running on port ${port}`);
});