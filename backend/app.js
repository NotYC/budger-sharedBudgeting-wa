import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./authentication/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

app.use("/auth", authRoutes);

export default app;
