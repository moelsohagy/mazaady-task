import axios from 'axios'

export default () => {
  const apiClient = axios.create({
    baseURL: 'https://api-ittara-beta.dafa.sa/v1/',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      'Accept-Language': 'ar-EG',
      'Content-Language': 'ar-EG'
    }
  })
  // apiClient.interceptors.response.use((response) => {
  //   return response
  // }, apiResponseCatch)
  return apiClient
}