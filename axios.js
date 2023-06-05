import axios from 'axios'

export default () => {
  const apiClient = axios.create({
    baseURL: 'https://staging.mazaady.com/api/v1/',
    headers: {
      Accept: 'application/json',
      ContentType: 'application/json',
      'Accept-Language': 'en',
      'Content-Language': 'en',
      'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16',
    },
  })
  // apiClient.interceptors.response.use((response) => {
  //   return response
  // }, apiResponseCatch)
  return apiClient
}
