import { Post } from "../models/Post"

export interface PostRepository {
  getAll(): Promise<Post[]>
  getById(id: string): Promise<Post>
  save(post: Post): Promise<Post>
  update(post: Post): Promise<Post>
  delete(id: string): Promise<void>
}