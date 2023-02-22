import { getComments } from '../../../repositories/post.repository'
import Image from 'next/image'

export default async function CommentsPage ({ params }) {
  const { id } = params
  const comments = await getComments(id)

  return (
    <ul style={{ background: '#444' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image width='50' height='50' src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`} alt='alt' />

          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
