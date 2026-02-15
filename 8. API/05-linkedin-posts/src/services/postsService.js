import axios from 'axios'

const API_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPosts = async () => {
  const token = localStorage.getItem('accessToken')
  const response = await api.get('/api/posts', {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
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
