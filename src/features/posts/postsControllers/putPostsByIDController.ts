import { dbPosts } from "../../../db/dbPosts";
import { HTTP_STATUSES } from "../../../utils";

export interface MyObject {
  [key: string]: any; // or id?: string;
}
// export interface UpdatePostRequest {
//   title: string;
//   shortDescription: string;
//   content: string;
// }
export type UpdatePostRequest = Record<
  "title" | "shortDescription" | "content",
  string
>;
export const putPostController = {
  updatePost(
    id: string | number,
    title: string,
    shortDescription: string,
    content: string
  ) {
    const foundPost = dbPosts.posts.find((c) => c.id === id);
    if (!foundPost) {
      return HTTP_STATUSES.NOT_FOUND_404;
    }

    foundPost.title = title;
    foundPost.shortDescription = shortDescription;
    foundPost.content = content;
    console.log("** # УСПЕШНОЕ ОБНОВЛЕНИЕ **");

    return HTTP_STATUSES.NO_CONTENT_204;
  },
};
