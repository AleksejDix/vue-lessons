import api from '@/api/config'
export default {
  index: (id, config = {}) => api.v3.get(`/person/${id}/movie_credits`, config)
}
