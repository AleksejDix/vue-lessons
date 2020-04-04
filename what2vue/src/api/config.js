import axios from 'axios'
import NProgress from 'nprogress'

export const baseURL = 'https://api.themoviedb.org/3/'
export const api_key = '9358e80dc961363e5396315291294f14'

const API = axios.create({
  baseURL,
  params: {
    api_key,
    language: 'en-US'
  }
})

// before a request is made start the nprogress
API.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
API.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default API
