import api from './api'
import { FetchPostsResponse, Post } from '../types'

export const fetchPosts = async (): Promise<FetchPostsResponse> => {
  const response = await api.get<FetchPostsResponse>('/api/posts')
  return response.data
}

export const createPost = async (content: string): Promise<Post> => {
  const token = localStorage.getItem('accessToken')
  const response = await api.post<Post>('/api/posts', {
    content,
  }, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  })
  return response.data
}
