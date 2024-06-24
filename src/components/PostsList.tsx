import { useEffect, useState } from "react"
import { useUseCases } from "../contexts/dependenciesContext"
import type { Post } from "../modules/Posts/domain/models/Post"
export const PostList = () => {
const [posts, setPosts] = useState<Post[] | null>(null)
const { getPostsUseCase} = useUseCases()


useEffect(() => {
  const getPosts = async () => {
    const postsResult = await getPostsUseCase()
    setPosts(postsResult)
  }
  getPosts()
}, [getPostsUseCase])


  return (
    <div>
      <h1>Post List</h1>
      {posts?.map( post => {
        return <div key={post.id}>{post.title}</div>
      })}
    </div>
  )
}