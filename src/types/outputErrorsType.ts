import { BlogInputModel } from "./blogsTypes";
import { PostInputModel } from "./postsTypes";

export type FieldNamesType = keyof BlogInputModel | keyof PostInputModel;
// const f: FieldsType = 'some' // error

export type OutputErrorsType = {
  errorsMessages: { message: string; field: FieldNamesType }[];
};
