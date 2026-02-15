import api from './api'

export const fetchPosts = async () => {
  const response = await api.get('/api/posts')
  return response.data
}

export const createPost = async (content) => {
  const token = localStorage.getItem('accessToken')
  const response = await api.post('/api/posts', {
    content,
  }, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return response.data
}
