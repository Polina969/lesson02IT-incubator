import { PostsType, dbPosts } from "../../../db/dbPosts";
import { v4 as uuidv4 } from "uuid";

export const postPostsController = {
  createPost(
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
  ): PostsType {
    const createdPost = {
      id: uuidv4(),
      title: title,
      shortDescription: shortDescription,
      content: content,
      blogId: blogId,
      blogName: String(new Date()),
    };

    dbPosts.posts.push(createdPost);
    return createdPost;
  },
};
