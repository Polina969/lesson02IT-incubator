import { dbPosts } from "../../db/dbPosts";

export const getPostsController = {
  getPosts() {
    const postsGET = dbPosts.posts; // получаем видео из бд
    if (!postsGET) return null;
    return postsGET;
  },
};
