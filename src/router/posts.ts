import { PostsType, dbPosts, dbPostsType } from "../db/dbPosts";
import express, { Request, Response } from "express";
import { HTTP_STATUSES } from "../utils";
import { authMiddleware } from "../middlewares/middlewares";
import { getPostsController } from "../repository/posts/getPostsController";
import { getPostsByIDController } from "../repository/posts/getPostsByIDController";
import { postPostsController } from "../repository/posts/postPostsController";
import { putPostController } from "../repository/posts/putPostsByIDController";
import { deletePostByIDController } from "../repository/posts/deletePostsByIDController";

export const PostsRouter = (dbPosts: dbPostsType) => {
  const postRouter = express.Router();

  postRouter.get("/", (req: Request, res: Response): void => {
    const postsGET = getPostsController.getPosts(); // получаем видео из бд
    res.status(200).json(postsGET);
  });
  postRouter.get("/:id", (req: Request, res: Response): void => {
    const post = getPostsByIDController.findIDPost(req.params.id);
    if (!post) {
      res.sendStatus(404);
    } else {
      res.status(200).json(post);
    }
  });
  postRouter.use(authMiddleware);
  postRouter.post("/", (req: Request, res: Response) => {
    try {
      const createdPost: PostsType = postPostsController.createPost(
        req.body.title,
        req.body.shortDescription,
        req.body.content,
        req.body.blogId
      ); // импорт к репозиторию
      res.status(HTTP_STATUSES.CREATED_201).json(createdPost);
    } catch (error: any) {
      res
        .status(HTTP_STATUSES.BAD_REQUEST_400)
        .send({ message: error.message });
    }
  });
  postRouter.put("/:id", (req: Request, res: Response): void => {
    const putPost = putPostController.updatePost(req.params.id, req.body.name); // импорт к репозиторию
    res.status(HTTP_STATUSES.NO_CONTENT_204).json(putPost);
  });

  postRouter.delete("/:id", (req: Request, res: Response): void => {
    const status = deletePostByIDController.deleteIDPost(req.params.id);
    res.sendStatus(status);
  });

  return postRouter;
};
