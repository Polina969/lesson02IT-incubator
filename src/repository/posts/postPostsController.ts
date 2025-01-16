import { PostsType, dbPosts } from "../../db/dbPosts";

export const postPostsController = {
  createPost(
    title: string,
    shortDescription: string,
    content: string,
    blogId: string
  ): PostsType {
    const createdPost = {
      id: String(new Date()),
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
