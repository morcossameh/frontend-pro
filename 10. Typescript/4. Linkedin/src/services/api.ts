import axios, { InternalAxiosRequestConfig } from 'axios'

const API_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

function clearAndRedirectToLogin(): Promise<never> {
  localStorage.clear()
  sessionStorage.clear()
  window.location.href = '/login'
  return Promise.reject(new Error('Session expired. Please login again.'))
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status !== 401) {
      const errorMessage = error.response?.data?.error || error.message || 'An error occurred'
      return Promise.reject(new Error(errorMessage))
    }

    if (originalRequest._retry) {
      return clearAndRedirectToLogin()
    }

    originalRequest._retry = true

    const refreshToken = localStorage.getItem('refreshToken')

    if (!refreshToken) {
      return clearAndRedirectToLogin()
    }

    try {
      const response = await axios.post(`${API_URL}/api/auth/refresh-token`, {
        refreshToken
      })

      const { accessToken, refreshToken: newRefreshToken } = response.data

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', newRefreshToken)

      originalRequest.headers.Authorization = `Bearer ${accessToken}`

      return api(originalRequest)
    } catch {
      return clearAndRedirectToLogin()
    }
  }
)

export default api
