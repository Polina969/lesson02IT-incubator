import { dbBlogsType } from "../../db/dbBlogs";
import { dbPostsType } from "../../db/dbPosts";

export const deleteFullTestingController = {
  deleteFullBlogsAndPosts(dbBlogs: dbBlogsType, dbPosts: dbPostsType): void {
    dbBlogs.blogs = [];
    dbPosts.posts = [];
  },
};
