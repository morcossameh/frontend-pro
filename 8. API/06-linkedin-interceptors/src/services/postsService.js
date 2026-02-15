import api from './api'

export const fetchPosts = async () => {
  const response = await api.get('/api/posts')
  return response.data
}

export const createPost = async (content, reactions = [], commentsCount = 0, repostsCount = 0) => {
  const response = await api.post('/api/posts', {
    content,
    reactions,
    commentsCount,
    repostsCount,
  })
  return response.data
}
