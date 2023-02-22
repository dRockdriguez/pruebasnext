import Post from '../../../components/Post'

export default function PostLayout ({ children, params }) {
  const { id } = params

  return (
    <>
      <Post id={id} />
      {children}
    </>
  )
}
