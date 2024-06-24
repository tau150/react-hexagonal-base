import { PostRepository } from "../../domain/ports/PostRepository";
import type { Post } from "../../domain/models/Post";

export const createLocalStorageRepository = (): PostRepository => {
  return {
    getAll: () => {
      const posts = localStorage.getItem("posts");
      return Promise.resolve(posts ? JSON.parse(posts) as Post[] : [])
    },
    save: (post: Post) => {
      localStorage.setItem("posts", JSON.stringify([...JSON.parse(localStorage.getItem("posts") || "[]"), post]));
      return Promise.resolve(post)
    },
    getById: (postId: string) => {
      const posts = localStorage.getItem("posts");
      const post = posts ? JSON.parse(posts).find((post: Post) => post.id === postId) : null;

      return Promise.resolve(post as Post)
    },
    update: (post: Post) => {
      const posts = JSON.parse(localStorage.getItem("posts") || "[]");
      const postIndex = posts.findIndex((p: Post) => p.id === post.id);
      posts[postIndex] = post;
      localStorage.setItem("posts", JSON.stringify(posts));

      return Promise.resolve(post)
    },
    delete: (postId: string) => {
      const posts = JSON.parse(localStorage.getItem("posts") || "[]");
      const postIndex = posts.findIndex((p: Post) => p.id === postId);
      posts.splice(postIndex, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
      return Promise.resolve()
    }
  };
}