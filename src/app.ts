import express, { NextFunction, Request, Response } from "express";
import { BlogsRouter } from "./router/blogs";
import { dbBlogs } from "./db/dbBlogs";

export const app = express();
export const PORT = process.env.PORT || 2002;
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use("/blogs", BlogsRouter(dbBlogs));

// app.use(authMiddleware); // Добавление мидлвера перед роутами
// app.use(getVideoRouter(db));
//оййо
