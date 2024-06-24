import { PostType } from "./PostType";

export interface Post {
  id: string;
  title: string;
  body: string;
  type: PostType
}

export const isValidPostId = (id: string) => {
  return id.length >= 4
}

export const ensurePostIdIsValid = (id: string): void => {
  if(!isValidPostId(id)) {
    throw new Error("Invalid Post ID, it must be at least 4 characters long");
  }
};

export const isValidPostType = (type: string) => {
  return Object.values(PostType).includes(type as PostType)
}

export const ensurePostTypeIsValid = (id: string): void => {
  if(!isValidPostType(id)) {
    throw new Error("Invalid Post Type, it must be one of the valid type: ARTICLE | MICRO_POST | PUBLICITY");
  }
};
