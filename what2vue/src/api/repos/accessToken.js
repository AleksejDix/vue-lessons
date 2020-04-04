import api from '@/api/config'

export default {
  create: payload => api.v4.post(`/auth/access_token`, payload),
  destroy: id => api.v4.delete(`/auth/access_token`, id)
}
