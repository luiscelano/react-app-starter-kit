import axios from 'axios'
import config from 'src/config/constants'

const { API_URL } = config

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const getAccessToken = async (token) => {
  return httpClient.post('auth/getAccessToken', {
    token
  })
}

export const getTokenInterceptor = httpClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const refreshTokenInterceptor = httpClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      console.log('getting accessToken...')
      const refreshToken = localStorage.getItem('refreshToken')
      const resp = await getAccessToken(refreshToken)
      const accessToken = resp.data.accessToken

      localStorage.setItem('accessToken', accessToken)
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      return httpClient(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default httpClient
