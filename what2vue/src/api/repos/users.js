import api from '@/api/config'

export default {
  index: (config = {}) => api.user.get('/', config)
}
