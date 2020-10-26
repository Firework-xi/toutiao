import axios from '@/utils/request.js'
import store from '@/store/index.js'
export const login = data => axios.post('/app/v1_0/authorizations', data)
export const yzm = mobile => axios.get(`/app/v1_0/sms/codes/${mobile}`)
export const getuser = () => {
  return axios({
    method: 'get',
    url: '/app/v1_0/user',
    headers: {
      Authorization: `Bearer ${store.state.user.token}`
    }
  })
}
export const getchannels = () => {
  return axios({
    method: 'get',
    url: '/app/v1_0/user/channels'
  })
}
export const getarticles = params => {
  return axios({
    method: 'get',
    url: '/app/v1_1/articles',
    params
  })
}
