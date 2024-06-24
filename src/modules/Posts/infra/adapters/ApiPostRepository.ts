import { PostRepository } from "../../domain/ports/PostRepository";

import type { Post } from "../../domain/models/Post";
import type { MapToDomainPost } from "../mappers/types";
import { PostDto } from "../dto";
const BASE_PATH = 'https://jsonplaceholder.typicode.com'
const BASE_HEADERS = {
  'Content-Type': 'application/json'
}

export const createApiStorageRepository = (
  mapToDomainPost: MapToDomainPost
): PostRepository => {
  return {
    getAll: async () => {
      const response = await fetch(`${BASE_PATH}/posts`)
      const posts = (await response.json()) as PostDto[]

      return posts.map(mapToDomainPost)
    },
    save: async (post: Post) => {

      await fetch(`${BASE_PATH}/posts`, {method: 'POST', headers: {...BASE_HEADERS}})

      return post
    },
    getById: async (postId: string) => {
      const response = await fetch(`${BASE_PATH}/posts/${postId}`)

      const post = await response.json()

      return post
    },
    update: async (post: Post) => {
      const response = await fetch(`${BASE_PATH}/posts/${post.id}`, {method: "PUT", headers: {...BASE_HEADERS}})
      const updatedPost = await response.json() as PostDto
      const mappedPost = mapToDomainPost(updatedPost)

      return mappedPost
    },
    delete: async (postId: string) => {
      await fetch(`${BASE_PATH}/posts/${postId}`, {method: "DELETE"})
      return
    }
  };
}