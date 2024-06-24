import { createPost } from '../modules/Posts/application/use-cases/createPost';
import { getPosts } from "../modules/Posts/application/use-cases/getPosts"
import { createApiStorageRepository } from "../modules/Posts/infra/adapters/ApiPostRepository";
import { mapToDomainPost } from "../modules/Posts/infra/mappers/mapToDomainPost";

 const postsRepository = createApiStorageRepository(mapToDomainPost);
 const getPostsUseCase = getPosts(postsRepository);
 const createPostUseCase = createPost(postsRepository);

export { getPostsUseCase,  createPostUseCase }