import express, { Request, Response, Router } from "express";
import { HTTP_STATUSES } from "../utils";
import { deleteFullTestingController } from "../repository/testing/deleteFullTestingController";
import { dbBlogs, dbBlogsType } from "../db/dbBlogs";
import { dbPosts, dbPostsType } from "../db/dbPosts";

export const deleteTestsRouter = () => {
  const testingRouter = express.Router();

  testingRouter.delete("/testing/all-data", (req: Request, res: Response) => {
    deleteFullTestingController.deleteFullBlogsAndPosts(dbBlogs, dbPosts);
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204);
    return;
  });

  return testingRouter;
};
// //psrhm
// dbBlogs: dbBlogsType,
//   dbPosts: dbPostsType
