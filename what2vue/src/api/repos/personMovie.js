import axios from '@/api/config'
export default {
  index: (id, config = {}) => axios.get(`/person/${id}/movie_credits`, config)
}
