
export type PostTypeDTO =   "art" | 'post' | 'publi'

export interface PostDto {
    id: string;
    title: string;
    body: string;
    type: PostTypeDTO
    userId: number;
}