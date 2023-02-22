export const getPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }).then(res => res.json())
}

export const getComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // throw new Error('Ha ocurrido un error recuperando los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' }).then(res => res.json())
}
