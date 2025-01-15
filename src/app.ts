import express, { NextFunction, Request, Response } from "express";
import { BlogsRouter, VersionRouter } from "./router/blogs";
import { dbBlogs } from "./db/dbBlogs";
import cors from "cors";

export const app = express();
export const PORT = 2010;
const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

app.use(VersionRouter());
app.use("/blogs", BlogsRouter(dbBlogs));
