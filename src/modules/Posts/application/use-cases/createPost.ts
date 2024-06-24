import { Post, ensurePostTypeIsValid } from "../../domain/models/Post";
import { PostRepository } from "../../domain/ports/PostRepository";

export const createPost = (repository: PostRepository) => {
    return (post: Post) => {
       ensurePostTypeIsValid(post.type)
       return repository.save(post)
    }
}