import Link from 'next/link'
import { getPost } from '../(routes)/repositories/post.repository'

export default async function Post ({ id }) {
  const post = await getPost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Show comments</Link>
    </article>
  )
}
