import { Suspense } from 'react'
import PostList from '../../components/PostsList'

export default async function PostsPage () {
  return (
    <>
      <h1>Posts</h1>
      <section>
        <Suspense fallback={<p>Cargando posts...</p>}>
          <PostList />
        </Suspense>
      </section>
    </>
  )
}
