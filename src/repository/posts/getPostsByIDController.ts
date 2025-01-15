import { dbPosts } from "../../db/dbPosts";

export const getPostsByIDController = {
  findIDBlog(id: string) {
    const foundPost = dbPosts.posts.find((p) => p.id === id);
    if (!foundPost) return null;
    return foundPost;
  },
};
