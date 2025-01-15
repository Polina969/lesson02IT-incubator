import { dbBlogsType } from "../../db/dbBlogs";
import { DBPostsType } from "../../db/dbPosts";

export const deleteFullTestingController = {
  deleteFullBlogsAndPosts(dbBlogs: dbBlogsType, dbPosts: DBPostsType): void {
    dbBlogs.blogs = [];
    dbPosts.posts = [];
  },
};
