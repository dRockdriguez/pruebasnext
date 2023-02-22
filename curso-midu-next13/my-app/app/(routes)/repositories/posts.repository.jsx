export const getPosts = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
}
