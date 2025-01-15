import express, { NextFunction, Request, Response } from "express";
import { BlogsRouter, VersionRouter } from "./router/blogs";
import { dbBlogs } from "./db/dbBlogs";
import cors from "cors";

export const app = express();
export const PORT = process.env.PORT || 2010;
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use("/blogs", BlogsRouter(dbBlogs));
app.use(VersionRouter());
// app.use(authMiddleware); // Добавление мидлвера перед роутами
// app.use(getVideoRouter(db));
//ойй
