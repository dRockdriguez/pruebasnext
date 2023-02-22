
import Link from 'next/link'
import { getPosts } from '../(routes)/repositories/posts.repository'
import LikeButton from './LikeButton'

export default async function PostsList () {
  const posts = await getPosts()
  return (
    <>{posts.map(({ id, title, body }) => (
      <article key={id}>
        <Link href={`/posts/${id}`}>
          <h2>{title}</h2>
          <p>{body}</p>
        </Link>
        <LikeButton id={id} />
      </article>
    ))}
    </>
  )
}
