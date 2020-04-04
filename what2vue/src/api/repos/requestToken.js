import api from '@/api/config'

export default {
  create: () => api.v4.post(`/auth/request_token`)
}
