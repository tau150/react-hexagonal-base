import { PostType } from './../../domain/models/PostType';
import type { Post } from "../../domain/models/Post";
import type { PostDto, PostTypeDTO } from "../dto";

const mapToDomainPostType = (type: PostTypeDTO): PostType => {
  switch (type) {
    case 'art':
      return PostType.ARTICLE;
    case 'post':
      return PostType.MICRO_POST;
    case 'publi':
      return PostType.PUBLICITY;
    default:
      return PostType.ARTICLE;

    // Because this mapper is just an example and the fake api does not return a type I am disabling the error here
    // default:
    //  throw new Error(`${type} is not one of the expected values for type`)
  }
};

export const mapToDomainPost = (dto: PostDto): Post => {
  return {
    id: dto.id,
    title: dto.title,
    body: dto.body,
    type: mapToDomainPostType(dto.type)
  };
};
