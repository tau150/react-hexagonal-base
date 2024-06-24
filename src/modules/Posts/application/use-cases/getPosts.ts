import { PostRepository } from "../../domain/ports/PostRepository";

export const getPosts = (repository: PostRepository) => {
    return () => {
        return repository.getAll()
    }
}