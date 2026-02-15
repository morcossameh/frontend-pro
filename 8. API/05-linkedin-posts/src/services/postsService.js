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

export const createPost = async (content, reactions = [], commentsCount = 0, repostsCount = 0) => {
  const token = localStorage.getItem('accessToken')
  const response = await api.post('/api/posts', {
    content,
    reactions,
    commentsCount,
    repostsCount,
  }, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return response.data
}

export const getPostById = async (id) => {
  const token = localStorage.getItem('accessToken')
  const response = await api.get(`/api/posts/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return response.data
}

export const updatePost = async (id, updates) => {
  const token = localStorage.getItem('accessToken')
  const response = await api.put(`/api/posts/${id}`, updates, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return response.data
}

export const deletePost = async (id) => {
  const token = localStorage.getItem('accessToken')
  await api.delete(`/api/posts/${id}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return true
}
