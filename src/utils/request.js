import axios from 'axios'
import store from '@/store/index.js'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 基础路径
})
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

export default request
