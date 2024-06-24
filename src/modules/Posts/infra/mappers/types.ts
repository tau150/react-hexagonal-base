import type { Post } from "../../domain/models/Post"
import type { PostDto } from "../dto"

export type MapToDomainPost = (dto: PostDto ) => Post